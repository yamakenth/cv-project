import React from 'react';
import '../../styles/EditButton.css';

export default function EditButton(props) {
  return (
    <button 
      className='edit-button' 
      style={props.editBtnStyle}
      onClick={props.showEditForm}
    >
      Edit
    </button>
  );
}