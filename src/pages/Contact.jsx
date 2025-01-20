import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <Nav position=""/>
    <Header image="assets/images/contact-head-bg.png" heading="Contact" headingitalic="Us"/>
    <div className='w-full  flex flex-row my-20'>
    <form className='w-7/12 mx-20 flex flex-col text-lg gap-4' action="">
                <span className='flex flex-row gap-4'>
                    <input className='w-full p-2 rounded-md bg-cream' type="text" placeholder='Name'/>
                    <input className='w-full p-2 rounded-md bg-cream' type="email" placeholder='Email'/>
                </span>
                <textarea className='w-full p-2 rounded-md bg-cream' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='w-full bg-default text-white font-semibold p-2 rounded-md' type="submit">Send</button>
    </form>
    <div className='w-auto flex flex-col mx-20 gap-2'>
    <div
  className="w-full h-auto mr-20 border border-solid rounded-lg flex flex-row pl-4 pr-10 py-4 gap-4 items-center bg-transparent border-black text-neutral-900"
>
  <span
    className="border rounded-full p-4 flex items-center justify-center border-black"
  >
    <img
      className="w-6"
      src="assets/icons/phones-icon.svg"
      alt="phone icon"
    />
  </span>
  <div className="flex flex-col gap-1">
    <h6 className="font-sans font-semibold text-left">
      Phone Number
    </h6>
    <p className="text-left">+123 456 7890</p>
  </div>
</div>
<div
  className="w-full h-auto mr-20 border border-solid rounded-lg flex flex-row pl-4 pr-10 py-4 gap-4 items-center bg-transparent border-black text-neutral-900"
>
  <span
    className="border rounded-full p-4 flex items-center justify-center border-black"
  >
    <img
      className="w-6"
      src="assets/icons/email-icon.svg"
      alt="phone icon"
    />
  </span>
  <div className="flex flex-col gap-1">
    <h6 className="font-sans font-semibold text-left">
      Email Address
    </h6>
    <p className="text-left">info@xplore.com</p>
  </div>
</div>
<div
  className="w-full h-auto mr-20 border border-solid rounded-lg flex flex-row pl-4 pr-10 py-4 gap-4 items-center bg-transparent border-black text-neutral-900"
>
  <span
    className="border rounded-full p-4 flex items-center justify-center border-black"
  >
    <img
      className="w-6"
      src="assets/icons/address-icon.svg"
      alt="phone icon"
    />
  </span>
  <div className="flex flex-col gap-1">
    <h6 className="font-sans font-semibold text-left">
      Address
    </h6>
    <p className="text-left">123 Wanderer Street, City Name, State Name, Nation</p>
  </div>
</div>

    </div>
    </div>
    <div className='w-full h-screen px-20 my-20 flex flex-col items-center'>
      <h2 className='font-sans text-[64px]'>Find Us on <span className='font-playfair italic'>Maps</span></h2>
      <p className='text-center w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit tortor in elit hendrerit, ut placerat libero cursus. Etiam lobortis commodo laoreet. Nam maximus nunc non mi egestas sagittis. </p>
      <iframe className='w-full h-full mt-10' src="https://maps.google.com/maps?q=52.37588,4.891295&z=15&output=embed" frameborder="0"></iframe>
    </div>
    <Footer/>
    </>
  )
}

export default Contact