import React from 'react';
import images from '../../constants/images';
import './Signup.css';
export default function SignUp() {
  return (
    <div className='app__signin app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.Friendly_user_Infograph} alt='higher_man_psd' />
      </div>
      <div className='app__signin app__wrapper_info'>
        <h1 className='headtext'>
          <span>User-friendly, fast and dynamic panel?</span>
        </h1>
        <p className='p__opensans'>
          We are always with you for all your questions and problems. Our
          priority is our customer satisfaction. We always protect your customer
          privacy data.
        </p>

        <button>
          Sign Up
        </button>
      </div>
    </div>
  );
}
