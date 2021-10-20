import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,updateProfile} from "firebase/auth"; 
import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';


initializeAuthentication()

const Login = () => {


    const {signInUsingGoogle } =  useAuth()
    const location = useLocation()

    const history = useHistory()
    const redirect_url =   location.state?.from || '/home' 

    const handleGoogleLogin =() => {
        
      signInUsingGoogle()
      .then(result => {
        
        history.push(redirect_url)
     })

    }


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
      else if(error?.includes("auth/user-not-found")){
        setError(' You are not  Registered ')
        }
      else if(error?.includes("auth/invalid-email")){
        setError('  The email  that you have entered is incorrect ')
        }
      else if(error?.includes("auth/wrong-password")){
        setError('The  password that you have entered is incorrect ')
        }
      else if(error?.includes("auth/user-not-found")){
        setError(' User not found ')
        }

        else {
          setError('Try Again Later')
        }
     
      
         isLogin? processLogin(email,password) : registerNewUser(email,password) 

      }



          const processLogin = (email,password) => {
  
            signInWithEmailAndPassword(auth, email, password)
            .then(result => {
              const user = result.user
              console.log(user)
              setError('')
              history.push(redirect_url)
            })
            .catch(error =>{
              setError(error.message)
            })
  
          }
          
          const verifyEmail= () => {
            sendEmailVerification(auth.currentUser)
            .then(result => {
              console.log(result)
              history.push(redirect_url)
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
              history.push(redirect_url)

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
                <div >

            
        <div class="container mt-3 ">
        <div class="row">
        <div class="col-lg-4 col-md-4 ">
        <img className="img-fluid" src='https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg' alt="" />
        </div>
        <div class="col-lg-8 col-md-8 ">
        <div >


        <form onSubmit={handleRegistration} >
        <h3 style={{ fontSize :'30px'}} >Please {isLogin ? 'Login' : "Register" } </h3>

        { !isLogin &&  <div className="row mb-3">
        <label htmlFor="inputName"  className="col-sm-2 col-form-label">Name </label>
        <div className="col-sm-8">
        <input type="text"  onBlur={handleNameChange} className="form-control" id="inputName"  placeholder="Your Name"/>
        </div>
        </div>}

        <div className="row mb-3 ">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"> Email</label>
        <div className="col-sm-8">
        <input onBlur={handleEmailChange} required type="email" className="form-control" id="inputEmail3"/>
        </div>
        </div>

        <div className="row mb-3 ">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-8">
        <input  type="password" onBlur={handlePasswordChange}  required className="form-control" id="inputPassword3"/>
        </div>
        </div>

        <div className="row ">
        <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
            <label className="form-check-label" htmlFor="gridCheck1">
            Already Registered?
            </label>
            </div>
        </div>
        </div>

        <div className="row mb-3 text-danger "><h3> {error}  </h3> </div>
        <Button type="submit" className="btn-sm me-2 " >{ isLogin ? 'Login' : 'Register'}</Button>
        <Button type="button" onClick={handleResetPassword} className="btn-danger text-white btn-sm ms-5 ">Reset Password </Button>

        </form>
        </div>
        <hr />
        <Button onClick={handleGoogleLogin}  className="mt-2" variant="dark"> <i class="fab fa-google"></i> Google SignIn</Button>


    </div>
    </div>
  </div>
  


        </div>
       
    );
};

export default Login;