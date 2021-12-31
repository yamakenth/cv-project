import React from 'react';
import SubmitButton from './SubmitButton';

class PersonalInfoEdit extends React.Component {
  render() {
    const { fname, lname, location, email, phoneNumber, link, description} = this.props.data;
    
    return(
      <form className='personal-info edit' style={this.props.editFormStyle}>
        <h2>Personal Information</h2>
        <div className='name-input'>
          <label htmlFor="fname-input">
            First Name:
            <input 
              type="text" 
              id="fname-input" 
              onChange={this.props.handleFNameChange} 
              value={(this.props.fname) ? this.props.fname : fname}
            />
          </label>
          <label htmlFor="lname-input">
            Last Name:
            <input 
              type="text" 
              id="lname-input" 
              onChange={this.props.handleLNameChange}
              value={(this.props.lname) ? this.props.lname : lname}
            />
          </label>
        </div>
        <div className='contact-info'>
          <label htmlFor="location-input">
            Location:
            <input 
              type="text" 
              id="location-input" 
              onChange={this.props.handleLocationChange}
              value={(this.props.location) ? this.props.location : location}
            />
          </label>
          <label htmlFor="email-input">
            Email:
            <input 
              type="text" 
              id="email-input" 
              onChange={this.props.handleEmailChange}
              value={(this.props.email) ? this.props.email : email}
            />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input 
              type="text" 
              id="phone-number-input" 
              onChange={this.props.handlePhoneNumberChange}
              value={(this.props.phoneNumber) ? this.props.phoneNumber : phoneNumber}
            />
          </label>
        </div>
        <div className='link'>
          <label htmlFor="link-text-input">
            Link Display Text:
            <input 
              type="text" 
              id="link-text-input" 
              onChange={this.props.handleLinkTextChange}
              value={(this.props.link.text) ? this.props.link.text : link.text}
            />
          </label>
          <label htmlFor="link-href-input">
            Link Hyperlink:
            <input 
              type="text" 
              id="link-href-input" 
              onChange={this.props.handleLinkHrefChange}
              value={(this.props.link.href) ? this.props.link.href : link.href}
            />
          </label>
        </div>
        <div className='description'>
          <label htmlFor="description-input">Description:</label>
          <textarea 
            id='description-input' 
            rows='5' cols='90' 
            onChange={this.props.handleDescriptionChange}
            value={(this.props.description) ? this.props.description : description}
          ></textarea>
        </div>
        <SubmitButton 
          hideEditForm={this.props.hideEditForm} 
          handleSubmit={this.props.handleSubmit}
        />
      </form>
    );
  }
}

export default PersonalInfoEdit;