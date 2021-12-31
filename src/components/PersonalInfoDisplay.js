import React from 'react';
import EditButton from './EditButton';

class PersonalInfoDisplay extends React.Component {
  
  render() {
    const { fname, lname, location, email, phoneNumber, link, description} = this.props.data;
    
    return(
      <div 
        className='personal-info display'
        onMouseEnter={this.props.showEditBtn}
        onMouseLeave={this.props.hideEditBtn}
        style={this.props.displayFormStyle}
      >
        <EditButton editBtnStyle={this.props.editBtnStyle} showEditForm={this.props.showEditForm}/>
        <div className='name'>
          <h1>{fname}</h1>
          <h1>{lname}</h1>
        </div>
        <div className='contacts'>
          <p>{location}</p>
          <p id='pipe'>||</p>
          <p>{email}</p>
          <p id='pipe'>||</p>
          <p>{phoneNumber}</p>
          <p id='pipe'>||</p>
          <p>
            <a href= {link.href} target='_blank' rel='noreferrer'>{link.text}</a>
          </p>
        </div>
        <div className='description'>{description}</div>
      </div>
    );
  }
}

export default PersonalInfoDisplay;