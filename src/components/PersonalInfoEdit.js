import React from 'react';
import EditForm from './SubmitButton';

class PersonalInfoEdit extends React.Component {
  render() {
    const { fname, lname, location, email, phoneNumber, link, description } = this.props.data;

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
              value={fname}
            />
          </label>
          <label htmlFor="lname-input">
            Last Name:
            <input 
              type="text" 
              id="lname-input" 
              onChange={this.props.handleLNameChange}
              value={lname}
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
              value={location}
            />
          </label>
          <label htmlFor="email-input">
            Email:
            <input 
              type="text" 
              id="email-input" 
              onChange={this.props.handleEmailChange}
              value={email}
            />
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input 
              type="text" 
              id="phone-number-input" 
              onChange={this.props.handlePhoneNumberChange}
              value={phoneNumber}
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
              value={link.text}
            />
          </label>
          <label htmlFor="link-href-input">
            Link Hyperlink:
            <input 
              type="text" 
              id="link-href-input" 
              onChange={this.props.handleLinkHrefChange}
              value={link.href}
            />
          </label>
        </div>
        <div className='description'>
          <label htmlFor="description-input">Description:</label>
          <textarea 
            id='description-input' 
            rows='5' cols='90' 
            onChange={this.props.handleDescriptionChange}
            value={description}
          ></textarea>
        </div>
        <EditForm hideEditForm={this.props.hideEditForm}/>
      </form>
    );
  }
}

export default PersonalInfoEdit;