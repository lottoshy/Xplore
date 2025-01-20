import React from 'react';

function Footer() {
  return (
    <footer className='w-full h-[50vh] relative bg-default text-white'>
      <div className='flex flex-row justify-evenly pt-10'>
        <span className='text-left flex flex-col gap-2'>
          <p className='font-semibold'>Discover</p>
          <ul className='opacity-70 flex flex-col gap-2'>
            <li>Home</li>
            <li>About Us</li>
            <li>Trip Package</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </span>
        <span className='text-left flex flex-col gap-2'>
          <p className='font-semibold'>Services</p>
          <ul className='opacity-70 flex flex-col gap-2'>
            <li>Trip Itinerary</li>
            <li>Trip Preparations</li>
            <li>Booking Form</li>
          </ul>
        </span>
        <span className='text-left flex flex-col gap-2'>
          <p className='font-semibold'>Packages</p>
          <ul className='opacity-70 flex flex-col gap-2'>
            <li>Popular Trip</li>
            <li>Personal Tour</li>
            <li>Group Tour</li>
            <li>Business Tour</li>
            <li>Testimonials</li>
          </ul>
        </span>
        <span className='text-left flex flex-col gap-2'>
          <p className='font-semibold'>Support</p>
          <ul className='opacity-70 flex flex-col gap-2'>
            <li>Customer Service</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Travel Policy</li>
          </ul>
        </span>
        <span className='text-left flex flex-col gap-2 w-80'>
          <p className='font-semibold text-xl'>Contacts</p>
          <div>
            <span className='text-base flex flex-row items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" id="svg937405735_895">
                <g clip-path="url(#svg937405735_895_clip0_13_1643)">
                  <path d="M14.2859 11.1361C13.3193 10.3094 12.3384 9.80864 11.3837 10.6341L10.8136 11.133C10.3965 11.4951 9.62104 13.1872 6.62272 9.73808C3.62502 6.29332 5.40891 5.75697 5.82662 5.39795L6.39981 4.89843C7.34951 4.07112 6.99111 3.02963 6.30616 1.95755L5.89281 1.30819C5.20473 0.238608 4.45546 -0.463831 3.50327 0.362237L2.98877 0.811798C2.56793 1.11837 1.39158 2.1149 1.10623 4.00805C0.762819 6.27958 1.84614 8.88079 4.32809 11.7349C6.80692 14.5902 9.23392 16.0244 11.5329 15.9995C13.4436 15.9789 14.5974 14.9536 14.9583 14.5809L15.4747 14.1307C16.4244 13.3052 15.8344 12.4648 14.8672 11.6362L14.2859 11.1361Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="svg937405735_895_clip0_13_1643">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <p>+123 456 7890</p>
            </span>
          </div>
          <div>
            <span className='text-base flex flex-row items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none" id="svg1719070209_611">
                <path d="M8.50009 0C5.55934 0 3.16675 2.39259 3.16675 5.33334C3.16675 6.21616 3.38747 7.09147 3.80706 7.86784L8.20844 15.8281C8.26703 15.9342 8.37869 16 8.50009 16C8.6215 16 8.73315 15.9342 8.79175 15.8281L13.1947 7.86522C13.6127 7.09147 13.8334 6.21613 13.8334 5.33331C13.8334 2.39259 11.4408 0 8.50009 0ZM8.50009 8C7.02972 8 5.83344 6.80372 5.83344 5.33334C5.83344 3.86297 7.02972 2.66669 8.50009 2.66669C9.97047 2.66669 11.1667 3.86297 11.1667 5.33334C11.1667 6.80372 9.97047 8 8.50009 8Z" fill="white"/>
              </svg>
              <p>123 Wanderer Street, City Name, State Name, Nation</p>
            </span>
          </div>
        </span>
      </div>
      <span className='h-px w-10/12 mx-auto bg-white absolute opacity-50 rounded-md left-32 mt-6'></span>
      <div className='w-auto h-10 flex justify-between mt-10'>
        
        <span className='w-auto h-10 flex gap-2 ml-32'>
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="white" className="w-7 h-7 mr-2">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="white" className="w-7 h-7 mr-2">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="white" className="w-7 h-7 mr-2">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
        </svg>
        </span>
        <p className='opacity-50 mr-32'>Copyright © 2025</p>
      </div>
    </footer>
  );
}

export default Footer;