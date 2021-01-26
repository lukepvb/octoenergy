import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cardImg from '../assets/img/product-image';
import '../assets/styles.css';

const CarouselComponent = (props) => {
  return (
    <div className="carousel-div">
      <Carousel>
        <div className="product-card-div">
          <Card
            className="card-img-container"
            style={{ border: 'black', borderRadius: '5px' }}
          >
            <CardImg src={cardImg} className="card-img" alt="Card image" />
            <CardBody>
              <h2 className="product-title">
                <strong>Completely different product No. 1</strong>
              </h2>
              <h2 className="product-price">€53.99</h2>
            </CardBody>
          </Card>
        </div>
        <div className="product-card-div">
          <Card
            className="card-img-container"
            style={{ border: 'black', borderRadius: '5px' }}
          >
            <CardImg src={cardImg} className="card-img" alt="Card image" />
            <CardBody>
              <h2 className="product-title">
                <strong>Completely different product No. 2</strong>
              </h2>
              <h2 className="product-price">€63.99</h2>
            </CardBody>
          </Card>
        </div>
        <div className="product-card-div">
          <Card
            className="card-img-container"
            style={{ border: 'black', borderRadius: '5px' }}
          >
            <CardImg src={cardImg} className="card-img" alt="Card image" />
            <CardBody>
              <h2 className="product-title">
                <strong>Completely different product No. 3</strong>
              </h2>
              <h2 className="product-price">€44.99</h2>
            </CardBody>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
