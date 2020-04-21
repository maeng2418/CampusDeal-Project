import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import RegisterPage from './presenter';

const Container = (props) => {

  const [Postcode, setPostcode] = useState("");
  const [RoadAddress, setRoadAddress] = useState("");

  const onSubmitHandler = (body) => {

    if(body.password !== body.confirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
    }

    if(!body.privacy) {
      return alert('개인정보 제 3자 제공을 동의해주세요.');
    }

    if(!body.service) {
      return alert('서비스 이용약관을 동의해주세요.');
    }

    props.registerUser(body)
    .then(response => {
      if(response.payload.success){
        props.history.push('/login');
      } else {
        if(response.payload.err.code === 11000){
          alert("이미 존재하는 ID입니다.");
        } else {
          alert("Failed to sign up");
        }
      }
    })
  }

  return (
    <RegisterPage onSubmitHandler={onSubmitHandler} Postcode={Postcode} setPostcode={setPostcode} RoadAddress={RoadAddress} setRoadAddress={setRoadAddress} />
  );
}

export default withRouter(Container);
