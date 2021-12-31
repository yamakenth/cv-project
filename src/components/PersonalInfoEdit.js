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
            <input type="text" id="fname-input" value={fname}/>
          </label>
          <label htmlFor="lname-input">
            Last Name:
            <input type="text" id="lname-input" value={lname}/>
          </label>
        </div>
        <div className='contact-info'>
          <label htmlFor="location-input">
            Location:
            <input type="text" id="location-input" value={location}/>
          </label>
          <label htmlFor="email-input">
            Email:
            <input type="text" id="email-input" value={email}/>
          </label>
          <label htmlFor="phone-number-input">
            Phone Number:
            <input type="text" id="phone-number-input" value={phoneNumber}/>
          </label>
        </div>
        <div className='link'>
          <label htmlFor="link-text-input">
            Link Display Text:
            <input type="text" id="link-text-input" value={link.text}/>
          </label>
          <label htmlFor="link-href-input">
            Link Hyperlink:
            <input type="text" id="link-href-input" value={link.href}/>
          </label>
        </div>
        <div className='description'>
          <label htmlFor="description-input">Description:</label>
          <textarea id='description-input' rows='5' cols='90' value={description}></textarea>
        </div>
        <EditForm hideEditForm={this.props.hideEditForm}/>
      </form>
    );
  }
}

export default PersonalInfoEdit;