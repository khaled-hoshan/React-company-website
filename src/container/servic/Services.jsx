import React from 'react';
import images from '../../constants/images';
import './Services.css';

export default function Services() {
  return (
    <div className='app__services section__padding'>
      <div className='app__wrapper_info'>
        <h1 className='services-headtext'>
          <span>
            Your Ultimate Destination for Premier Social Media Services
          </span>
        </h1>
        <p className='app__p p__opensans'>
          Your Premier Choice for Cutting-Edge Tech Solutions at Unbeatable
          Prices. With our lightning-fast customer support and swift product
          delivery, we've garnered unwavering trust from countless satisfied
          clients. Join Boxmm today!"
        </p>

        <button>
          SIGN UP TODAY
        </button>
      </div>

      <div className='app__services_img app__services_img-reverse'>
        <img src={images.photo_website} alt='higher_man_psd' />
      </div>
    </div>
  );
}
