import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import BenefitsCard from '../components/BenefitsCard'
import VideoCard from '../components/VideoCard'
import TestemonialsCard from "../components/TestemonialsCard"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
function Home() {
  return (
    <>
      <Nav isDarkMode="false" positon="absolute"/>
      <img className='h-screen w-full object-cover' src="assets/images/hero-main.jpeg" alt="beautiful scenery with mountains" />
      <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'>
        <span className='bg-transparent text-white p-2 px-4 rounded-full backdrop-blur-sm backdrop-contrast-[.25] backdrop-brightnes-110'>
          <p>The Best Place to Start Your Adventure</p>
        </span>
        <h1 className='text-[80px] w-1/2 tracking-wide text-white leading-[88px] font-sans'>
          Embark on
          <span className='font-playfair italic'> journeys </span>
          not 
          <span className='font-playfair italic'> just </span>
          destinations with
          <span className='font-playfair italic'> our trips.</span>
        </h1>
        <span className='justify-between text-white mt-32 flex flex-row'>
          <p className='w-1/4 absolute text-left left-20'>Unlock the doors to diverse cultures, awe-inspiring landscapes, and thrilling adventures with us.</p>
          <button className='flex flex-row items-center gap-4 absolute right-20 border rounded-full py-2 px-6 font-semibold'>Explore Now <img src="assets/icons/arrow-icon.svg" alt="" /></button>
        </span>
      </div>
      <div className='h-screen w-full'>
        <span className='text-default w-full px-20 mt-24 flex flex-row items-center justify-between'>
          <h2 className='w-2/5 text-[64px] font-sans text-left leading-[72px]'>Must
            <span className='font-playfair italic'> experience </span>
            packages
          </h2>
          <span className='w-1/3 flex flex-col gap-5'>
          <p className='text-xl text-left opacity-70 leading-7'>Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.</p>
          <button className='w-32 text-left font-semibold hover:underline'>See all packages</button>
          </span>
        </span>
        <div className='mx-20 gap-6 flex flex-row mt-24'>
          <Card name="Tropical Paradise Recreation" days="7" nights="6" price="999" image="/assets/images/home-package-1-1.jpg"/>
          <Card name="Cruise Gateway Expedition" days="7" nights="6" price="1799" image="/assets/images/home-package-2.png"/>
          <Card name="Cultural Immersion in Morocco" days="6" nights="5" price="1199" image="/assets/images/home-package-3.png"/>
          <Card name="River Expedition in Thurnia" days="7" nights="6" price="899" image="/assets/images/home-package-4.png"/>
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
        <VideoCard video="https://framerusercontent.com/assets/cXGGRdoWmVg2EP0rKNWhq3Z0aiY.mp4" subtitle="See what makes each experience with our trips exceptional."/>
      </div>
      <div className='h-screen w-full'>
        <span className='text-default w-full px-20 mt-24 flex flex-row justify-between'>
          <h2 className='w-2/6 text-[64px] font-sans text-left leading-[72px]'>Real
            <span className='font-playfair italic'> stories </span><br></br>
            from travelers
          </h2>
          <span className='flex flex-col gap-5 self-end'>
          <img src="assets/icons/quote-icon.svg" alt="" />
          </span>
        </span>
        <div className='mx-20 gap-6 flex flex--row mt-24'>
        <TestemonialsCard profile="assets/images/user-priya.png" name="Priya Marcella" country="India" testimonial='My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip.'/>
        <TestemonialsCard profile="assets/images/user-josh.png" name="Jose Miguel" country="Spain" testimonial="They provided an amazing adventure that I'll never forget. The accommodations were top-notch, and the itinerary was a perfect trip of relaxation and excitement."/>
        <TestemonialsCard profile="assets/images/user-angelina.png" name="Angelina Diana" country="Italy" testimonial='Their diverse range of destinations and unwavering commitment to customer satisfaction make them my go-to choice for future adventures.'/>
         <TestemonialsCard profile="assets/images/user-michael.png" name="Michael Davidson" country="New York" testimonial="Xplore's commitment to customer satisfaction is truly commendable. If you want a travel experience that goes beyond the ordinary.  highly recommend Xplore."/>
        </div>
      </div>
      <ContactForm image="https://framerusercontent.com/images/SKhUiUfZpAD8WuB9EJNNedkLvyo.jpg?scale-down-to=2048"/>
      <Footer/>
    </>
  );
}

export default Home;