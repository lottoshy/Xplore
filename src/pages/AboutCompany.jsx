import React from 'react'
import Nav from '../components/Nav';
import Header from '../components/Header';
import BenefitsCard from '../components/BenefitsCard';
import VideoCard from '../components/VideoCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function AboutCompany() {
  return (
    <>
    <Nav position=""/>
    <Header image="assets/images/about-head-bg1.jpg" heading="About" headingitalic="Company"/>
    <div className='w-full h-screen flex flex-row my-20 px-20'>
      <div className='w-1/2 h-full flex flex-col gap-7'>
        <video className='h-1/3 rounded-3xl w-11/12 object-cover ' autoPlay loop muted playsInline src="assets/videos/about-experience.mp4"></video>
        <img className='h-1/2 rounded-3xl w-11/12 object-cover' src="assets/images/about-travel-experience.png" alt="" />
      </div>
      <div className='w-1/2 h-full pl-20 flex flex-col justify-center gap-7'>
          <h2 className=' text-[64px] font-sans text-left leading-[72px]'>Crafting
            <span className='font-playfair italic'> travel </span><br></br>
            experiences
          </h2>
          <p className='text-left text-xl text-default opacity-70 font-sans'>We are passionate about crafting extraordinary travel experiences that leave a lasting impact. With years of expertise, we have honed the art of live curating unique journeys that blend adventure, culture, and sustainability. Our mission is to connect travelers with the world's wonders while preserving its beauty for generations to come.</p>
          <button className='flex flex-row items-center gap-4 w-1/3  bg-default text-white rounded-full py-2 px-6 font-semibold'>Explore Now <img src="assets/icons/arrow-icon.svg" alt="" /></button>
      </div>
    </div>
    <div className='w-full h-screen bg-cream px-20 text-default flex flex-row gap-20'>
          <div className='w-1/2 h-full flex flex-col justify-between py-24'>
            <h3 className='text-[64px] w-[75%] leading-[72px] text-left'>Our true
              <span className='font-playfair italic'> beliefs </span>
              for
              <span className='font-playfair italic'> your </span>
              benefits
            </h3>
            <p className='text-xl leading-7 opacity-70 text-left w-11/12'>Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.</p>
          </div>
          <div className='w-1/2 h-full py-24 mr-4 flex flex-col gap-4'>
            <BenefitsCard icon="/assets/icons/profile-icon.svg" title="Customer-Centric" details="Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs."/>
            <BenefitsCard icon="/assets/icons/sustainable-icon.svg" title="Sustainable Travel" details="Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollutions." isDarkMode="true"/>
            <BenefitsCard icon="/assets/icons/authentic-icon.svg" title="Authentic Experiences" details="We deliver journeys that immerse you in unforgettable encounter with the world's diverse cultures & landscapes."/>
            <BenefitsCard icon="/assets/icons/quality-icon.svg" title="Quality Guides" details="Every journey will be led by knowledgeable, passionate experts who enhance your travel experience." isDarkMode="true"/>
          </div>
      </div>
      <div className='w-full h-screen justify-center items-center flex'>
        <VideoCard video="assets/videos/about-journey.mp4" title='videos' subtitle=""/>
      </div>
      <ContactForm image="assets/images/about-contact-bg.png"/>
      <Footer/>
    </>
  )
}

export default AboutCompany;