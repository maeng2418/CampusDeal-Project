import React from 'react';
import { Col, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import ImageSlider from 'components/Common/ImageSlider/ImageSlider';

const BookCard = (props) => {

  return (
    <Col lg={6} md={8} xs={24}>
      <Card
        hoverable={true}
        cover={<Link to={`/book/${props.book._id}`}><ImageSlider images={props.book.images}/></Link>}
      >
        <Meta
          title={props.book.title}
          description={`$${props.book.price}`}
        />
      </Card>
    </Col>
  );
}

export default BookCard;
