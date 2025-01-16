import React from 'react'

const Card=({image, name, nights, days, price}) =>{
  return (
    <div className="max-w-80 h-[380px] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-lg transition relative">
    <img
      className="object-cover"
      src={image}
      alt="Tropical Paradise"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-4">
      <h3 className="text-white text-xl text-left text-wrap font-sans font-semibold">{name}</h3>
      <span className='flex w-full justify-between items-center'>
      <p className="text-gray-200  font-semibold text-md">{days} days, {nights} nights</p>
      <p className="text-white text-xl  font-semibold mt-2">${price}</p>
      </span>
    </div>
  </div>
  )
}

export default Card