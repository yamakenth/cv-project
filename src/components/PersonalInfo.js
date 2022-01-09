import React, { useState } from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

export default function PersonalInfo() {
  const [editBtnStyle, setEditBtnStyle] = useState({ display: 'none' });
  const showEditBtn = () => setEditBtnStyle({ display: 'block' });
  const hideEditBtn = () => setEditBtnStyle({ display: 'none' });

  const [editFormStyle, setEditFormStyle] = useState({ display: 'none' });
  const [displayFormStyle, setDisplayFormStyle] = useState({ display: 'block' });
  const showEditForm = () => {
    setEditFormStyle({ display: 'flex' });
    setDisplayFormStyle({ display: 'none' });
  }
  const hideEditForm = () => {
    setEditFormStyle({ display: 'none' });
    setDisplayFormStyle({ display: 'block' });
  }

  const [fname, setFName] = useState('James');
  const handleFNameChange = (e) => setFName(e.target.value);
  
  const [lname, setLName] = useState('Jones');
  const handleLNameChange = (e) => setLName(e.target.value);
  
  const [location, setLocation] = useState('Seattle, Washington');
  const handleLocationChange = (e) => setLocation(e.target.value);
  
  const [email, setEmail] = useState('contactme@gmail.com');
  const handleEmailChange = (e) => setEmail(e.target.value);
  
  const [phoneNumber, setPhoneNumber] = useState('(123)-567-8910');
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const [linkHref, setLinkHref] = useState(
    'https://www.youtube.com/watch?v=UqTTSo1wdIY&ab_channel=F1AudioBook'
  );
  const handleLinkHrefChange = (e) => setLinkHref(e.target.value);

  const [linkText, setLinkText] = useState('www.myportfolio.com');
  const handleLinkTextChange = (e) => setLinkText(e.target.value);

  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' + 
    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' + 
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
    'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
    'laborum.'
  );
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <div className='personal-info section'>
      <PersonalInfoDisplay 
        editBtnStyle={editBtnStyle}
        displayFormStyle={displayFormStyle}
        fname={fname}
        lname={lname}
        location={location}
        email={email}
        phoneNumber={phoneNumber}
        linkHref={linkHref}
        linkText={linkText}
        description={description}

        showEditBtn={showEditBtn}
        hideEditBtn={hideEditBtn}
        showEditForm={showEditForm}
      />
      <PersonalInfoEdit 
        editFormStyle={editFormStyle}
        fname={fname}
        lname={lname}
        location={location}
        email={email}
        phoneNumber={phoneNumber}
        linkHref={linkHref}
        linkText={linkText}
        description={description}
        
        hideEditForm={hideEditForm}
        handleFNameChange={handleFNameChange}
        handleLNameChange={handleLNameChange}
        handleLocationChange={handleLocationChange}
        handleEmailChange={handleEmailChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleLinkTextChange={handleLinkTextChange}
        handleLinkHrefChange={handleLinkHrefChange}
        handleDescriptionChange={handleDescriptionChange}
      />
    </div>
  )
}