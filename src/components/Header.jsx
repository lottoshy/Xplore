import React from 'react'

const Header = ({image, heading, headingitalic}) => {
  return (
    <div className=''>
        <img src={image} alt="" />
        <h2 className='text-[80px] text-white w-full h-3/4 flex gap-4 absolute top-0 left-0 flex justify-center items-center  font-sans'>{heading}  <span className='font-playfair italic'>  {headingitalic}</span></h2>
    </div>
  )
}

export default Header