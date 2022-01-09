import React from 'react';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import WorkExp from './components/WorkExp';
import './styles/App.css';

export default function App() {
  return (
    <div className='resume-body'>
      <PersonalInfo />
      <WorkExp />
      <Education />
    </div>
  )
}