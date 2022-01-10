import React from 'react';
import EditButton from './buttons/EditButton';

export default function PersonalInfoDisplay(props) {
  return(
    <div 
      className='personal-info display'
      onMouseEnter={props.editBtn.showBtn}
      onMouseLeave={props.editBtn.hideBtn}
      style={props.displayFormStyle}
    >
      <EditButton 
        editBtnStyle={props.editBtn.btnStyle} 
        showEditForm={props.showEditForm}
      />
      <div className='name'>
        <h1>{props.fname}</h1>
        <h1>{props.lname}</h1>
      </div>
      <div className='contacts'>
        <p>{props.location}</p>
        <p id='pipe'>||</p>
        <p>{props.email}</p>
        <p id='pipe'>||</p>
        <p>{props.phoneNumber}</p>
        <p id='pipe'>||</p>
        <p>
          <a href= {props.linkHref} target='_blank' rel='noreferrer'>
            {props.linkText}
          </a>
        </p>
      </div>
      <div className='description'>{props.description}</div>
    </div>
  );
}