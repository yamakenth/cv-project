import React, { useState } from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

export default function PersonalInfo(props) {
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

  const fname = useFormInput(props.data.fname);
  const lname = useFormInput(props.data.lname);
  const location = useFormInput(props.data.location);
  const email = useFormInput(props.data.email);
  const phoneNumber = useFormInput(props.data.phoneNumber);
  const linkHref = useFormInput(props.data.linkHref);
  const linkText = useFormInput(props.data.linkText);
  const description = useFormInput(props.data.description);

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