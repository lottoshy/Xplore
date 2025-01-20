import React from 'react'


const Nav = ({ isDarkMode = false, position = "absolute", background = "bg-transparent", ...rest }) => {
  return (
    <nav
      className={`justify-between ${position} flex px-20 w-full h-10 items-center p-10 ${
        isDarkMode ? "text-neutral-50" : "text-neutral-900"
      } ${background}`}
      {...rest}
    >
      <p className="font-playfair italic text-2xl">Xplore.</p>
      <ul className="gap-7 flex">
        <a  href="">
          <li>Trips</li>
        </a>
        <a href="">
          <li>Gallery</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
