import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';


const Footer = () => {
   
    return (
        <div  >
 
        <Row xs={1}  md={2} className="g-3 m-2 p-2  ">
        
                <Col>
                        <Card border="white"  className='m-5' >
                            <Card.Body >
                            <Card.Title className="text-center" > <h3> One Care </h3> </Card.Title>
                            <Card.Text  > 
                                <h6>We are committed to curating a constantly-expanding index of free content including recent innovations in healthcare, research and technology.

                                We are based in the UK and Australia, but our reach is truly global with over 121 million annual visitor sessions worldwide.
                                This website is certified by Health On the Net Foundation.As a trusted source of all your medical and life science needs, this site and content complies with the HONcode standard for trustworthy health information, which you can verify here</h6>
                            </Card.Text> 
                            </Card.Body>
                        </Card>
                </Col>

                <Col>
                        <Card border="white"   className='m-5  ' >
                            <Card.Body >
                            <Card.Title className="text-right ms-3" > <h4>Location </h4> </Card.Title>
                            <Card.Text  >  
                                <h6>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>Level-7,  Z Tower , Dhanmondi , Dhaka</ListGroup.Item>
                                    <ListGroup.Item>  Official : zds.mee@gmail.com</ListGroup.Item>
                                    <ListGroup.Item>Helpline : 96665597 [ Available : 24 Hours ]</ListGroup.Item>
                                    </ListGroup>
                                </h6>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                        
             </Row>

               <div className='text-center mx-auto m-5 ' >
                    <hr className= 'm-5' />
                    <small  >© One-Care – All Rights Reserved.</small>
               </div>
        </div>


        
    );
};

export default Footer;