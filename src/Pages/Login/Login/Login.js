import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} =  useAuth()
    return (
        <div  className='mt-5' >
               
               <Button onClick={signInUsingGoogle} variant="dark">Google SignIn</Button>
        </div>
    );
};

export default Login;