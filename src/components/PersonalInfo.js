import React, { useState } from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

export default function PersonalInfo() {
  const [editBtnStyle, setEditBtnStyle] = useState({ display: 'none' });
  function showEditBtn() {
    setEditBtnStyle({ display: 'block' });
  }
  function hideEditBtn() {
    setEditBtnStyle({ display: 'none' });
  }

  const [editFormStyle, setEditFormStyle] = useState({ display: 'none' });
  const [displayFormStyle, setDisplayFormStyle] = useState({ display: 'block' });
  function showEditForm() {
    setEditFormStyle({ display: 'flex' });
    setDisplayFormStyle({ display: 'none' });
  }
  function hideEditForm() {
    setEditFormStyle({ display: 'none' });
    setDisplayFormStyle({ display: 'block' });
  }

  const fname = useFormInput('James');
  const lname = useFormInput('Jones');
  const location = useFormInput('Seattle, Washington');
  const email = useFormInput('contactme@gmail.com');
  const phoneNumber = useFormInput('(123)-567-8910');
  const linkHref = useFormInput(
    'https://www.youtube.com/watch?v=UqTTSo1wdIY&ab_channel=F1AudioBook'
  );
  const linkText = useFormInput('www.myportfolio.com');
  const description = useFormInput(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
    'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' + 
    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' + 
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ' +
    'sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ' +
    'laborum.'
  );

  return (
    <div className='personal-info section'>
      <PersonalInfoDisplay 
        editBtnStyle={editBtnStyle}
        displayFormStyle={displayFormStyle}
        fname={fname.value}
        lname={lname.value}
        location={location.value}
        email={email.value}
        phoneNumber={phoneNumber.value}
        linkHref={linkHref.value}
        linkText={linkText.value}
        description={description.value}

        showEditBtn={showEditBtn}
        hideEditBtn={hideEditBtn}
        showEditForm={showEditForm}
      />
      <PersonalInfoEdit 
        editFormStyle={editFormStyle}
        fname={fname.value}
        lname={lname.value}
        location={location.value}
        email={email.value}
        phoneNumber={phoneNumber.value}
        linkHref={linkHref.value}
        linkText={linkText.value}
        description={description.value}
        
        hideEditForm={hideEditForm}
        handleFNameChange={fname.onChange}
        handleLNameChange={lname.onChange}
        handleLocationChange={location.onChange}
        handleEmailChange={email.onChange}
        handlePhoneNumberChange={phoneNumber.onChange}
        handleLinkTextChange={linkText.onChange}
        handleLinkHrefChange={linkHref.onChange}
        handleDescriptionChange={description.onChange}
      />
    </div>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}