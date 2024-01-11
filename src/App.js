import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'; // Add this line
import 'react-toastify/dist/ReactToastify.css';



import './App.css';
import Home from './components/pages/home';
import Tours from './components/pages/Tours';
import Weather from './components/pages/Weather';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Hotels from './components/pages/Hotels';
import MapApp from './components/pages/MapApp';
import Currency from './components/pages/Currency';


function App() {
  return (
 <>
 <Router>
  <Navbar/>
  <Routes>
    <Route path='/' exact Component={Home} />
    <Route path='/tours' exact Component={Tours} />

    <Route path='/hotels' exact Component={Hotels} />
    <Route path='/currency' exact Component={Currency} />
    <Route path='/weather' exact Component={Weather} />
    <Route path='/MapApp' exact Component={MapApp} />
    <Route path='/sign-up' exact Component={SignUp} />
    <Route path='/sign-in' exact Component={SignIn} />
  </Routes>
  <ToastContainer />
 </Router>
 </>
  );
}

export default App;
