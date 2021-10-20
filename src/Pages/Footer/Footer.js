import React from 'react';
import './Footer.css'



const Footer = () => {
   
    return (
        <div>
 

<div>

 
  <footer
          className="text-center text-lg-start text-white "
          style={{backgroundColor:"#1c2331"}}
    
          >
    <section className="pt-1 mt-4 ">
      <div className="container text-center text-md-start mt-5">
      
        <div className="row mt-3">
        
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
     
            <h6 className="text-uppercase fw-bold">One Care</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:'60px',backgroundColor:"#7c4dff",height:"2px"}}
            
                />
            <p>
            It was established in July 1983. There are multiple services like- neuro, roster, liver, neurosurgery, endocrine, etc. Yet, it has started a new horizon in laparoscopic Abnormal and colorectal surgery. For its sophisticated treatment and affordable cost, patient complaints are also good.
            </p>
          </div>
        

        
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
            <h6 className="text-uppercase fw-bold">Menu</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:'60px',backgroundColor:"#7c4dff",height:"2px"}}
                />
            <p>
              <a href="/home" className="text-white"><i class="fas fa-bars"></i> Home</a>
            </p>
            <p>
              <a href="/doctors" className="text-white"><i class="fas fa-user-md"></i> Best Doctors</a>
            </p>
            <p>
              <a href="/department" className="text-white"><i class="fas fa-user-shield"></i> Our Department</a>
            </p>
            <p>
              <a href="/about" className="text-white"><i class="fas fa-question"></i> Why One Care </a>
            </p>
          </div>
         

         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:'60px',backgroundColor:"#7c4dff",height:"2px"}}
               
                />
            <p>
              
              <a href="/Login" className="text-white">Your Account <i class="far fa-user-circle"></i></a>
            </p>
            <p>
              <a href="/login" className="text-white"> Need Help <i class="fas fa-question"></i></a>
            </p>
          </div>
         

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:'60px',backgroundColor:"#7c4dff",height:"2px"}}
               
                />
            <p><i className="fas fa-home mr-3"></i> Level-7,  Z Tower , Dhanmondi </p>
            <p><i className="fas fa-envelope mr-3"></i> zds.mee@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        
        </div>
    
      </div>
    </section>
   
 
    <div
         className="text-center p-2"
         style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}
         > <small  >© One Care – All Rights Reserved.</small>

    </div>

  </footer>
 

</div>





</div>
        
    );
};

export default Footer;