import React from 'react';
import { Card, Col, Row  } from 'react-bootstrap';
import './Department.css'


const Department = () => {
    return (
        <div>
            <Row xs={1} md={4} className=" g-4 m-5 ">

    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src="https://image.freepik.com/free-vector/human-brain-anatomy-function-area-mind-system-infographic-composition-with-text-legend-keys-colorful-areas_1284-54435.jpg"  />
            <Card.Body>
            <Card.Title>Neurology</Card.Title>
                <Card.Text>
            
                </Card.Text>

            </Card.Body>
        </Card>
    </Col>

    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img  variant="top" src="https://image.freepik.com/free-vector/orthopedic-horizontal-illustration-with-doctor-prepare-magnetic-resonance-imaging-scan_1284-62840.jpg" />
            <Card.Body>
            <Card.Title>Opthalmology</Card.Title>
                <Card.Text>
            
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img  variant="top" src=" https://image.freepik.com/free-vector/medical-mri-scanner-isometric-projector-vector_1441-700.jpg" />
            <Card.Body>
            <Card.Title>Nuclear Magnetic</Card.Title>
                <Card.Text>
            
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src='https://image.freepik.com/free-vector/plastic-surgeon-operating-patient-surgery-room_33099-2120.jpg' />
            <Card.Body>
            <Card.Title>Surgery</Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src="https://i.ibb.co/hYM8PzQ/cardiology-clinic-hospital-department-healthy-heart-cardiovascular-prevention-healthcare-industry-id.jpg" />
            <Card.Body>
            <Card.Title>Cardiology</Card.Title>
                <Card.Text>
        
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src="https://image.freepik.com/free-vector/respiratory-disease-medical-problem-lung-cancer-bronchial-asthma-pneumonia-diagnosis-chest-x-ray-scan-with-inflammations-radiology-design-element-vector-isolated-concept-metaphor-illustration_335657-4018.jpg" />
            <Card.Body>
            <Card.Title>X-ray</Card.Title>
                <Card.Text>
    
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src="https://image.freepik.com/free-vector/vector-set-different-dental-objects-tools-lamp-chair-drill-tooth-implant-structure-isolated-white-background_1284-45529.jpg" />
            <Card.Body>
            <Card.Title>Dental</Card.Title>
                <Card.Text>
            
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col className='p-3  ' >
        <Card className ='bg-light'>
            <Card.Img variant="top" src="https://image.freepik.com/free-vector/orthopedics-color-icons-set_1284-11320.jpg" />
            <Card.Body>
            <Card.Title>Traumatology</Card.Title>
                <Card.Text>
            
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
         
          </Row>
        </div>
    );
};

export default Department;