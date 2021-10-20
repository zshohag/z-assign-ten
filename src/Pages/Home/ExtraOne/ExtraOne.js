import React, { useState } from 'react';
import { Accordion} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'

const ExtraOne = () => {

    
     // Animation 
     const [flip, set] = useState(false)
     const props = useSpring({
       to: { opacity: 1 },
       from: { opacity: 0 },
       reset: true,
       reverse: flip,
       
       delay: 1000,
       onRest: () => set(!flip),
     })

    return (
        <div >
              <div>  
            <animated.h2 style={props} className='text-dark m-5 '  >WHY  <span style={{backgroundColor:"cadetblue"}} className=" text-white p-1 rounded " > CHOOSE</span>   US? </animated.h2>
              <div className='row m-5  ' >
                  <div className='col-md-6 border p-3 bg-light ' >
                    <h3 className='mb-5  ' >
                    We Believe Everyone Should Have Easy Access To Great Medical Care
                    </h3>
                    <p>
                    Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function. Medical care serving these "paracurative" functions may legitimately be given indepedently, without associated curing or preventive intent of the provider of care. Although such services do not result in benefits to health, such as extension of life or reduction of disability, they do have other valued outcomes, outcomes not measurable as a gain in personal health status. For example, caring activities may result in satisfaction, comfort, or desirable affective states, even while the patient's health status deteriorates during an incurable illness.
                    </p>
               </div>
                  <div className='col-md-6 mt-5 pt-2 ' >
                       <h3>WHAT MAKES US BEST?</h3>
                  <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>QUALIFIED DOCTORS</Accordion.Header>
                    <Accordion.Body>
                    One-Care Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK and quality hospitals in the Middle East. Even the nurses and technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines..
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>ONLINE ENROLLMENT</Accordion.Header>
                    <Accordion.Body>
                    An online enrollment system can collect all the information into a central hub, making it easy to access and modify. Registration information is instantly added to the database without the need to enter the information into a registry by hand
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>MODERN FACILITIES </Accordion.Header>
                    <Accordion.Body>
                    Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>FREE CONSULTATION</Accordion.Header>
                    <Accordion.Body>
                    Get a quick and hassle-free appointment with an online doctor now without waiting long hours in a long queue
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
                  </div>
              </div>
        </div>
        </div>
    );
};

export default ExtraOne;