import React from 'react';
import SubmitButton from './buttons/SubmitButton';

export default function PersonalInfoEdit(props) {
  return(
    <form className='personal-info edit' style={props.editFormStyle}>
      <h2>Personal Information</h2>
      <div className='name-input'>
        <label htmlFor="fname-input">
          First Name:
          <input 
            type="text" 
            id="fname-input" 
            onChange={props.handleFNameChange} 
            value={props.fname}
            required
          />
        </label>
        <label htmlFor="lname-input">
          Last Name:
          <input 
            type="text" 
            id="lname-input" 
            onChange={props.handleLNameChange}
            value={props.lname}
          />
        </label>
      </div>
      <div className='contact-info'>
        <label htmlFor="location-input">
          Location:
          <input 
            type="text" 
            id="location-input" 
            onChange={props.handleLocationChange}
            value={props.location}
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input 
            type="text" 
            id="email-input" 
            onChange={props.handleEmailChange}
            value={props.email}
          />
        </label>
        <label htmlFor="phone-number-input">
          Phone Number:
          <input 
            type="text" 
            id="phone-number-input" 
            onChange={props.handlePhoneNumberChange}
            value={props.phoneNumber}
          />
        </label>
      </div>
      <div className='link'>
        <label htmlFor="link-text-input">
          Link Display Text:
          <input 
            type="text" 
            id="link-text-input" 
            onChange={props.handleLinkTextChange}
            value={props.linkText}
          />
        </label>
        <label htmlFor="link-href-input">
          Link Hyperlink:
          <input 
            type="text" 
            id="link-href-input" 
            onChange={props.handleLinkHrefChange}
            value={props.linkHref}
          />
        </label>
      </div>
      <div className='description'>
        <label htmlFor="description-input">Description:</label>
        <textarea 
          id='description-input' 
          rows='5' cols='90' 
          onChange={props.handleDescriptionChange}
          value={props.description}
        ></textarea>
      </div>
      <SubmitButton 
        hideEditForm={props.hideEditForm} 
      />
    </form>
  );
}