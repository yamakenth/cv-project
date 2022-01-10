import React from 'react';
import EditButton from './buttons/EditButton';

export default function WorkExpDisplay(props) {
  return (
    <div 
      className='work-experience display' 
      onMouseEnter={props.showEditBtn}
      onMouseLeave={props.hideEditBtn}
      style={props.displayFormStyle}
    >
      <EditButton editBtnStyle={props.editBtnStyle} showEditForm={props.showEditForm}/>
      <h3>WORK EXPERIENCE</h3>
      {props.jobs.map((job) => {
        return (
          <div key={job.id} className='work item'>
            <div className='row one'>
              <p>{job.company}</p>
              <p>{job.location}</p>
            </div>
            <div className='row two'>
              <p>{job.position}</p>
              <p>{job.date}</p>
            </div>
            <ul className='job-description'>
              <li>{job.desc_1}</li>
              <li>{job.desc_2}</li>
              <li>{job.desc_3}</li>
            </ul>
          </div>
        );
      })}
    </div>
  )
}