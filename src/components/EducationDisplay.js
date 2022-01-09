import React from 'react';
import EditButton from './buttons/EditButton';

export default class EducationDisplay extends React.Component {
  render() {
    return (
      <div 
        className='education display'
        onMouseEnter={this.props.showEditBtn}
        onMouseLeave={this.props.hideEditBtn}
        style={this.props.displayFormStyle}
      >
        <EditButton editBtnStyle={this.props.editBtnStyle} showEditForm={this.props.showEditForm}/>
        <h3>EDUCATION</h3>
        {this.props.schools.map((school) => {
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
}