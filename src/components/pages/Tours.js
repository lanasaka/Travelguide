import React from 'react';
import './tours.css';
import { GrLocation } from "react-icons/gr";
import TourMain from './TourMain';
import Footer from'../Footer';
import { useState } from 'react';
function Tours() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <>
    <section className='tours'>
      <div className='overlay'></div>
      {/* <img src={'https://images.unsplash.com/photo-1579974092475-da733546ff81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Description" className="background-image" /> */}

      <div className='toursContent container'>
        <div className='textDiv'>
       
          <h1 className='toursTitle'>Search Your Tour Trip</h1>
        </div>

        <div className='cardDiv grid'>
      
          <div className='destinationInput'>
          <label htmlFor="city">Search Your destination:</label>
          <div className='input flex'>
            <input
              type='text'
              placeholder='Enter name here ....'
              value={searchQuery}
              onChange={handleSearch}
            />
            <GrLocation className="icon" />
          </div>
        </div>

          <div className='dateInput'>
          <label htmlFor="date">Select your date:</label>
          <div className='input flex'>
            <input
              type='date'
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>

        
            <div className='priceInput'>
          <label htmlFor="minPrice">Min Price:</label>
          <div className='input flex'>
            <input
             className='min'
              type='number'
              min={500}
              max={maxPrice}
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </div>
        </div>
        <div className='priceInput'>
          <label htmlFor="maxPrice">Max Price:</label>
          <div className='input flex'>
            <input
             className='max'
              type='number'
              min={minPrice}
              max={2000}
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
         

         
         
        </div>
      </div>
    </section>
    <TourMain
        searchQuery={searchQuery}
        selectedDate={selectedDate}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    <Footer/>
    </>
  );
}

export default Tours;

