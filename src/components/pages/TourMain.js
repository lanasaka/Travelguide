import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './TourMain.css';


import { HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import img from './TourImages/img(1).jpg';
import img2 from './TourImages/img(2).jpg';
import img3 from './TourImages/img(3).jpg';
import img4 from './TourImages/img(4).jpg';
import img5 from './TourImages/img(5).jpg';
import img6 from './TourImages/img(6).jpg';
import img7 from './TourImages/img(7).jpg';
import img8 from './TourImages/img(8).jpg';
import img9 from './TourImages/img(9).jpg';
import img10 from './TourImages/img(10).jpg';
import img11 from './TourImages/img(11).jpg';
import img12 from './TourImages/img(12).jpg';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Petra Tour',
        location: 'Petra, Jordan',
        grade: 'HISTORICAL SITE  ',
        fees: '$150',
        date: '2024-02-02',
        description: 'Explore the ancient city of Petra, a UNESCO World Heritage Site famous for its rock-cut architecture and water conduit system. Walk through the Siq, a narrow gorge, and discover iconic structures like Al-Khazneh (The Treasury) and the Monastery.',
      },
    


        {
        id: 2,
        imgSrc: img2,
        destTitle: 'Venice Tour',
        location: 'Venice, Italy',
        grade: 'HISTORIC CITY',
        fees: '$200',
        date: '2024-02-02',
        description: 'Explore the romantic city of Venice, known for its picturesque canals, historic architecture, and vibrant culture. Visit iconic landmarks like St. Mark\'s Basilica, the Grand Canal, and take a gondola ride through the charming waterways.',
        },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Istanbul Tour',
      location: 'Istanbul, Turkey',
      grade: 'CULTURAL HUB',
      fees: '$300',
      date: '2024-02-02',
      description: "Experience the captivating blend of cultures in Istanbul, where East meets West. Explore the iconic Hagia Sophia, the bustling Grand Bazaar, and sail across the Bosphorus to witness the city's breathtaking skyline. Immerse yourself in the rich history, delicious cuisine, and vibrant atmosphere.",
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Paris Tour',
        location: 'Paris, France',
        grade: 'CAPITAL OF ART',
        fees: '$400',
        date: '2024-02-02',
        description: 'Discover the vibrant art scene in Paris, home to world-renowned museums like the Louvre and Musée d\'Orsay. Experience the creative pulse of the city in Montmartre and Le Marais, explore contemporary art galleries, and indulge in the artistic atmosphere that has inspired countless creators.',
      },
      {
        id: 5,
        imgSrc: img5,
        destTitle: 'Bali Tour',
        location: 'Bali, Indonesia',
        grade: 'TROPICAL PARADISE',
        fees: '$500',
        date: '2024-01-01',
        description: 'Experience the enchanting beauty of Bali, an Indonesian paradise known for its lush landscapes, stunning beaches, and vibrant culture. Explore ancient temples, enjoy water sports in crystal-clear waters, savor delicious cuisine, and immerse yourself in the rich traditions and warm hospitality of the Balinese people.',
      },
      {
        id: 6,
        imgSrc: img6,
        destTitle: 'Tokyo Tour',
        location: 'Tokyo, Japan',
        grade: 'MODERN METROPOLIS',
        fees: '$600',
        date: '2024-01-01',
        description: 'Discover the bustling city of Tokyo, a fascinating blend of tradition and modernity. Experience the neon-lit streets, visit ancient shrines, explore vibrant neighborhoods like Shibuya and Akihabara, indulge in exquisite cuisine, and witness the cutting-edge technology that defines this dynamic metropolis.',
      },
      {
        id: 7,
        imgSrc: img7,
        destTitle: 'Great Wall Tour',
        location: 'Pekin, China',
        grade: 'ANCIENT WONDER',
        fees: '$700',
        date: '2024-01-01',
        description: 'Embark on an incredible journey to Pekin and witness the awe-inspiring Great Wall of China. Explore this ancient wonder, walk along its majestic ramparts, and delve into the rich history and culture of China. Visit iconic landmarks like the Forbidden City and experience the vibrant energy of modern Pekin.',
      },
      {
        id: 8,
        imgSrc: img8,
        destTitle: 'Rothenberg Tour',
        location: 'Rothenberg, Germany',
        grade: 'MEDIEVAL TOWN',
        fees: '$800',
        date: '2024-01-01',
        description: 'Explore the enchanting medieval town of Rothenberg. Wander through cobblestone streets lined with timber-framed houses, visit the iconic Town Hall, and immerse yourself in the rich history and fairy-tale charm of this picturesque German town.',
      },
      {
        id: 9,
        imgSrc: img9,
        destTitle: 'Dubai Tour',
        location: 'Dubai, UAE',
        grade: 'MODERN METROPOLIS',
        fees: '$900',
        date: '2024-03-03',
        description: 'Discover the futuristic city of Dubai, known for its ultramodern architecture, luxurious shopping malls, and vibrant nightlife. Visit iconic landmarks like the Burj Khalifa, experience traditional souks, and indulge in desert safaris for an unforgettable experience.',
      },
      {
        id: 10,
        imgSrc: img10,
        destTitle: 'Santorini Tour',
        location: 'Santorini, Greece',
        grade: 'SCENIC ISLAND',
        fees: '$1000',
        date: '2024-03-03',
        description: 'Explore the stunning beauty of Santorini, famous for its whitewashed buildings, blue-domed churches, and breathtaking sunsets. Wander through charming villages, indulge in local cuisine, and relax on beautiful beaches.',
      },
      {
        id: 11,
        imgSrc: img11,
        destTitle: 'Machu Picchu Tour',
        location: 'Cusco Region, Peru',
        grade: 'ANCIENT WONDER',
        fees: '$1100',
        date: '2024-03-03',
        description: 'Embark on an adventure to Machu Picchu, a UNESCO World Heritage Site nestled in the Andes Mountains. Hike the Inca Trail, explore ancient ruins, and witness the majestic beauty of this iconic archaeological site.',
      },
      {
        id: 12,
        imgSrc: img12,
        destTitle: 'Sydney Tour',
        location: 'Sydney, Australia',
        grade: 'VIBRANT CITY',
        fees: '$1200',
        date: '2024-03-03',
        description: 'Experience the lively atmosphere of Sydney, home to the iconic Sydney Opera House and Harbour Bridge. Enjoy beautiful beaches, explore diverse neighborhoods, and savor the multicultural culinary scene.',
      },
  ];

 
  function TourMain({ searchQuery, selectedDate, minPrice, maxPrice }) {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const openBookingForm = () => {
      setShowBookingForm(true);

    };
      const closeBookingForm = () => {
        setShowBookingForm(false);
      };
    const filteredData = Data.filter((destination) => {
      const matchesSearch = destination.destTitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDate = selectedDate ? destination.date === selectedDate : true;
      const matchesPrice = parseInt(destination.fees.substring(1)) >= minPrice && parseInt(destination.fees.substring(1)) <= maxPrice;
      return matchesSearch && matchesDate && matchesPrice;
     

  

    
     
      
    });
  
  return (
   <section className='main container section'>
    <div className='secTitle'>
        <h3 className='title'>
            Most visited destination
        </h3>
    </div>
   
    <div className='secContent grid'>
        {filteredData.map(({ id, imgSrc, destTitle, location, grade, date, fees, description }) => {
          return (
            <div key={id} className='singleDestination' >
                <div className='imageDiv' style={{marginBottom:200}}>
                    <img  src={imgSrc} alt={destTitle} />
                </div>
                <div className='cardInfo'>
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='contient flex'>
                        <HiOutlineLocationMarker className='icon' />
                        <span className='name'>{location}</span>
                        <span className='date'>{date}</span>
                    </span>

                    <div className='fees flex'>
                        <span >{grade}<small>+1</small></span>
                         <div className='price'>
                        <h5>{fees}</h5>
                    </div>
                    </div>
                   
                </div>

                <div className='desc'>
                    <p>{description}</p>
                </div>
        <button className='detailsButton flex'  onClick={openBookingForm}> <div className='book'>BOOK NOW <HiOutlineClipboardCheck className='Checkicon' /></div>
</button>







            </div>
        )
    })
}

   </div>
   {showBookingForm && <BookingForm closeModal={closeBookingForm} />}
   </section>
  );
}

export default TourMain