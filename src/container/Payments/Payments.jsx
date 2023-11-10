import React from 'react';
import images from '../../constants/images';
import './Payments.css';

export default function Payments() {
  return (
    <div className='app__payments section__padding '>
      <div className='app__wrapper_info'>
        <div className='app__payments-title'>
          <img src={images.Secure_3D_payment_pic} alt='secure3d' />
        </div>
        <h1 className='headtext'>
          SPEND MORE <br />
          <span>EARN MORE !</span>
        </h1>
        <p className='p__opensans'>
          with 3D Secure payment methods, you can create your order whenever you
          want by loading the balance 24/7 without any problems. All balances
          you upload are automatically uploaded to your account.
        </p>
      </div>

      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.Man_higher_psd} alt='higher_man_psd' />
      </div>
    </div>
  );
}
