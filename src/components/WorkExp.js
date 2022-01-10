import React, { useState } from 'react';
import '../styles/WorkExp.css';
import uniqid from 'uniqid';
import WorkExpDisplay from './WorkExpDisplay';
import WorkExpEdit from './WorkExpEdit';

export default function WorkExp(props) {
  const editBtn = props.usePopupButton();
  const editForm = props.useInformationDisplay();

  const company = props.useFormInput('');
  const location = props.useFormInput('');
  const position = props.useFormInput('');
  const date = props.useFormInput('');
  const desc_1 = props.useFormInput('');
  const desc_2 = props.useFormInput('');
  const desc_3 = props.useFormInput('');

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
        editBtn={editBtn}
        displayFormStyle={editForm.displayFormStyle}
        jobs={jobs}
        
        showEditForm={editForm.showEditForm}
      />
      <WorkExpEdit
        editFormStyle={editForm.editFormStyle}
        jobs={jobs}

        hideEditForm={editForm.hideEditForm}
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