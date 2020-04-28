import React, { useState, useEffect } from 'react';
import { Input, Select, Row } from 'antd';
import BookCard from './Sections/BookCard/BookCard';
import Axios from 'axios';

function MainPage(props) {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get('/api/book/getBooks')
      .then(response => {
        if(response.data.success) {
          console.log(response.data.books)
          setBooks(response.data.books);
        } else {
          alert("책 정보를 가져오는 데 실패하였습니다.");
        }
      })
  }, []);

  return (
    <div style={{ width: '90%', margin: 'auto', display:'flex', flexDirection:'column' }}>
        <Input.Group compact style={{textAlign:'center'}} >
          <Select defaultValue="all" size="large" style={{ width: '10%' }}>
            <Select.Option value="all">통합검색</Select.Option>
            <Select.Option value="law">법학</Select.Option>
            <Select.Option value="economics">경영/경제</Select.Option>
            <Select.Option value="humanities">인문</Select.Option>
            <Select.Option value="linguistics">어문</Select.Option>
            <Select.Option value="sociology">사회과학</Select.Option>
            <Select.Option value="science">자연과학</Select.Option>
            <Select.Option value="engineering">공학</Select.Option>
            <Select.Option value="education">사범</Select.Option>
            <Select.Option value="life">생활환경</Select.Option>
            <Select.Option value="art">예체능</Select.Option>
            <Select.Option value="agriculture">농축산</Select.Option>
            <Select.Option value="medical">의약학</Select.Option>
          </Select>
          <Input.Search size="large" style={{ width: '50%' }} onSearch={value => console.log(value)} enterButton />
        </Input.Group>
        <Row gutter={[16, 16]}>
          {Books.map((book, index) => (
            <BookCard book={book} key={index} />
          ))}
        </Row>
    </div>
  )
}

export default MainPage;
