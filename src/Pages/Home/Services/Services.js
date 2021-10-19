import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';



const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div id="services" className='mt-2'  >
            <h1  className="mt-3" >Our Services</h1>
           <Row xs={1} md={3} className=" g-4 m-5 ">
        
            {
                services.map(service =><Service key={service.id} service={service} ></Service> )
            }

          </Row>

        </div>
    );
};

export default Services;