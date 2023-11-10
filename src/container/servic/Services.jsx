import React from 'react';
import images from '../../constants/images';
import './Services.css';

export default function Services() {
  return (
    <div className='app__services section__padding'>
      <div className='app__wrapper_info'>
        <h1 className='headtext'>
          <span>Services</span>
        </h1>
        <p className='p__opensans'>
          We offer a wide range of services to help you manage your budget.
        </p>
      </div>

      <div className='app__services_img app__services_img-reverse'>
        <img src={images.photo_website} alt='higher_man_psd' />
      </div>
    </div>
  );
}
