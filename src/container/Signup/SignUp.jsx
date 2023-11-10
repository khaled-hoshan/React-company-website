import React from 'react';
import images from '../../constants/images';
import './Signup.css';
export default function SignUp() {
  return (
    <div className='app__signin app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.Friendly_user_Infograph} alt='higher_man_psd' />
      </div>
      <div className='app__wrapper_info'>
      
        <h1 className='headtext'>
          <span>Sign Up</span>
        </h1>
        <p className='p__opensans'>
          We offer a wide range of services to help you manage your budget.
        </p>
      </div>
    </div>
  );
}
