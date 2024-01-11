import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
   
    navigate('/sign-up');
  };

  return (
    <div className='hero-container'>
      <h1>WHEREVER YOU GO,<br/> WE GUIDE YOU</h1>
        
      <div className="cta-button-container">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSignupClick}
        >
          Your Adventure Starts Here
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
