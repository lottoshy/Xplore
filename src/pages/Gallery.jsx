import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import ImageGrid from '../components/ImageGrid'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <>
    <Nav position=""/>
    <Header image="assets/images/visual-gallery-head-bg.png" heading="Visual" headingitalic="Gallery"/>
    <div className='w-full h-[110vh] flex flex-col justify-center  px-20 mt-20 mb-20'>
      <h2 className='text-[64px]'>Journey in <span className='font-playfair italic'> Asia</span></h2>
      <ImageGrid/>
    </div>
    <div className='w-full h-screen bg-cream pt-10 pb-14'>
      <h2 className='text-[64px]'>Journey in <span className='font-playfair italic'> Culture</span></h2>
      <div className=' mt-3 mx-20'>
        <Carousel/>
      </div>
    </div>
    <div className='w-full h-[80vh] pt-10'>
      <h2 className='text-[64px]'>Journey in <span className='font-playfair italic'> Europe</span></h2>
      <div className='w-full h-2/3 flex flex-row gap-4 px-20 mt-5'>
        <img className='w-[24%] rounded-3xl object-cover' src="assets/images/journey-in-europe-1.png" alt="" />
        <img className='w-[24%] rounded-3xl object-cover' src="assets/images/journey-in-europe-2.jpg" alt="" />
        <img className='w-[24%] rounded-3xl object-cover' src="assets/images/journey-in-europe-3.png" alt="" />
        <img className='w-[24%] rounded-3xl object-cover' src="assets/images/journey-in-europe-4.png" alt="" />
      </div>
    </div>
    <video className='h-full w-full object-cover ' autoPlay loop muted playsInline src="assets/videos/gallery-vid.mp4"></video>
    <Footer/>
    </>
  )
}

export default Gallery