import React from 'react';
import uniqid from 'uniqid';
import EditButton from './EditButton';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtn: { display: 'none' },
      data: {
        education: {
          id: uniqid(),
          school: '',
          location: '',
          major: '',
          date: '',
          desc_1: '',
          desc_2: '',
        },
        educations: [
          {
            id: uniqid(),
            school: 'University of Something, College of Engineering',
            location: 'Seattle, Washington',
            major: 'Industrial & Systems Engineering',
            date: 'June 2020',
            desc_1: 'Major GPA: 3.77/4.00, Cumulative GPA: 3.59/4.00',
            desc_2: 'Dean\'s List (6 semesters)',
          },
          {
            id: uniqid(),
            school: 'Somestate College',
            location: 'City, State',
            major: 'Applied Computational Mathematics',
            date: 'July 2018',
            desc_1: 'Major GPA: 3.99/4.00, Cumulative GPA: 3.78/4.00',
            desc_2: 'Dean\'s List(8 semesters)',
          }
        ]
      }
    }
  }

  showEditBtn = () => {
    this.setState({
      editBtn: { display: 'block' }
    });
  }
  
  hideEditBtn = () => {
    this.setState({
      editBtn: { display: 'none' }
    });
  }

  render() {
    return(
      <div 
        className='education section'
        onMouseEnter={this.showEditBtn}
        onMouseLeave={this.hideEditBtn}
      >
        <EditButton editBtnStyle={this.state.editBtn} />
        <h3>EDUCATION</h3>
        {this.state.data.educations.map((education) => {
          return (
            <div key={education.id} className='education item'>
              <div className='row one'>
                <div>{education.school}</div>
                <div>{education.location}</div>
              </div>
              <div className='row two'>
                <div>{education.major}</div>
                <div>{education.date}</div>
              </div>
              <ul className='description'>
                <li>{education.desc_1}</li>
                <li>{education.desc_2}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;