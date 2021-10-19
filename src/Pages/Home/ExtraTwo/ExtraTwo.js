import React from 'react';
import { Card,  Col, Row } from 'react-bootstrap';

const ExtraTwo = () => {
    return (
        <div  className='m-5 p-4 ' >
              <h1 className='text-dark ' >Our additional services</h1>


<Row xs={1} md={3} className=" g-4 m-2 " >
        
      <Col  >
      <Card>
   <Card.Img variant="top" style={{height:'200px'}} src="https://i.ibb.co/TPPvbCx/A-diverse-group-of-women-stand-in-an-institutional-building-in-medical-wear-A-woman-wearing-scrubs-s.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title  >Healthcare anytime, anywhere</Card.Title>
     <Card.Text  >
     You can get the care you need 24/7 – be it online or in clinic. And you can manage your health via our app: book appointments, access your test results, and more.
     </Card.Text>
   </Card.Body>

 </Card>
        </Col>
        
      <Col  >
      <Card>
   <Card.Img variant="top" style={{height:'200px'}} src="https://i.ibb.co/LkGwVRD/emergency.png" />
   <Card.Body className='bg-light' >
     <Card.Title>Emergency Care</Card.Title>
     <Card.Text>
     An emergency service is any health care service provided to evaluate and/or treat any medical condition such that a prudent layperson possessing an average knowledge of medicine and health.
     </Card.Text>
   </Card.Body>

 </Card>
        </Col>
        
      <Col >
      <Card>
   <Card.Img variant="top" style={{height:'200px'}} src="https://i.ibb.co/580yqcb/1-WELCOME-IMAGE-medical-personnel-consult-1024x576.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title>Hospitality</Card.Title>
     <Card.Text>
     Hospitality is basically developing a relationship between a guest and a host. In the relationship process a stranger becomes a guest, a friend and finally a loyal customer.
     </Card.Text>
   </Card.Body>

 </Card>
        </Col>
      </Row>


        </div>
    );
};

export default ExtraTwo;