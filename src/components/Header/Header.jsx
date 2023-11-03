import React from 'react';
import images from '../../constants/images';
import './Header.css';
export default function Header() {
  return (
    <div
      className='app__aboutus app__bg flex__center section__padding'
      id='about'
    >
      <div className='app__aboutus-overlay '>
      <h1 className='headtext__cormorant'>Be Soc<span>i</span>alwise</h1>
        <img src={images.Header_photo} alt='header_overlay' />
      </div>
    </div>
  );
}
