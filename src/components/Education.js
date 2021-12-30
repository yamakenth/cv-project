import React from 'react';

class Education extends React.Component {
  render() {
    return(
      <div className='education'>
        <h3>EDUCATION</h3>
        <div className='education one'>
          <div className='row one'>
            <div>University of Something, College of Engineering</div>
            <div>Somewhere, Country</div>
          </div>
          <div className='row two'>
            <div>Industrial & Systems Engineering</div>
            <div>June 2020</div>
          </div>
          <ul className='description'>
            <li>Major GPA: 3.77/4.00, Cumulative GPA: 3.59/4.00</li>
            <li>Dean's List (6 semesters), Certificate of High Scholarship (2 academic years)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;