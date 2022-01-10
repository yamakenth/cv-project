import React, { useState } from 'react';
import Data from './data/data.json';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import WorkExp from './components/WorkExp';
import './styles/App.css';

export default function App() {  
  return (
    <div className='resume-body'>
      <PersonalInfo 
        data={Data.personalInfo} 
        useFormInput={useFormInput} 
        usePopupButton={usePopupButton}
        useInformationDisplay={useInformationDisplay}
        />
      <WorkExp 
        data={Data.workExp} 
        useFormInput={useFormInput} 
        usePopupButton={usePopupButton}
        useInformationDisplay={useInformationDisplay}
        />
      <Education 
        data={Data.education} 
        useFormInput={useFormInput}
        usePopupButton={usePopupButton}
        useInformationDisplay={useInformationDisplay}
      />
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

// show and hide edit button 
function usePopupButton() {
  const [btnStyle, setBtnStyle] = useState({ display: 'none' });
  function showBtn() {
    setBtnStyle({ display: 'block' });
  }
  function hideBtn() {
    setBtnStyle({ display: 'none' });
  }

  return {
    btnStyle, 
    showBtn, 
    hideBtn
  }
}

// switch between display and edit form 
function useInformationDisplay() {
  const [editFormStyle, setEditFormStyle] = useState({ display: 'none' });
  const [displayFormStyle, setDisplayFormStyle] = useState({ display: 'block' });
  function showEditForm() {
    setEditFormStyle({ display: 'flex' });
    setDisplayFormStyle({ display: 'none' });
  }
  function hideEditForm() {
    setEditFormStyle({ display: 'none' });
    setDisplayFormStyle({ display: 'block' });
  }

  return {
    editFormStyle,
    displayFormStyle,
    showEditForm,
    hideEditForm
  }
}