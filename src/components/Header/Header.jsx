import React from 'react';
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
          <i class="fa-regular fa-envelope" style={{width:'20px'}}></i>
            <div style={{ height: '40px', width: '3px', color: 'red' }} />
            <input
              type='text'
              name='userId'
              placeholder='Input your user ID or Email'
            />
          </div>

          <div>
            <input
              type='password'
              name='password'
              placeholder='Input your password'
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
