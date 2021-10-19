import React from 'react';
import { Card, Col, Row  } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div>
       <Row xs={1} md={4} className=" g-4 m-5 ">
            
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x1.png.pagespeed.ic.2EznENOFkd.webp"  />
                <Card.Body>
                <Card.Title>Georgette Hogan</Card.Title>
                    <Card.Text>
                    Cardiologists
                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>

        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x2.png.pagespeed.ic.IG-jB4LJxU.webp" />
                <Card.Body>
                <Card.Title>Hebert Booker</Card.Title>
                    <Card.Text>
                    Cardiologists
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x3.png.pagespeed.ic.ShbXP_lpvJ.webp" />
                <Card.Body>
                <Card.Title>Head Edwards</Card.Title>
                    <Card.Text>
                     Dentist
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src='https://preview.colorlib.com/theme/docmed/img/experts/x4.png.pagespeed.ic.qkGIuOxLyX.webp' />
                <Card.Body>
                <Card.Title>Henderson Burch</Card.Title>
                    <Card.Text>
                    Dentist
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x6.png.pagespeed.ic.6jpUJ-3ky2.webp" />
                <Card.Body>
                <Card.Title>Antonia Buchanan</Card.Title>
                    <Card.Text>
                    Ophthalmologists
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x7.png.pagespeed.ic.0WrT5N1mpO.webp" />
                <Card.Body>
                <Card.Title>Elsie Pena</Card.Title>
                    <Card.Text>
                    Traumatologist
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x8.png.pagespeed.ic.2gwd86EP8z.webp" />
                <Card.Body>
                <Card.Title>Roach Leblanc</Card.Title>
                    <Card.Text>
                    Surgerist
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col className='p-3  ' >
            <Card className ='bg-light'>
                <Card.Img variant="top" src="https://preview.colorlib.com/theme/docmed/img/experts/x9.png.pagespeed.ic.E7VZC8uh2G.webp" />
                <Card.Body>
                <Card.Title>Juana Lee</Card.Title>
                    <Card.Text>
                    Neurologists
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>

        </div>
    );
};

export default Doctors;




