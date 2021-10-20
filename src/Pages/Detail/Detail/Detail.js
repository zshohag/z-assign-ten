import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Detail = () => {

    const {serviceId} = useParams();  
     
    const [detail,setDetail] = useState([]) 
    const [single,setSingle] =  useState({})

    useEffect(()=>{
       const url = `https://zshohag.github.io/jsonapi/services.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    
    

    useEffect( ()=> {
        
        const exactItem =  detail.find( z => z?.id == serviceId )
         setSingle(exactItem)
      },[detail])

    return (
        <div classNameName='m-5 p-5' >
            <h3> </h3>
            <div className="card m-4 p-4 " >
            <div className="row g-0">
                <div className="col-md-6">
                <img src={single?.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{single?.name}</h5>
                    <p className="card-text">{single?.description}</p>
                    <Link to="/home" >
                      <Button classNameName='text-white' variant="dark"> Go Back</Button>
                  </Link> 
                </div>
                </div>
            </div>
            </div>

          
           
        </div>
    );
};

export default Detail;