import React from 'react'
import { Link } from 'react-router-dom';


const Nav = ({ isDarkMode = false, position = "absolute", background = "bg-transparent", ...rest }) => {
  return (
    <nav
      className={`justify-between ${position} flex px-20 w-full z-10 h-10 items-center p-10 ${
        isDarkMode ? "text-neutral-50" : "text-neutral-900"
      } ${background}`}
      {...rest}
    >
      <Link to={`/`}><p className="font-playfair italic text-2xl">Xplore.</p></Link>
      <ul className="gap-10 flex">
        <li><Link to={`/trips`}>Trips</Link></li>
        <li><Link to={`/gallery`}>Gallery</Link></li>
        <li><Link to={`/about-us`}>About</Link></li>
        <li><Link to={`/contact`}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
