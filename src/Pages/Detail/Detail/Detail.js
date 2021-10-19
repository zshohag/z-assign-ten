import React, { useEffect, useState } from 'react';
import { Card ,Button, Row} from 'react-bootstrap';
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
        <div>
         

             <h1 className='mt-4' >{single?.name}</h1>
         
                
                  

             <Row xs={1} md={1} className=" g-4 p-5 ">
             <Card className ='bg-light'>
                <Card.Img variant="top"  src={single?.image}  />
                <Card.Body>
                <Card.Title></Card.Title>
                    <Card.Text>
                        {single?.description}
                    </Card.Text>
                <Link to="/home" >
                <Button className='text-white' variant="dark"> Go Back   </Button>
                </Link> 
                </Card.Body>
            </Card>
     
            </Row>

          
           
        </div>
    );
};

export default Detail;