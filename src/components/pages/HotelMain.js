import React ,{useState} from 'react';
import './TourMain.css';
import BookingForm from './BookingForm';
import { FaStar } from 'react-icons/fa';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'


const HotelData = [
    {
      id: 1,
      imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464188509.jpg?k=e5241a0d5c1dba5689c553ee463936dde316fe29fbb89a9c8a22823fe1a8d624&o=&hp=1',
      hotelName: 'Petra Luxury Resort',
      location: 'Petra, Jordan',
      rating: '5 stars',
      date: '2024-01-01',
      pricePerNight: '$300',
      description: 'Experience luxury and comfort at the Petra Luxury Resort. Located amidst the historic city of Petra, this hotel offers stunning views and world-class amenities for a memorable stay.',
    },
    {
      id: 2,
      imgSrc: 'https://www.grandcanalshoppes.com/content/dam/rw-2/images/mall-images/mall-features/Vegas-Accommodations-Hero-767x476-mobile.jpg',
      hotelName: 'Venetian Grand Hotel',
      location: 'Venice, Italy',
      rating: '4.7 stars',
      pricePerNight: '$400',
      date: '2024-01-01',
      description: 'Indulge in the elegance of the Venetian Grand Hotel, offering luxurious accommodations overlooking the picturesque canals of Venice. Immerse yourself in opulence and charm.',
    },
    {
      id: 3,
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8d/7c/db/world-heritage-hotel.jpg?w=700&h=-1&s=1',
      hotelName: 'Istanbul Heritage Hotel',
      location: 'Istanbul, Turkey',
      rating: '4.9 stars',
      pricePerNight: '$500',
      date: '2024-01-01',
      description: "Immerse yourself in culture at the Istanbul Heritage Hotel. Situated in the heart of Istanbul, this hotel showcases the city's rich history and provides a luxurious retreat.",
    },
    {
      id: 4,
      imgSrc: 'https://www.hotelartparis.com/_novaimg/4758312-1469635_0_0_4406_3202_2200_1600.rc.jpg',
      hotelName: 'Parisian Artistry Hotel',
      location: 'Paris, France',
      rating: '4.8 stars',
      pricePerNight: '$600',
      date: '2024-01-01',
      description: 'Stay at the Parisian Artistry Hotel, where artistic inspiration meets comfort. Experience the vibrant art scene while enjoying a luxurious stay in the heart of Paris.',
    },
    {
      id: 5,
      imgSrc: 'https://images.trvl-media.com/lodging/7000000/6060000/6057400/6057315/8d9951c9.jpg?impolicy=resizecrop&rw=500&ra=fit',
      hotelName: 'Bali Paradise Resort',
      location: 'Bali, Indonesia',
      rating: '4.6 stars',
      pricePerNight: '$700',
      date: '2024-02-02',
      description: 'Unwind in paradise at the Bali Paradise Resort. With stunning vistas and serene ambiance, this resort offers a peaceful escape amidst Bali’s natural beauty.',
    },
    {
      id: 6,
      imgSrc: 'https://ak-d.tripcdn.com/images/1mi113224wy7zixdd7E9D_W_400_0_R5_Q90.jpg?proc=source/trip',
      hotelName: 'Tokyo Urban Retreat',
      location: 'Tokyo, Japan',
      rating: '4.9 stars',
      pricePerNight: '$800',
      date: '2024-02-02',
      description: 'Experience tranquility at the Tokyo Urban Retreat. Nestled in the heart of the bustling city, this hotel offers a serene oasis with modern amenities.',
    },
    {
      id: 7,
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/47/81/e4/caption.jpg?w=700&h=-1&s=1',
      hotelName: 'Great Wall View Hotel',
      location: 'Pekin, China',
      rating: '4.8 stars',
      pricePerNight: '$900',
      date: '2024-02-02',
      description: 'Stay close to history at the Great Wall View Hotel. Enjoy breathtaking views of the Great Wall while experiencing luxurious comfort.',
    },
    {
      id: 8,
      imgSrc: 'https://tr2storage.blob.core.windows.net/hotel-images/fMa8lbhKbcV7EhvcZC-JQ7aXDEdBYWcMtV.jpeg',
      hotelName: 'Rothenberg Castle Inn',
      location: 'Rothenberg, Germany',
      rating: '4.7 stars',
      pricePerNight: '$1000',
      date: '2024-03-03',
      description: 'Step into history at the Rothenberg Castle Inn. This charming inn offers a medieval experience with modern comforts.',
    },
    {
      id: 9,
      imgSrc: 'https://www.lux-hotels.com/uae/oasis-beach/images/img01.jpg',
      hotelName: 'Dubai Oasis Resort',
      location: 'Dubai, UAE',
      rating: '4.9 stars',
      pricePerNight: '$1100',
      date: '2024-03-03',
      description: 'Escape to luxury at the Dubai Oasis Resort. Experience unparalleled hospitality amidst the futuristic cityscape of Dubai.',
    },
    {
      id: 10,
      imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/343088678.jpg?k=6e70937cf45e6954ad6af07b3ef67f4290906163bf4a789d2c1c0613296d51cf&o=&hp=1',
      hotelName: 'Santorini Cliff Suites',
      location: 'Santorini, Greece',
      rating: '4.8 stars',
      pricePerNight: '$1200',
      date: '2024-03-03',
      description: 'Unparalleled views await at the Santorini Cliff Suites. Perched on the cliffs, this hotel offers a romantic retreat with stunning sunsets.',
    },
    {
      id: 11,
      imgSrc: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/86217427.jpg?k=6962c3842ed43c35aece7f2766b9a0d99a834570facc7357a90b5509bc0da8fd&o=&hp=1',
      hotelName: 'Machu Picchu Lodge',
      location: 'Cusco Region, Peru',
      rating: '4.9 stars',
      date: '2024-04-04',
      pricePerNight: '$1300',
      description: 'Immerse yourself in nature at the Machu Picchu Lodge. Nestled in the Andes, this lodge offers an adventurous yet luxurious stay near the iconic ruins.',
    },
    {
      id: 12,
      imgSrc: 'https://holiday-inn-old-sydney.bookeder.com/data/Photos/OriginalPhoto/12774/1277414/1277414623/Rydges-Sydney-Harbour-Hotel-Exterior.JPEG',
      hotelName: 'Sydney Harbour Hotel',
      location: 'Sydney, Australia',
      rating: '4.7 stars',
      pricePerNight: '$1400',
      date: '2024-04-04',
      description: 'Enjoy waterfront luxury at the Sydney Harbour Hotel. Experience the vibrant city life while indulging in top-notch amenities.',
    },
  ];
  function HotelMain({ searchQuery, selectedDate, minPrice, maxPrice }) {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const openBookingForm = () => {
      setShowBookingForm(true);

    };
      const closeBookingForm = () => {
        setShowBookingForm(false);
      };
    return (
      <section className='main container section'>
        <div className='secTitle'>
          <h3 className='title'>Most Visited Hotels</h3>
        </div>
  
        <div className='secContent grid'>
        {HotelData.filter((hotel) =>
          hotel.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (!selectedDate || hotel.date === selectedDate) &&
          parseFloat(hotel.pricePerNight.slice(1)) >= minPrice && 
          parseFloat(hotel.pricePerNight.slice(1)) <= maxPrice 
        ).map(({ id, imgSrc, hotelName, location, date, rating, pricePerNight, description }) => {
            const stars = [];
            const roundedRating = Math.round(parseFloat(rating));
  
            for (let i = 0; i < 5; i++) {
              stars.push(
                <FaStar
                  key={i}
                  className={i < roundedRating ? 'starIcon active' : 'starIcon'}
                />
              );
            }
  
            return (
              <div key={id} className='singleDestination'>
                <div className='imageDiv' style={{marginBottom:200}}>
                  <img src={imgSrc} alt={hotelName} style={{width:'190%'} }/>
                </div>
                <div className='cardInfo'>
                  <h4 className='destTitle'>{hotelName}</h4>
                  <span className='contient flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                    <span className='date'>{date}</span>
                  </span>
  
                  <div className='fees flex'>
                    <div className='stars'>{stars}</div>
                    <div className='price'>
                      <h5>{pricePerNight}</h5>
                    </div>
                  </div>
                </div>
  
                <div className='desc'>
                  <p>{description}</p>
                </div>
                <button className='detailsButton flex'  onClick={openBookingForm}>
                <div className='book'> BOOK NOW <HiOutlineClipboardCheck className='Checkicon' /></div>
</button>


              </div>
            );
          })}
        </div>
        {showBookingForm && <BookingForm closeModal={closeBookingForm} />}
      </section>
    );
  }
  
  export default HotelMain;