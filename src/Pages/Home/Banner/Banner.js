import React from 'react';
import {  Carousel, Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className=" mb-5" >
          
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/jhCHWgB/bgn-slider-03.jpg" 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> <span style={{backgroundColor:'cadetblue'}} className="p-1 rounded-2"  >Healthcare 24 Hours </span> </h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/V2nTc79/pexels-mart-production-7088530-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3><span style={{backgroundColor:'cadetblue'}} className="p-1 rounded-2" >World Best Laboratory</span> </h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/cXmx8rf/pexels-pixabay-263194.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3> <span style={{backgroundColor:'cadetblue'}} className="p-1 rounded-2" > Best Medical Equipment </span>  </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



















        </div>
    );
};

export default Banner;