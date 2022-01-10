import React from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

export default function PersonalInfo(props) {
  const fname = props.useFormInput(props.data.fname);
  const lname = props.useFormInput(props.data.lname);
  const location = props.useFormInput(props.data.location);
  const email = props.useFormInput(props.data.email);
  const phoneNumber = props.useFormInput(props.data.phoneNumber);
  const linkHref = props.useFormInput(props.data.linkHref);
  const linkText = props.useFormInput(props.data.linkText);
  const description = props.useFormInput(props.data.description);

  return (
    <div className='personal-info section'>
      <PersonalInfoDisplay 
        editBtnStyle={props.editBtnStyle}
        displayFormStyle={props.displayFormStyle}
        fname={fname.value}
        lname={lname.value}
        location={location.value}
        email={email.value}
        phoneNumber={phoneNumber.value}
        linkHref={linkHref.value}
        linkText={linkText.value}
        description={description.value}

        showEditBtn={props.showEditBtn}
        hideEditBtn={props.hideEditBtn}
        showEditForm={props.showEditForm}
      />
      <PersonalInfoEdit 
        editFormStyle={props.editFormStyle}
        fname={fname.value}
        lname={lname.value}
        location={location.value}
        email={email.value}
        phoneNumber={phoneNumber.value}
        linkHref={linkHref.value}
        linkText={linkText.value}
        description={description.value}
        
        hideEditForm={props.hideEditForm}
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