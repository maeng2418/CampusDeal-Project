import React, {useState, useEffect} from 'react';
import { Button, Descriptions } from 'antd';

const BookInfo = (props) => {

  const [Methods, setMethods] = useState("");

  const method_ko = {
    "safe" : "안전거래",
    "post" : "택배",
    "meet" : "직거래",
    "etc" : "기타"
  }

  useEffect(() => {
    let method = ""
    props.detail.methods.forEach((item) => {
      method += method_ko[item]+", ";
    })
    setMethods(method.substring(0, method.length-2));
  }, []);

    return (
        <div>
            <Descriptions title="판매정보" bordered>
                <Descriptions.Item label="판매자">{props.detail.seller.name}</Descriptions.Item>
                <Descriptions.Item label="대학교">{props.detail.seller.campus}</Descriptions.Item>
                <Descriptions.Item label="분류">{props.detail.category}</Descriptions.Item>
                <Descriptions.Item label="지은이">{props.detail.writer}</Descriptions.Item>
                <Descriptions.Item label="출판사">{props.detail.publisher}</Descriptions.Item>
                <Descriptions.Item label="출판연도">{props.detail.publishDate.substr(0,10)}</Descriptions.Item>
                <Descriptions.Item label="도서상태">{props.detail.grade}</Descriptions.Item>
                <Descriptions.Item label="가격">{props.detail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Descriptions.Item>
                <Descriptions.Item label="거래방식">{Methods}</Descriptions.Item>

            </Descriptions>
            <br />

            <div style={{ display:'flex', justifyContent:'center' }}>
            <Button size="large" shape="round" type="primary" style={{marginRight:'2rem'}} onClick>
                    장바구니
            </Button>
                <Button size="large" shape="round" type="danger" onClick>
                    구매하기
            </Button>
            </div>

        </div>
    );
}

export default BookInfo;
