import React, { useState } from 'react';
import '../styles/WorkExp.css';
import uniqid from 'uniqid';
import WorkExpDisplay from './WorkExpDisplay';
import WorkExpEdit from './WorkExpEdit';

export default function WorkExp(props) {
  const [editBtnStyle, setEditBtnStyle] = useState({ display: 'none' });
  function showEditBtn() {
    setEditBtnStyle({ display: 'block' });
  }
  function hideEditBtn() {
    setEditBtnStyle({ display: 'none' });
  }

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

  const company = useFormInput('');
  const location = useFormInput('');
  const position = useFormInput('');
  const date = useFormInput('');
  const desc_1 = useFormInput('');
  const desc_2 = useFormInput('');
  const desc_3 = useFormInput('');

  const [jobs, setJobs] = useState(props.data);
  function handleCompanyChange(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, company: e.target.value } : item 
    ));
  }
  function handleLocationChange(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, location: e.target.value } : item 
    ));
  }
  function handlePositionChange(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, position: e.target.value } : item 
    ));
  }
  function handleDateChange(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, date: e.target.value } : item 
    ));
  }
  function handleDesc1Change(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, desc_1: e.target.value } : item 
    ));
  }
  function handleDesc2Change(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, desc_2: e.target.value } : item 
    ));
  }
  function handleDesc3Change(e, element) {
    setJobs(jobs.map((item) => 
      (item.id === element.id) ? { ...item, desc_3: e.target.value } : item 
    ));
  }
  function handleDelete(element) {
    setJobs(jobs.filter(item => item.id !== element.id));
  }
  function handleAdd() {
    setJobs(jobs.concat({
      id: uniqid(),
      company: company.value,
      location: location.value,
      position: position.value,
      date: date.value,
      desc_1: desc_1.value,
      desc_2: desc_2.value,
      desc_3: desc_3.value
    }));
  }
  
  return (
    <div className='work-experience section'>
      <WorkExpDisplay 
        editBtnStyle={editBtnStyle}
        displayFormStyle={displayFormStyle}
        jobs={jobs}
        
        showEditBtn={showEditBtn}
        hideEditBtn={hideEditBtn}
        showEditForm={showEditForm}
      />
      <WorkExpEdit
        editFormStyle={editFormStyle}
        jobs={jobs}

        hideEditForm={hideEditForm}
        handleCompanyChange={handleCompanyChange}
        handleLocationChange={handleLocationChange}
        handlePositionChange={handlePositionChange}
        handleDateChange={handleDateChange}
        handleDesc1Change={handleDesc1Change}
        handleDesc2Change={handleDesc2Change}
        handleDesc3Change={handleDesc3Change}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  )
}

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