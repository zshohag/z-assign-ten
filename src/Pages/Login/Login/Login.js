import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword ,sendEmailVerification, sendPasswordResetEmail ,updateProfile  } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication()

const Login = () => {
    const {signInUsingGoogle} =  useAuth()
    const [name,setName] =  useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState()
    const [isLogin,setIsLogin] = useState(false)
  
  
  
      const auth = getAuth();
      const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
      const handleNameChange = e => {
        setName(e.target.value)
      }
      const handleEmailChange = e => {
        setEmail(e.target.value)
      }
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
      const handleRegistration = e => {
      e.preventDefault();

      if(password.length < 6){
        setError('Password  Must be  at least 6 characters long')
        return 
      }
      
         isLogin? processLogin(email,password) : registerNewUser(email,password) 

      }
          const processLogin = (email,password) => {
  
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
              const user = result.user
              console.log(user)
              setError('')
            })
            .catch(error =>{
              setError(error.message)
            })
  
          }
          
          const verifyEmail= () => {
            sendEmailVerification(auth.currentUser)
            .then(result => {
              console.log(result)
            })
          }
         
          const handleResetPassword = () => {
            sendPasswordResetEmail(auth,email)
            .then(result =>{
  
            })
          }
          const registerNewUser = (email,password) => {
            createUserWithEmailAndPassword( auth,email,password)
            .then(result => {
              const user = result.user
              setError('')
              verifyEmail()
              setUserName()
            })
            .catch(error=> {
              setError(error.message);
            })
            
          }
          const setUserName = () => {
            updateProfile(auth.currentUser,{displayName:name})
            .then(result => {
              
            })
          }
            return (
                <div  className='mt-5 m-5 ' >

                <div className='m-5 px-5 '>


                <form onSubmit={handleRegistration} >
                <h3 className='text-primary' >Please {isLogin ? 'Login' : "Register" } </h3>

                { !isLogin &&  <div className="row mb-3">
                <label htmlFor="inputName"  className="col-sm-2 col-form-label">Name </label>
                <div className="col-sm-10">
                <input type="text"  onBlur={handleNameChange} className="form-control" id="inputName"  placeholder="Your Name"/>
                </div>
                </div>}

                <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onBlur={handleEmailChange} required type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>

            <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
            <input  type="password" onBlur={handlePasswordChange}  required className="form-control" id="inputPassword3"/>
            </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered?
                    </label>
                    </div>
                </div>
            </div>

            <div className="row mb-3 text-danger "><h3> {error} </h3> </div>
            <button type="submit" className="btn btn-primary btn-sm ">{ isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={handleResetPassword} className=" ms-5 btn btn-secondary btn-sm ">Reset Password </button>
            </form>
            </div>
                    
                <br />
               <Button onClick={signInUsingGoogle} variant="dark">Google SignIn</Button>
        </div>
    );
};

export default Login;