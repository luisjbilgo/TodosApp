import React from 'react';
import './PhoneBackground.css';
import phone from './assets/Phonepixelart.png';

function PhoneBackground(props) {
  return (
    <div className='Phonebackground'>
      <div className='PhoneMockup'>
        <img src={phone} alt='Phone Mockup' />
        <div className='PhoneContent'>{props.children}</div>
      </div>
    </div>
  );
}

export  {PhoneBackground};