import React from 'react';
import EditButton from './EditButton';

export default class PersonalInfoDisplay extends React.Component {
  render() {
    return(
      <div 
        className='personal-info display'
        onMouseEnter={this.props.showEditBtn}
        onMouseLeave={this.props.hideEditBtn}
        style={this.props.displayFormStyle}
      >
        <EditButton 
          editBtnStyle={this.props.editBtnStyle} 
          showEditForm={this.props.showEditForm}
        />
        <div className='name'>
          <h1>{this.props.fname}</h1>
          <h1>{this.props.lname}</h1>
        </div>
        <div className='contacts'>
          <p>{this.props.location}</p>
          <p id='pipe'>||</p>
          <p>{this.props.email}</p>
          <p id='pipe'>||</p>
          <p>{this.props.phoneNumber}</p>
          <p id='pipe'>||</p>
          <p>
            <a href= {this.props.link.href} target='_blank' rel='noreferrer'>
              {this.props.link.text}
            </a>
          </p>
        </div>
        <div className='description'>{this.props.description}</div>
      </div>
    );
  }
}