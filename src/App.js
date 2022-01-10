import React from 'react';
import Data from './data/data.json';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import WorkExp from './components/WorkExp';
import './styles/App.css';

export default function App() {
  return (
    <div className='resume-body'>
      <PersonalInfo data={Data.personalInfo} />
      <WorkExp data={Data.workExp} />
      <Education data={Data.education} />
    </div>
  )
}