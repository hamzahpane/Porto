// src/Component/Navbar.jsx
import React, { useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMdList } from 'react-icons/io';
import './style/navbar.css'; // Pastikan ada file CSS ini

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => setClicked(!clicked);

  return (
    <nav className="navbar">
        <div className='Logo'> H M </div>
        <ul id="Navbar" className={clicked ? 'Navbar active' : 'Navbar'}>
            <li><a href="/" className="navlink">About</a></li>
            <li><a href="/menu" className="navlink">Project</a></li>
            <li><a href="/order" className="navlink">Resume</a></li>
            <li><a href="/contact" className="navlink">Contact</a></li>
        </ul>
        <div id='Media'>
          <FaLinkedinIn />
          <AiFillInstagram />
          <div id="Menu-icons" onClick={handleMenuClick}>
            {clicked ? <AiOutlineClose /> : <IoMdList />}
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
