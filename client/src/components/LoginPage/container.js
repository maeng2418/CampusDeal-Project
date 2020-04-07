import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginPage from './presenter';

const Container = (props) => {

  const onSubmitHandler = (body) => {
    props.loginUser(body)
      .then(response => {
        if (response.payload.loginSuccess) {
          localStorage.setItem('userId', response.payload.userId);
          props.history.push('/'); // 로그인 성공시 페이지 이동
        } else {
          alert("Error");
        }
      })
  }

  return (
    <LoginPage onSubmitHandler={onSubmitHandler} id={localStorage.getItem("id") ? localStorage.getItem("id") : ""} />
  )
}

export default withRouter(Container);