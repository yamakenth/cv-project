import React from 'react';
import AddButton from './buttons/AddButton';
import DeleteButton from './buttons/DeleteButton';
import SubmitButton from './buttons/SubmitButton';

export default function EducationEdit(props) {
  return (
    <form 
      className='education edit' 
      style={props.editFormStyle}
      onSubmit={props.hideEditForm}
    >
      <h2>Education</h2>
      {props.schools.map((school) => {
        return (
          <div key={school.id} className='edit-each-item'>
            <DeleteButton handleDelete={() => props.handleDelete(school)}/>
            <div className='school-input'>
              <label htmlFor="school-name-input">
                School Name:
                <input 
                  type="text" 
                  id="school-name-input" 
                  onChange={(e) => props.handleSchoolChange(e, school)} 
                  value={(props.school) ? props.school : school.school}
                  required
                />
              </label>
              <label htmlFor="location-input">
                School Location:
                <input 
                  type="text" 
                  id="location-input" 
                  onChange={(e) => props.handleLocationChange(e, school)}
                  value={(props.location) ? props.location : school.location}
                  required
                />
              </label>
            </div>
            <div className='major-input'>
              <label htmlFor="major-input">
                Area of Study:
                <input 
                  type="text" 
                  id="major-input" 
                  onChange={(e) => props.handleMajorChange(e, school)} 
                  value={(props.major) ? props.major : school.major}
                  required
                />
              </label>
              <label htmlFor="date-input">
                Period of Employment:
                <input 
                  type="text" 
                  id="date-input" 
                  onChange={(e) => props.handleDateChange(e, school)}
                  value={(props.date) ? props.date : school.date}
                  required
                />
              </label>
            </div>
            <div className='desc'>
              <label htmlFor="desc-1-input">Description 1:</label>
              <textarea 
                id='desc-1-input' 
                rows='1' cols='90' 
                onChange={(e) => props.handleDesc1Change(e, school)}
                value={(props.desc_1) ? props.desc_1 : school.desc_1}
                required
              ></textarea>
            </div>
            <div className='desc'>
              <label htmlFor="desc-2-input">Description 2:</label>
              <textarea 
                id='desc-2-input' 
                rows='1' cols='90' 
                onChange={(e) => props.handleDesc2Change(e, school)}
                value={(props.desc_2) ? props.desc_2 : school.desc_2}
                required
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