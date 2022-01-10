import React from 'react';
import '../../styles/AddButton.css';

export default function AddButton(props) {
  return (
    <button type='button' onClick={props.handleAdd} id='add'>Add</button>
  );
}