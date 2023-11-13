import React from 'react';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  return (
    <div className='app__header'>
      <div className='app__header-content'>
        <h1 className=''>
          Be Soc<span>i</span>alwise
        </h1>
      </div>

      <div className='app__header-form'>
        <form className='form'>
          <h3>Login please</h3>
          <div className='input-icon'>
            <FaEnvelope className='custom-icon' />
            <div className='Form-dash' />
            <input
              type='text'
              name='userId'
              placeholder='Input your user ID or Email'
            />
          </div>

          <div className='input-icon'>
            <FaKey className='custom-icon' />
            <div className='Form-dash' />
            <input
              type='password'
              name='password'
              placeholder='Input your password'
            />
          </div>

          <div className='buttons'>
            <label className='rememberme' href='#!'>
              <input type='checkbox' />
              Remember me
            </label>
            <a className='forgotpassword' href='#!'>
              Forgot Password?
            </a>
          </div>
          <div className='submitbtn'>
            <button type='submit'>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
