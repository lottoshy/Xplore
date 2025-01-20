import React from 'react';

const ImageGrid = () => {
  const images = [
    'assets/images/journey1.png',
    'assets/images/journey2.png',
    'assets/images/journey3.png',
    'assets/images/journey4.png',
    'assets/images/journey5.png',
    'assets/images/journey6.png',
    'assets/images/journey7.png',
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-3 mt-4 w-full h-screen gap-8 p-8">
      {/* Top-left large image */}
      <div className="col-span-2 row-span-1 rounded-2xl hover:scale-105 transition overflow-hidden">
        <img
          src={images[0]}
          alt="Top left"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Top-center large image */}
      <div className="col-span-2 row-span-2 rounded-2xl hover:scale-105 transition overflow-hidden">
        <img
          src={images[2]}
          alt="Top left"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Top-right image */}
      <div className="col-span-2 row-span-2 rounded-2xl hover:scale-105 transition overflow-hidden">
        <img
          src={images[5]}
          alt="Top right"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle-left image */}
      <div className="col-span-2 row-span-2 rounded-2xl hover:scale-105 transition overflow-hidden">
        <img
          src={images[1]}
          alt="Middle left"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle-center image */}
      <div className="col-span-1 row-span-2 rounded-2xl hover:scale-105 transition mb-8 overflow-hidden">
        <img
          src={images[3]}
          alt="Middle center"
          className="w-full h-full object-cover"
        />
      </div>

      
      {/* Middle-center image */}
      <div className="col-span-1 row-span-2 rounded-2xl hover:scale-105 transition mb-8 overflow-hidden">
        <img
          src={images[4]}
          alt="Middle center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle-right image */}
      <div className="col-span-2 row-span-2 rounded-2xl hover:scale-105 transition mb-8 overflow-hidden">
        <img
          src={images[6]}
          alt="Middle right"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};

export default ImageGrid;
