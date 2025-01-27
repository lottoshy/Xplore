import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, name, duration, price }) => {
  const packageName = name.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and convert to lowercase

  return (
    <Link to={`/package/${packageName}`}>
      <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-lg transition relative">
        <img className="object-cover" src={image} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-4">
          <h3 className="w-10/12 text-white text-xl text-left text-wrap font-sans font-semibold">{name}</h3>
          <span className='flex w-full justify-between items-center'>
            <p className="text-gray-200 font-semibold text-md">{duration}</p>
            <p className="text-white text-xl font-semibold mt-2">${price}</p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;