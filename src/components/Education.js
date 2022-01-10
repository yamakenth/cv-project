import React, { useState } from 'react';
import uniqid from 'uniqid';
import EducationDisplay from './EducationDisplay';
import EducationEdit from './EducationEdit';

export default function Education(props) {
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
  
  const school = useFormInput('');
  const location = useFormInput('');
  const major = useFormInput('');
  const date = useFormInput('');
  const desc_1 = useFormInput('');
  const desc_2 = useFormInput('');

  const [schools, setSchools] = useState(props.data);
  function handleSchoolChange(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, school: e.target.value } : item 
    ));
  }
  function handleLocationChange(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, location: e.target.value } : item 
    ));
  }
  function handleMajorChange(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, major: e.target.value } : item 
    ));
  }
  function handleDateChange(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, date: e.target.value } : item 
    ));
  }
  function handleDesc1Change(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, desc_1: e.target.value } : item 
    ));
  }
  function handleDesc2Change(e, element) {
    setSchools(schools.map((item) => 
      (item.id === element.id) ? { ...item, desc_2: e.target.value } : item 
    ));
  }
  function handleDelete(element) {
    setSchools(schools.filter(item => item.id !== element.id));
  }
  function handleAdd() {
    setSchools(schools.concat({
      id: uniqid(),
      school: school.value,
      location: location.value,
      major: major.value,
      date: date.value,
      desc_1: desc_1.value,
      desc_2: desc_2.value
    }));
  }

  return (
    <div className='education section'>
      <EducationDisplay 
        editBtnStyle={editBtnStyle}
        displayFormStyle={displayFormStyle}
        schools={schools}

        showEditBtn={showEditBtn}
        hideEditBtn={hideEditBtn}
        showEditForm={showEditForm}
      />
      <EducationEdit 
        editFormStyle={editFormStyle}
        schools={schools}

        hideEditForm={hideEditForm}
        handleSchoolChange={handleSchoolChange}
        handleLocationChange={handleLocationChange}
        handleMajorChange={handleMajorChange}
        handleDateChange={handleDateChange}
        handleDesc1Change={handleDesc1Change}
        handleDesc2Change={handleDesc2Change}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
      />
    </div>
  );
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