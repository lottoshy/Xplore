import React from 'react'

const PackageCard=({image, name, nights, days, price, location}) =>{
  const classes= ""
  return (
    <div className="w-[30%] h-[400px] rounded-2xl overflow-hidden shadow-lg  hover:scale-[1.02] hover:shadow-lg transition relative">
    <img
      className="object-cover"
      src={image}
      alt={name}
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent via-neutral-900 via-30% px-4 py-4">
      <h3 className=" text-white text-4xl text-left text-wrap font-sans font-bold">{name}</h3>
      <span className='flex gap-2'><img className='w-5 mt-4' src="assets/icons/location-icon.svg" alt="" /><p className='text-gray-200 font-semibold text-md mt-4'>{location}</p></span>
      <span className='flex w-full justify-between items-center'>
      <span className='flex  gap-2'><img src="assets/icons/clock-icon.svg" alt="" /><p className="text-gray-200  font-semibold text-md">{days} days, {nights} nights</p></span>
      <p className="text-white text-lg  mt-2">${price}</p>
      </span>
    </div>
  </div>
  )
}

export default PackageCard