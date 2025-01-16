import React from 'react'

function VideoCard() {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg w-10/12 h-[60vh] mx-auto">
    {/* Video Background */}
    <video
      className="w-full h-full object-cover"
      src="https://framerusercontent.com/assets/cXGGRdoWmVg2EP0rKNWhq3Z0aiY.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-white text-6xl font-normal">
        Our <span className="font-playfair italic">journey</span> in pictures
      </h2>
      <p className="text-gray-200 text-lg mt-2">
        See what makes each experience with our trips exceptional.
      </p>
    </div>
  </div>
  )
}

export default VideoCard