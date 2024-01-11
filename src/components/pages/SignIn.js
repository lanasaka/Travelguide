import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async (event) => {
    event.preventDefault();

    try {
      let result = await fetch("https://bashiralrayes.com/api/v1/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (result.ok) {
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        redirectTo('/');
        toast.success("Login successful!"); 
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during login."); 
    }
  };


  const redirectTo = (path) => {
    window.location.href = path; 
  };


  return (
    <>
    <ToastContainer />
    <section className='Form my-3 mx-5'>
       <div className='container'>
        <div className='row no-gutters '>
           <div className='col-lg-5'>
          <img  src={'https://images.unsplash.com/photo-1699579748053-dc9416eb5502?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='img-fluid' alt='Description' />

           </div>

          <div className='col-lg-7 px-5 pt-5 custom-content'>
           <h1 className="font-weight-bold py-3 custom-h1" style={{ display: 'flex', alignItems: 'center' }}>
   <i className='fas fa-globe'></i>
   <span style={{ marginLeft: '5px' }}>TravelGuide</span>
 </h1>
            <h4 className='custom-h4'>Sign into your account</h4>
          <form className='custom-content'>
          <div className='form-row'>
          <div className='col-lg-7'>
          <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="form-control my-3 p-2"
  placeholder="Email"
  autoComplete="username" 
/>
           </div>
           </div>
           <div className='form-row'>
           <div className='col-lg-7'>
           <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="form-control my-3 p-2"
  placeholder="*******"
  autoComplete="current-password" 
/>
          </div>
           </div>
           <div className='form-row'>
           <div className='col-lg-7'>
           <button className='btn1 mt-3 mb-5' onClick={(e) => signin(e)}>Sign In</button>
           </div>
           </div>
         
          <a href='#'>Forgot password</a>
          <p className='custom-p'>Don't have an account ?<a href='#'>Register here</a></p>
          </form>
         </div>
       </div>
       </div>
     </section>


     </>  
  )
}

export default SignIn





