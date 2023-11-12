import React from 'react';
import images from '../../constants/images';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className='app__footer section__padding'>
        <div className='app__footer-logo'>
          <img
            src={images.logo_official}
            alt='logo'
            style={{ width: '10rem' }}
          />
          <p>
            Boxsmm is the cheapest & fastest social media marketing website
            which serves all customers in the worldwide.
          </p>
        </div>

        <div className='app__footer-content'>
          <div className='app__footer-Links'>
            <h1>Useful Links</h1>
            <div className='dash' />
            <a href='#signin'>Sign Up</a>
            <a href='#services'>Services</a>
            <a href='#api'>API</a>
          </div>

          <div className='app__footer-paymethods'>
            <h1>10+ Different payment methods</h1>
            <div className='dash' />
            <img
              src={images.payment_methods}
              alt='payment methods'
            />
          </div>
        </div>
      </div>
      <h1 className='copyright'>
        Copyright 2023 © BOXMM All right reserved.
      </h1>
    </>
  );
}
