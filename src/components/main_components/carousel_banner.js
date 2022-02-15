import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const SimpleCarousel = (props) => {

  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="img/banner_1.svg"

        alt=''/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner_1.svg"
          alt=''/>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner_1.svg"
          alt=''
        />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default SimpleCarousel;