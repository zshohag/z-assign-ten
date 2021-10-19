import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name,description,image} = props.service
    return (
        <div>

        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                <Link to={`/detail/${id}`} >
                <Button  className='text-white' variant="dark">More Info  </Button>
                </Link> 
                </Card.Body>
            </Card>
        </Col>

        </div>
    );
};

export default Service;


/* 

 







                     <Card.Img variant="top" src={image} />
    <Card.Body>

    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
       <p>{description}</p>
       
    </Card.Text>
     <button>Z</button>
  </Card.Body>

*/