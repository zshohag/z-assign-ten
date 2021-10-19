import React from 'react';
import {  Carousel, Col, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="m-3 " >
          

<Row xs={1} md={1} className="" >

    <Col>

        <Carousel>
            <Carousel.Item>
            <img
            className="d-block w-100  "
            src="https://i.ibb.co/jhCHWgB/bgn-slider-03.jpg"       
            alt="First slide"
            />
               
                <Carousel.Caption>
                <h3 className=" text-dark  " >Healthy heart, healthy family</h3>
                <p className=" text-dark  " >A healthy heart is central to overall good health. Embracing a healthy lifestyle at any age can prevent heart disease and lower your risk for a heart attack or stroke.</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img   
                className="d-block w-100 "
                src="https://i.ibb.co/cXmx8rf/pexels-pixabay-263194.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3> We assure you of our best service at all times</h3>
                <p>In healthcare sector, service excellence is the facility of   the hospital as
healthcare service provider to consistently </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img  

                className="d-block w-100   "
                src="https://i.ibb.co/V2nTc79/pexels-mart-production-7088530-1.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className=' p-1 text-white' >we have world best Neurologist</h3>
                <p className=' p-2 text-white ' >Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's diseas</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 

    </Col>

</Row>

        </div>
    );
};

export default Banner;