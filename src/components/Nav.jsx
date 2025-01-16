import React from 'react'


function Nav() {
  return (
    <nav className='justify-between flex h-10 items-center p-10'>
        <p className='font-playfair italic text-xl'>Xplore.</p>
        <ul className='gap-7 flex'>
            <a href=""><li>Trips</li></a>
            <a href=""><li>Gallery</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
        </ul>
    </nav>
  )
}

export default Nav