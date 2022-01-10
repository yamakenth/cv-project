import React from 'react';
import '../../styles/SubmitButton.css';

export default function EditForm(props) {
  return (
    <button type='button' id='submit' onClick={props.hideEditForm}>Confirm</button>
  );
}