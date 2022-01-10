import React from 'react';
import EditButton from './buttons/EditButton';

export default function EducationDisplay(props) {
  return (
    <div 
      className='education display'
      onMouseEnter={props.editBtn.showBtn}
      onMouseLeave={props.editBtn.hideBtn}
      style={props.displayFormStyle}
    >
      <EditButton editBtnStyle={props.editBtn.btnStyle} showEditForm={props.showEditForm}/>
      <h3>EDUCATION</h3>
      {props.schools.map((school) => {
        return (
          <div key={school.id} className='education item'>
            <div className='row one'>
              <div>{school.school}</div>
              <div>{school.location}</div>
            </div>
            <div className='row two'>
              <div>{school.major}</div>
              <div>{school.date}</div>
            </div>
            <ul className='description'>
              <li>{school.desc_1}</li>
              <li>{school.desc_2}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}