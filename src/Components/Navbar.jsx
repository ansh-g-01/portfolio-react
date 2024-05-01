import React, { useState } from 'react'; // Importing useState hook
import './Navbar.css';
import logo from '../assets/logo1.jpg';
import sty from '../assets/astyle.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home"); // Declaring menu state variable using useState

  return (
    <div className='navbar'>
      <img src={sty} alt="Here" style={{ width: '100px', height: '100px' }} />
      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          
        </li>
        <li>
          <AnchorLink className='anchor-link'  offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link'  offset={50} href='#Projects'>
            <p onClick={() => setMenu("portfolio")}>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link'  offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>


      <div className="nav-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
