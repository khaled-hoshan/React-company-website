import React from 'react';
import images from '../../constants/images';
import './Header.css';
export default function Header() {
  return (
    <div className='app__header'>
      <div className='app__header-content'>
        <h1 className=''>
          Be Soc<span>i</span>alwise
        </h1>
      </div>

      <div className='app__header-form app__wrapper_img'>
        <form className='form'>
          <label>
            <input type='text' name='name' placeholder='' />
          </label>
          <label>
            <input type='email' name='email' placeholder='' />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>

    </div>
  );
}
