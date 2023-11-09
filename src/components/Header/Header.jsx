import React from 'react';
import images from '../../constants/images';
import './Header.css';
export default function Header() {
  return (
    <>
      <div className='header'>
        <h1>
          Be Soc<span>i</span>alwise
        </h1>

        <div className='header__social-content'>
          <img src={images.Header_photo} alt='header_photo' />

          <form>
            <label>
              First Name:
              <input type='text' name='firstName' />
            </label>
            <label>
              Last Name:
              <input type='text' name='lastName' />
            </label>
            <label>
              Email:
              <input type='email' name='email' />
            </label>
            <label>
              Password:
              <input type='password' name='password' />
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
