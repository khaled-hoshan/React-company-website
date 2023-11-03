import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import images from '../../constants/images';
import './NavBar.css';

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo_official} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#services'>Services</a>
        </li>
        <li className='p__opensans'>
          <a href='#blog'>Blog</a>
        </li>
        <li className='p__opensans'>
          <a href='#faq'>FAQ</a>
        </li>
        <li className='p__opensans'>
          <a href='#terms of service'>Terms of Service</a>
        </li>
        <li className='p__opensans'>
          <a href='#api'>API</a>
        </li>
      </ul>

      <div className='app__navbar-login'>
        <a href='login' className='p__opensans'>
          Register
        </a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fdc25a'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineClose
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#services'>Services</a>
              </li>
              <li className='p__opensans'>
                <a href='#blog'>Blog</a>
              </li>
              <li className='p__opensans'>
                <a href='#faq'>FAQ</a>
              </li>
              <li className='p__opensans'>
                <a href='#terms of service'>Terms of Service</a>
              </li>
              <li className='p__opensans'>
                <a href='#api'>API</a>
              </li>
            </ul>
            <div className='app__navbar-smallscreen-login'>
              <a href='login' className='p__opensans'>
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
