import React,{useState,useEffect} from 'react';
import {Link}  from 'react-router-dom';
import '@fortawesome/react-fontawesome';
import './Navbar.css';

import Button from '@mui/material/Button';



function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true)

    const handleClick=()=>setClick(!click); 
  const closeMobilMenu =()=> setClick(false);

  const showButton=()=>{
    if(window.innerWidth <= 960){
        setButton(false)
    }else{
        setButton(true);

    }
  };
  useEffect(()=>{
    showButton();
  },[]);



  window.addEventListener('resize',showButton);

  return(
  <>
   <nav className='navbar'>
   <div className='navbar-container'>
   <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
    <i className='fas fa-globe'></i>
    <span style={{ marginLeft: '5px' }}>TravelGuide</span>
  </Link>
   <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas fa-times':'fas fa-bars'}
 />  </div>
 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
        <Link to='/' className='nav-links'
        onClick={closeMobilMenu}>
            Home
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/tours' className='nav-links'
        onClick={closeMobilMenu}>
            Tours
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/hotels' className='nav-links'
        onClick={closeMobilMenu}>
            Hotels
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/weather' className='nav-links'
        onClick={closeMobilMenu}>
            Weather
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/MapApp' className='nav-links'
        onClick={closeMobilMenu}>
           Maps
            </Link>
    </li>
   
    <li className='nav-item'>
        <Link to='/currency' className='nav-links'
        onClick={closeMobilMenu}>
         Currency
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/sign-up' className='nav-links-mobile'
        onClick={closeMobilMenu}>
            Sign Up
            </Link>
    </li>
    <li className='nav-item'>
        <Link to='/sign-in' className='nav-links-mobile'
        onClick={closeMobilMenu}>
            Sign In
            </Link>
    </li>

 </ul>
 <Link to='/sign-up'>
  <Button variant="contained" style={{ color: '#2B3499', backgroundColor: 'white', marginRight: '10px', fontWeight: 'bold' }}>
    SIGN UP
  </Button>
</Link>

<Link to='/sign-in'>
  <Button variant="contained" style={{ color: '#2B3499', backgroundColor: 'white', fontWeight: 'bold' }}>
    SIGN IN
  </Button>
</Link>

   </div>
   </nav>
   </>
  )
}

export default Navbar