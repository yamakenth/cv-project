import React from 'react';
import AddButton from './buttons/AddButton';
import DeleteButton from './buttons/DeleteButton';
import SubmitButton from './buttons/SubmitButton';

export default function WorkExpEdit(props) {
  return (
    <form className='work-experience edit' style={props.editFormStyle}>
      <h2>Work Experience</h2>
      {props.jobs.map((job) => {
        return (
          <div key={job.id} className='edit-each-item'>
            <DeleteButton handleDelete={() => props.handleDelete(job)}/>
            <div className='company-input'>
              <label htmlFor="compnay-name-input">
                Company Name:
                <input 
                  type="text" 
                  id="compnay-name-input" 
                  onChange={(e) => props.handleCompanyChange(e, job)} 
                  value={(props.company) ? props.company : job.company}
                />
              </label>
              <label htmlFor="location-input">
                Company Location:
                <input 
                  type="text" 
                  id="location-input" 
                  onChange={(e) => props.handleLocationChange(e, job)}
                  value={(props.location) ? props.location : job.location}
                />
              </label>
            </div>
            <div className='position-input'>
              <label htmlFor="position-input">
                Position:
                <input 
                  type="text" 
                  id="position-input" 
                  onChange={(e) => props.handlePositionChange(e, job)} 
                  value={(props.position) ? props.position : job.position}
                />
              </label>
              <label htmlFor="date-input">
                Period of Employment:
                <input 
                  type="text" 
                  id="date-input" 
                  onChange={(e) => props.handleDateChange(e, job)}
                  value={(props.date) ? props.date : job.date}
                />
              </label>
            </div>
            <div className='desc'>
              <label htmlFor="desc-1-input">Description 1:</label>
              <textarea 
                id='desc-1-input' 
                rows='3' cols='90' 
                onChange={(e) => props.handleDesc1Change(e, job)}
                value={(props.desc_1) ? props.desc_1 : job.desc_1}
              ></textarea>
            </div>
            <div className='desc'>
              <label htmlFor="desc-2-input">Description 2:</label>
              <textarea 
                id='desc-2-input' 
                rows='3' cols='90' 
                onChange={(e) => props.handleDesc2Change(e, job)}
                value={(props.desc_2) ? props.desc_2 : job.desc_2}
              ></textarea>
            </div>
            <div className='desc'>
              <label htmlFor="desc-3-input">Description 3:</label>
              <textarea 
                id='desc-3-input' 
                rows='3' cols='90' 
                onChange={(e) => props.handleDesc3Change(e, job)}
                value={(props.desc_3) ? props.desc_3 : job.desc_3}
              ></textarea>
            </div>
          </div>
        );
      })}
      <AddButton handleAdd={props.handleAdd}/>
      <SubmitButton 
        hideEditForm={props.hideEditForm} 
      />
    </form>
  );
}