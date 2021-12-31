import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

export default class EducationEdit extends React.Component {
  render() {
    return (
      <form className='education edit' style={this.props.editFormStyle}>
        <h2>Education</h2>
        {this.props.schools.map((school) => {
          return (
            <div key={school.id} className='edit-each-item'>
              <DeleteButton handleDelete={() => this.props.handleDelete(school)}/>
              <div className='school-input'>
                <label htmlFor="school-name-input">
                  School Name:
                  <input 
                    type="text" 
                    id="school-name-input" 
                    onChange={(e) => this.props.handleSchoolChange(e, school)} 
                    value={(this.props.school) ? this.props.school : school.school}
                  />
                </label>
                <label htmlFor="location-input">
                  School Location:
                  <input 
                    type="text" 
                    id="location-input" 
                    onChange={(e) => this.props.handleLocationChange(e, school)}
                    value={(this.props.location) ? this.props.location : school.location}
                  />
                </label>
              </div>
              <div className='major-input'>
                <label htmlFor="major-input">
                  Area of Study:
                  <input 
                    type="text" 
                    id="major-input" 
                    onChange={(e) => this.props.handleMajorChange(e, school)} 
                    value={(this.props.major) ? this.props.major : school.major}
                  />
                </label>
                <label htmlFor="date-input">
                  Period of Employment:
                  <input 
                    type="text" 
                    id="date-input" 
                    onChange={(e) => this.props.handleDateChange(e, school)}
                    value={(this.props.date) ? this.props.date : school.date}
                  />
                </label>
              </div>
              <div className='desc'>
                <label htmlFor="desc-1-input">Description 1:</label>
                <textarea 
                  id='desc-1-input' 
                  rows='1' cols='90' 
                  onChange={(e) => this.props.handleDesc1Change(e, school)}
                  value={(this.props.desc_1) ? this.props.desc_1 : school.desc_1}
                ></textarea>
              </div>
              <div className='desc'>
                <label htmlFor="desc-2-input">Description 2:</label>
                <textarea 
                  id='desc-2-input' 
                  rows='1' cols='90' 
                  onChange={(e) => this.props.handleDesc2Change(e, school)}
                  value={(this.props.desc_2) ? this.props.desc_2 : school.desc_2}
                ></textarea>
              </div>
            </div>
          );
        })}
        <AddButton handleAdd={this.props.handleAdd}/>
        <SubmitButton 
          hideEditForm={this.props.hideEditForm} 
        />
      </form>
    );
  }
}