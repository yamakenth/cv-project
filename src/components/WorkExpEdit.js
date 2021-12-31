import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

export default class WorkExpEdit extends React.Component {
  render() {
    return (
      <form className='work-experience edit' style={this.props.editFormStyle}>
        <h2>Work Experience</h2>
        {this.props.jobs.map((job) => {
          return (
            <div key={job.id} className='edit-each-item'>
              <DeleteButton handleDelete={() => this.props.handleDelete(job)}/>
              <div className='company-input'>
                <label htmlFor="compnay-name-input">
                  Company Name:
                  <input 
                    type="text" 
                    id="compnay-name-input" 
                    onChange={(e) => this.props.handleCompanyChange(e, job)} 
                    value={(this.props.company) ? this.props.company : job.company}
                  />
                </label>
                <label htmlFor="location-input">
                  Company Location:
                  <input 
                    type="text" 
                    id="location-input" 
                    onChange={(e) => this.props.handleLocationChange(e, job)}
                    value={(this.props.location) ? this.props.location : job.location}
                  />
                </label>
              </div>
              <div className='position-input'>
                <label htmlFor="position-input">
                  Position:
                  <input 
                    type="text" 
                    id="position-input" 
                    onChange={(e) => this.props.handlePositionChange(e, job)} 
                    value={(this.props.position) ? this.props.position : job.position}
                  />
                </label>
                <label htmlFor="date-input">
                  Period of Employment:
                  <input 
                    type="text" 
                    id="date-input" 
                    onChange={(e) => this.props.handleDateChange(e, job)}
                    value={(this.props.date) ? this.props.date : job.date}
                  />
                </label>
              </div>
              <div className='desc'>
                <label htmlFor="desc-1-input">Description 1:</label>
                <textarea 
                  id='desc-1-input' 
                  rows='3' cols='90' 
                  onChange={(e) => this.props.handleDesc1Change(e, job)}
                  value={(this.props.desc_1) ? this.props.desc_1 : job.desc_1}
                ></textarea>
              </div>
              <div className='desc'>
                <label htmlFor="desc-2-input">Description 2:</label>
                <textarea 
                  id='desc-2-input' 
                  rows='3' cols='90' 
                  onChange={(e) => this.props.handleDesc2Change(e, job)}
                  value={(this.props.desc_2) ? this.props.desc_2 : job.desc_2}
                ></textarea>
              </div>
              <div className='desc'>
                <label htmlFor="desc-3-input">Description 3:</label>
                <textarea 
                  id='desc-3-input' 
                  rows='3' cols='90' 
                  onChange={(e) => this.props.handleDesc3Change(e, job)}
                  value={(this.props.desc_3) ? this.props.desc_3 : job.desc_3}
                ></textarea>
              </div>
              
            </div>
          );
        })}
        <AddButton />
        <SubmitButton 
          hideEditForm={this.props.hideEditForm} 
          handleSubmit={this.props.handleSubmit}
        />
      </form>
    );
  }
}