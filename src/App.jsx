import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav';
import Card from './components/Card';
import BenefitsCard from './components/BenefitsCard';
import VideoCard from './components/VideoCard';
import TestemonialsCard from './components/TestemonialsCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Nav/>
    <Card name="Tropical Paradise Recreation" days="7" nights="6" price="999" image="/assets/images/home-package-1-1.jpg"/>
    <BenefitsCard icon="/assets/icons/profile-icon.svg" title="Customer-Centric" details="Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs." isDarkMode="true"/>
    <VideoCard/>
    <TestemonialsCard name="Priya Marcella" country="India" testimonial='My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip.'/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
