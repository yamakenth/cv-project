import React from 'react';
import EditForm from './SubmitButton';

class PersonalInfoEdit extends React.Component {
  render() {
    const { fname, lname, location, email, phoneNumber, link, description } = this.props.data;

    return(
      <form className='personal-info display' style={this.props.editFormStyle}>
        <div className='name'>
          <input placeholder={fname}></input>
          <input placeholder={lname}></input>
        </div>
        <div className='contacts'>
          <input placeholder={location}></input>
          <p id='pipe'>||</p>
          <input placeholder={email}></input>
          <p id='pipe'>||</p>
          <input placeholder={phoneNumber}></input>
          <p id='pipe'>||</p>
          <div >
            <a href={link.href} target='_blank' rel='noreferrer'>
              <p>
                <span>[</span><input placeholder={link.text}></input><span>]</span><br></br>
                <span>(</span><input placeholder={link.href}></input><span>)</span>
              </p>
            </a>
          </div>
        </div> 
        <textarea className='description' rows='5' cols='86' placeholder={description}></textarea>
        <EditForm hideEditForm={this.props.hideEditForm}/>
      </form>
    );
  }
}

export default PersonalInfoEdit;