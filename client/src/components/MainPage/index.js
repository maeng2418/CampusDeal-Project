import React, { useState, useEffect } from 'react';
import { Row, Typography } from 'antd';
import SearchBar from 'components/SearchBar';
import BookCard from './Sections/BookCard/BookCard';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

function MainPage(props) {

  const [Books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get('/api/book/getBooks')
      .then(response => {
        if(response.data.success) {
          setBooks(response.data.books);
        } else {
          alert("책 정보를 가져오는 데 실패하였습니다.");
        }
      })
  }, []);


  return (
    <div style={{ width: '90%', margin: 'auto', display:'flex', flexDirection:'column' }}>
      <SearchBar/>
        <Typography.Title level={2} style={{marginBottom:'2rem'}}><span style={{ borderBottom: '3px solid black', paddingBottom: '8px', paddingRight:'2px', fontWeight: 'bold', fontSize: '28px' }}>NEW</span></Typography.Title>
        <Row gutter={[32, 16]}>
          {Books.map((book, index) => (
            <BookCard book={book} key={index} />
          ))}
        </Row>
    </div>
  )
}

export default withRouter(MainPage);
