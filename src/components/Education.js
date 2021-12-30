import React from 'react';

class Education extends React.Component {
  render() {
    return(
      <div className='education section'>
        <h3>EDUCATION</h3>
        <div className='education one item'>
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
            <li>Dean's List (6 semesters)</li>
          </ul>
        </div>
        <div className='education two item'>
          <div className='row one'>
            <div>Somestate College</div>
            <div>Somewhere, Country</div>
          </div>
          <div className='row two'>
            <div>Applied Computational Mathematics</div>
            <div>July 2018</div>
          </div>
          <ul className='description'>
            <li>Major GPA: 3.99/4.00, Cumulative GPA: 3.78/4.00</li>
            <li>Dean's List (8 semesters)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;