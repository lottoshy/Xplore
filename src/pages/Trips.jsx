import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Card from '../components/Card'
import PackageCard from '../components/PackageCard'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Trips() {
  return (
    <>
    <Nav position=''/>
    <Header image="assets/images/tour-packages-head-bg.png" heading="Tour" headingitalic="Packages"/>
    <div className='flex flex-row flex-wrap items-center justify-center mx-20 mt-20 mb-20 gap-6'>
    <PackageCard name="Tropical Paradise Recreation" location="Bali, Indonesia" days="7" nights="6" price="999" image="/assets/images/home-package-1-1.jpg"/>
    <PackageCard name="Cruise Gateway Expedition" location="Carribean Islands" days="7" nights="6" price="1799" image="/assets/images/home-package-2.png"/>
    <PackageCard name="Cultural Immersion in Morocco" location="Cusco, Peru" days="6" nights="5" price="1199" image="/assets/images/home-package-3.png"/>
    <PackageCard name="River Expedition in Thuringia" location="Thuringia, Germany" days="7" nights="6" price="899" image="/assets/images/home-package-4.png"/>
    <PackageCard name="Mountain Odyssey Adventure" location="Kathmandu, Nepal" days="5" nights="4" price="899" image="/assets/images/package-5.png"/>
    <PackageCard name="Wildlife Safari Expedition" location="Nairobi, Kenya" days="7" nights="6" price="1899" image="/assets/images/package-6.png"/>
    <PackageCard name="Historic Mediterranean Voyage" location="Puno, Peru" days="5" nights="4" price="1899" image="/assets/images/package-7.png"/>
    <PackageCard name="Rome City Adventure" location="Rome,Italy" days="5" nights="4" price="799" image="/assets/images/package-8.png"/>
    <PackageCard name="Amazon Rainforest Expedition" location="Amazon, Brazil" days="7" nights="6" price="799" image="/assets/images/package-9.png"/>
    
    </div>
    <ContactForm image="assets/images/trips-contact-bg.png"/>
    <Footer/>
    </>
  )
}

export default Trips