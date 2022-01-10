import React, { useState } from 'react';
import Data from './data/data.json';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import WorkExp from './components/WorkExp';
import './styles/App.css';

export default function App() {
  return (
    <div className='resume-body'>
      <PersonalInfo data={Data.personalInfo} useFormInput={useFormInput} />
      <WorkExp data={Data.workExp} useFormInput={useFormInput} />
      <Education data={Data.education} useFormInput={useFormInput} />
    </div>
  )
}

// handle input on edit form
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  }
}