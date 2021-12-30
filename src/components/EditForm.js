import React from 'react';
import '../styles/EditForm.css';

class EditForm extends React.Component {
  render() {
    return (
      <div style={this.props.formStyle}>
        <form className='edit-form'>
          <h2>Personal Information</h2>
            {/*  */}
            <div>
              <div class='fname-input-container'>
                <label htmlFor="fname-input">First Name:</label>
                <input type="text" id="fname-input" />
              </div>
              <div class='lname-input-container'>
                <label htmlFor="lname-input">Last Name:</label>
                <input type="text" id="lname-input" />
              </div>
              <div class='location-input-container'>
                <label htmlFor="location-input">Location:</label>
                <input type="text" id="location-input" />
              </div>
              <div class='email-input-container'>
                <label htmlFor="email-input">Email:</label>
                <input type="text" id="email-input" />
              </div>
              <div class='phone-number-input-container'>
                <label htmlFor="phone-number-input">Phone Number:</label>
                <input type="text" id="phone-number-input" />
              </div>
              <div class='link-input-container'>
                <label htmlFor="link-input">Link:</label>
                <input type="text" id="link-input" />
              </div>
              <div class='description-input-container'>
                <label htmlFor="description-input">Description:</label>
                <textarea id="description-input" rows='4' cols='50' />
              </div>
            </div>
            {/*  */}
          <button type='submit'>Confirm</button>
        </form>
        <div id='overlay'></div>
      </div>
    );
  }
}

export default EditForm;