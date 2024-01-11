import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './signs.css';
import Footer from '../Footer'

export default function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  async function sign() {
    let item = { name, password, email };

    try {
      let result = await fetch('https://bashiralrayes.com/api/v1/register', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (result.ok) {
      
        toast.success('Sign up successful! Redirecting to home...', {
          onClose: () => navigate('/'), 
          autoClose: 2000,
        });
      } else {
  
        toast.error('Sign up failed! Please try again.');
      }
    } catch (error) {

      console.error('Error during signup:', error);
      toast.error('Error during sign up. Please try again later.');
    }
  }


  return (
    <>
    <section className='Form my-3 mx-5'>
      <div className='container'>
        <div className='row no-gutters '>
          <div className='col-lg-5'>
            <img  src={'https://images.unsplash.com/photo-1699579748053-dc9416eb5502?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} className='img-fluid'style={{ width: 350 }} alt='Description' />
          </div>
  
          <div className='col-lg-7 px-5 pt-5 custom-content'>
            <h1 className="font-weight-bold py-3 custom-h1" style={{ display: 'flex', alignItems: 'center' }}>
              <i className='fas fa-globe'></i>
              <span style={{ marginLeft: '5px' }}>TravelGuide</span>
            </h1>
            <h4 className='custom-h4'>Sign into your account</h4>
            <form>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control my-3 p-2"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control my-3 p-2'
                    placeholder='Name'
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
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <button className='btn1' type='button' onClick={sign}>Sign Up</button>
                </div>
              </div>
              <p className='custom-p1'>Already a member? <a href='sign-in'>Sign In</a></p>

            </form>
         
          </div>
        </div>
      </div>
    </section>
    
 
      <ToastContainer />
    
      </>
  );
}
