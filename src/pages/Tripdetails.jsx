import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import TestemonialsCard from '../components/TestemonialsCard';
import Footer from '../components/Footer';
import {Includes, Excludes, Day } from '../components/OtherComponents';
import axios from 'axios';


// Utility function to convert a string to title case
const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
};

function Tripdetails() {
  const { name } = useParams(); // Get the package name from the URL
  const [packageDetails, setPackageDetails] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      const formattedName = toTitleCase(name.replace(/-/g, ' ')); // Convert to title case
  
      try {
        const response = await axios.get(`http://localhost:5000/api/packages/${formattedName}`); // Fetch the specific package
        setPackageDetails(response.data);
      } catch (error) {
        console.error('Error fetching package details:', error.response ? error.response.data : error.message);
      }
    };

    fetchPackageDetails();
  }, [name]);

  if (!packageDetails) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }
  return (
    <>
    <Nav position=''/>
    <div className='mx-20 flex flex-row mt-10 gap-20 mb-20'>
      <h1 className='text-default text-[80px] leading-[88px] w-1/2 text-left'>{packageDetails.title}</h1>
      <div className='w-1/2 text-xl flex flex-col gap-6 pl-28'>
        <div className='space-y-2 flex flex-col '>
          <span className='flex items-center gap-2'>
            <img className='w-5 h-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH70lEQVR4nO2dC4hVRRjH/1dX7bG+SiwNzbWttdIys7DUHiRS0tNXZRFmFvYwUzMMStOkJyoFlVERgaxuZg8C02IVSzPDyDKfldam9NDM3DXdTd344Fu8fH3n3t05c+6dOff84MDl3nu++Wbmzpz5HjMXSEhIiAcdAQwHMB3AAgBfAdgOYC+AOr728nv0WTmAaQCG8b0JFrgIwBwA3wE4CqDe8KJ7N7CsvknPNI02AKYA2BSiA7JdJPthAK2TzgnmJAAzedqpz9FFZc0A0D7pmGM0AzAWwJ4sjfcvgNUAngNwF4ABAEq4MVvw1Z7fG8DfeR7A53xvJtm7AYwBkCr0jjmTGyyooQ4CeBvA9QCKQ5RD997Asg5mKI86vBQFyq0A9gc0zK8AHgHQLoJy27Hs3wLK/hvAzSiwKeqFDI0xEcBxOdDjeACTuExNlzmsa6xpCWBhQAMsANApDzp1BlARoFM56xxLqGIfKZWuAXBHvpUDMJp1kfotiWOnNAsYGWRVnw13OAfAjoCREqvpS3tmfJOnKaoxU9i3ir6zEaPVlNYZUaygbNE+oFNGwHNKlVXMdkdHhjZS5PRVDaAMntJMMfpqHHtmZKMngAOiDqt8tejvVoa8C6uppjJGqced8NBRuEexM3xlkajLH745JGcqFjjNyb5yKoB9ok4UKPMmniFd6OQO8Z0pok5/+hJPmaI4CnPhm4qaEwD8Luo2GR4gI33kWbVNHw4srQCwmVdvNfx6OX9G37HNVFE3Ci07HwOX8QxbBmCKkxy2ZIhnyGszJznYWqbSg/yQKCOKjrfGXKEsBYRsUJIlkJXtosBTN0u6LBayKSrpLBuEshTpC8tlHGI17Yz0pepAC/oMFXLXw1E6ilSdupBh14bOqFUa9xDbNbewK+NEvsr4vYUB99Va6JQ2IkZ/BEAHOMhwUXmaYsJOU7uVRq1o5PRTwlOmNlLCTl9fCJk0apxjusW5NaU8Mw4DmGAg6yG+V/qjwjBbyHscDrJAKEk+IFNGKL9sk85oYJIib6hFP918OMg6oSTlRpmOji3KNGXbH0X2UphnW7qsL+EgPwklTzeU00d5gNtYsnZXHvS9DWWVKDEe55De3ZMN5cyI0EtcYclB2EHIocWHc8hfn2mmxgohh5axthglZFcaymmljGLnkCuZIkM524Qcm6mdZUI2PatMaCHkkF3iHDKnydQorLYkR6NYyKayTI3DdDmUEusc0og7xVDOfiHHZsyhtaWG7CzkkFveOeRStZehnK1CzlkWdeyheINtrASddMOvFEoONpSzXMihvC5b3GbpoT7EkpxIKRdKjrO07F3o4LJ3gpDzFhzkMaHky4ZyLhByaDl9hgX9SpTg0nmGst4Ucihs7Rw3WnLgpXhutx3oekfI3GjRTXQ1HKS7kvpjGjodJmTVs9fWlMmKPNriZkKRsi2us6upo9KGMPVBpTjsmi7rsGE60STFaP0U4bYspMsil5GzyMDNyBCyunEwSf6yF/FozEZ3ZZpqsBlMHZ/gHcPp8sjV480+kNdCyhuYIRRbwb6pHmyBF/PrUfxZUOjXNCwQ5MZ/Eg5zrVD2Fwsy+2fYMduUizwJV4TUpTlnLKbLDdvBkVKs/DJtbD/oxqs2086gZ0ZXC3pcqixcyNHoNCsshl4lQ5t4BspGXo7bQhqt78EDHhVKL42gjN5sZVeyzVLN12Z+b3qIaGAmvhZ1uxcecKESKzD1/LrEuaJeRy1mQ0aO9NiOh/88bTmVKKc8IZQn+8RnUsoGUC+mqwZKlRPgvN29CuByUZc6V9NHM7FWVIJWKL7yhqjLB/CQ8aISu3xYsytQOtM/cThAoIPiFbUZ/csVU5Utei3jMtTDZsTnGnK1V4k60NGz3tJTsZ5p25svjFSck7RF2mtW+hB/DmCVx7o3eiNPnScW7pXK6I7FIcxFilH1CtynUuhM6UmxYZyoXG3IqF3UXKKMjrCxFKdooewfeRHuskzoSvH92HGfqORBRw8y66eMjkGIIa04pGsjmS6Xzw7fbKcmcb8SK3HJ6XhdoYyOBloqG3LehRs05yz2qKOdzqFteXYhc+MeodMRzjOOPRTsWaPM06k8Z8vsEjpRQnXB0E8JYN2eR32eEbqQu70LCozFilu7bR70KFNyyWahAOmqbBSdmwc9lggdqvhkoYJkmrIMPj+H5d+kLDBoK0TBQodjfi8a5LMc/RMB7cj9WZT9cQ7KdZ7Byq90fA7KfUlxeFL2fAIbh/VpV3XEMZOBbGekl/lU0hPH6KQcvlwZkW3SSknY3sb/SZWQ5fD+sRG00LOiDLKHrkp64v+kAHyi7L+waaD15hByehnzks7InIJ6QDTYhxaDZOuF7J15Mka94sGI/q9jljJVXWNBbkFMXUtF49WEjJv0V7ZGv2pR59hzmrLqWmeYwtlWyXrZ4ctfTbjEaGXqohVSU5mvxDlilUGSS+YrjTkoRJJeYgCGpA2AH0SD7uJz5htz+s9f4t41nm6JcG4Taa2SRViUxRqXJ/bs405KsMBEZeqhTZhBzFO+T0duJFhcCr+v2BHDGvlXr2HPXEkI2FpWpUxD6fZJLyUKuamQI4BRM0DxRW3l/4aiDvtRfHYgxDF+CY3kAWVKWqY4Juv5FNKEHPC60vj1DiRMFHQsfm2Gzljt805ZX+kScLDZzjhszPSVviJ+QntOLs63UoXOEPbe7uDXCQkJiCv/AVbhzWg5HcywAAAAAElFTkSuQmCC" alt="marker--v1"/>
            <p>{packageDetails.location}</p>
          </span>
          <span className='flex items-center gap-2'>
            <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
            </svg>
            <p>{packageDetails.duration}</p>
          </span>
        </div>
        <p className='text-left w-[80%] opacity-80'>{packageDetails.highlights}</p>
      </div>
    </div>
    <img className='w-full h-[90vh] object-cover' src={packageDetails.image} alt="" />
    <div className='w-full h-auto px-20 flex flex-row mt-20 text-default text-xl gap-10'>
      {/* left */}
      <div className='w-2/3 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <span className='flex flex-row gap-12'>
            <p className='opacity-70 w-[100px] text-left'>Price</p><p className='font-bold'>${packageDetails.price}</p>
          </span>
          <span className='flex flex-row gap-12'>
          <p className='opacity-70 w-[100px] text-left'>Quota</p><p className='font-bold'>{packageDetails.availability[0].slots} available</p>
          </span>
          <span className='flex flex-row gap-12'>
          <p className='opacity-70 w-[100px] text-left'>Schedule</p><p className='font-bold'>{packageDetails.availability[0].startDate}</p>
          </span>
        </div>
        <div className='mt-28'>
          <p className='text-left leading-[30px] opacity-80'>{packageDetails.description}</p>
        </div>
        <div className='mt-8'>
          <h3 className='text-4xl font-bold text-left'>Includes:</h3>
          <ul className='space-y-2 mt-4'>
            <Includes includes="Accommodations in luxury beachfront resorts"/>
            <Includes includes="Daily breakfast, lunch, and dinner"/>
            <Includes includes="Travel insurance & airport transfers"/>
            <Includes includes="English-speaking guided island tours"/>
            <Includes includes="Sport activities & cultural experiences with locals"/>
          </ul>
        </div>
        <div className='mt-8'>
          <h3 className='text-4xl font-bold text-left'>Excludes:</h3>
         <ul className='space-y-2 mt-4'>
          <Excludes excludes="Personal expenses (souvenirs, spa, etc.)"/>
          <Excludes excludes="International tax & visa airfare"/>
          <Excludes excludes="Optional excursions"/>
          </ul>

        </div>
        <div className=' flex flex-col gap-8'>
        <h3 className='text-4xl font-bold text-left mt-20'>Travel Plans</h3>
        <span className='space-y-4'>
          {packageDetails.itinerary.map((x) => (
            <Day day={x.day} activity={x.activities}/>
          ))}
        </span></div>
      </div>
      {/* right */}
      <div className='w-1/3'>
      <form className='w-full justify-center mx-auto flex flex-col text-lg gap-4' action="">
                <span className='flex flex-row gap-4'>
                    <input className='w-full p-3 rounded-md bg-[#EBEBEB]' type="text" placeholder='Name'/>
                    <input className='w-full p-3 rounded-md bg-[#EBEBEB]' type="email" placeholder='Email'/>
                </span>
                <textarea className='w-full p-3 rounded-md bg-[#EBEBEB]' name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
                <button className='w-full bg-default text-white font-semibold p-2 rounded-md' type="submit">Send</button>
            </form>
      </div>
    </div>
    <div className='h-screen w-full'>
        <span className='text-default w-full px-20 mt-24 flex flex-row justify-between'>
          <h2 className='w-2/6 text-[64px] font-sans text-left leading-[72px]'>Real
            <span className='font-playfair italic'> stories </span><br></br>
            from travelers
          </h2>
          <span className='flex flex-col gap-5 self-end'>
          <img src="assets/icons/quote-icon.svg" alt="" />
          </span>
        </span>
        <div className='mx-20 gap-6 flex flex--row mt-24'>
        <TestemonialsCard profile="../assets/images/user-priya.png" name="Priya Marcella" country="India" testimonial='My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip.'/>
        <TestemonialsCard profile="../assets/images/user-josh.png" name="Jose Miguel" country="Spain" testimonial="They provided an amazing adventure that I'll never forget. The accommodations were top-notch, and the itinerary was a perfect trip of relaxation and excitement."/>
        <TestemonialsCard profile="../assets/images/user-angelina.png" name="Angelina Diana" country="Italy" testimonial='Their diverse range of destinations and unwavering commitment to customer satisfaction make them my go-to choice for future adventures.'/>
         <TestemonialsCard profile="../assets/images/user-michael.png" name="Michael Davidson" country="New York" testimonial="Xplore's commitment to customer satisfaction is truly commendable. If you want a travel experience that goes beyond the ordinary.  highly recommend Xplore."/>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-20 mb-20 md:grid-cols-3 gap-12 p-4">
  <div className="md:col-span-2 hover:scale-105 transition">
    <img
      src={packageDetails.galleryImages[0]}
      alt="Main Landscape"
      className="w-full h-auto rounded-2xl object-cover"
    />
  </div>
  <div className="flex flex-col gap-12">
    <img
      src={packageDetails.galleryImages[1]}
      alt="Temple View"
      className="w-full h-full rounded-2xl hover:scale-105 transition object-cover"
    />
    <img
      src={packageDetails.galleryImages[2]}
      alt="Cultural Scene"
      className="w-full h-full rounded-2xl hover:scale-105 transition object-cover"
    />
  </div>
</div>
<Footer/>
    </>
  )
}

export default Tripdetails
