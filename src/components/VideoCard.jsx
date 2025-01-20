import React from 'react'

const  VideoCard = ({video, title="pictures", subtitle}) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg w-10/12 h-[75vh] mx-auto">
    {/* Video Background */}
    <video
      className="w-full h-full object-cover"
      src={video}
      autoPlay
      loop
      muted
      playsInline
    ></video>

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-white text-6xl font-normal">
        Our <span className="font-playfair italic">journey</span> in {title}
      </h2>
      <p className="text-gray-200 text-lg mt-2">
        {subtitle}
      </p>
    </div>
  </div>
  )
}

export default VideoCard