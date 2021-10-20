import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import { useSpring, animated } from 'react-spring'



const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])


     // Animation 
     const [flip, set] = useState(false)
     const props = useSpring({
       to: { opacity: 1 },
       from: { opacity: 0 },
       reset: true,
       reverse: flip,
       
       delay: 1200,
       onRest: () => set(!flip),
     })
    return (
        <div id="services" className='mt-2'  >

  <animated.h3 style={props}> Our <span className='bg-dark p-2 rounded-3 text-white ' > Services </span>  </animated.h3>
    
           <Row xs={1} md={3} className=" g-4 m-2 ">
        
            {
                services.map(service =><Service key={service.id} service={service} ></Service> )
            }

          </Row>

        </div>
    );
};

export default Services;