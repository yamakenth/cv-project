import React from 'react';
import EditButton from './EditButton';

class WorkExpDisplay extends React.Component {
  render() {
    return (
      <div 
        className='work-experience display' 
        onMouseEnter={this.props.showEditBtn}
        onMouseLeave={this.props.hideEditBtn}
        style={this.props.displayFormStyle}
      >
        <EditButton editBtnStyle={this.props.editBtnStyle} showEditForm={this.props.showEditForm}/>
        <h3>WORK EXPERIENCE</h3>
        {this.props.data.map((job) => {
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
    );
  }
}

export default WorkExpDisplay;