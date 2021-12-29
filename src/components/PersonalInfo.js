import React from 'react';
import '../styles/PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className='personal-info'>
        <div className='name'>
          <h1 className='fname'>Ken</h1>
          <h1 className='lname'>Yamada</h1>
        </div>
        <div className='contacts'>
          <p className='location'>Bangkok, Thailand</p>
          <p id='pipe'>||</p>
          <p className='email'>contactme@gmail.com</p>
          <p id='pipe'>||</p>
          <p className='phone-number'>(123)-567-8910</p>
          <p id='pipe'>||</p>
          <p className='link'>
            <a 
              href='https://www.youtube.com/watch?v=UqTTSo1wdIY&ab_channel=F1AudioBook' 
              target='_blank' 
              rel='noreferrer'
            >
              www.myportfolio.com
            </a>
          </p>
        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}

export default PersonalInfo;