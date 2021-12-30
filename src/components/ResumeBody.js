import React from 'react';
import PersonalInfo from './PersonalInfo';
import '../styles/ResumeBody.css';
import WorkExp from './WorkExp';

class ResumeBody extends React.Component {
  render() {
    return (
      <div className='resume-body'>
        <PersonalInfo />
        <WorkExp />
      </div>
    );
  }
}

export default ResumeBody;