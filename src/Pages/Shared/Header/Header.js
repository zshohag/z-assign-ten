import React from 'react';
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useAuth from '../../../hooks/useAuth'

const Header = () => {
  
     const {user,logOut} = useAuth()
  
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"  >
            <Container   >
            <Navbar.Brand to="/home"> <div className="nav " >  One Care </div> </Navbar.Brand>
            <Navbar.Toggle />
           
            <Navbar.Collapse className="justify-content-end text ">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link  as={HashLink} to="/doctors">Doctors</Nav.Link>
            <Nav.Link  as={HashLink} to="/department">Department</Nav.Link>
            <Nav.Link  as={HashLink} to="/about">About</Nav.Link>
           { 
            user?.email ? 
            <Button onClick={logOut}  variant="dark">Log Out</Button>
            :
           <Nav.Link  className='text-white bg-dark' as={HashLink} to="/login">Login</Nav.Link>}
           <br />

          {   user?.email ? 
          
          <Navbar.Text className="ms-1" >
            Signed in as -  <span className='bg-white text-dark rounded m-1 p-2 ' > {user?.displayName }  </span>
          </Navbar.Text> 
            : <p></p>
         }
              
    </Navbar.Collapse>
           
            </Container>
    </Navbar>       
        </>
    );
};

export default Header;