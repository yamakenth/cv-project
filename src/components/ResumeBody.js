import React from 'react';
import PersonalInfo from './PersonalInfo';
import '../styles/ResumeBody.css';

class ResumeBody extends React.Component {
  render() {
    return (
      <div className='resume-body'>
        <PersonalInfo />
      </div>
    );
  }
}

export default ResumeBody;