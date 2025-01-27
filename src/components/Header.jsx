import React from 'react';

const Header = ({ image, heading, headingitalic }) => {
  return (
    <div className='relative w-full h-[400px]'> {/* Set a height for the container */}
      <img src={image} alt="" className='w-full h-full object-cover' /> {/* Ensure the image covers the container */}
      <h2 className='text-[80px] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-sans'>
        {heading} <span className='font-playfair italic'>{headingitalic}</span>
      </h2>
    </div>
  );
}

export default Header;