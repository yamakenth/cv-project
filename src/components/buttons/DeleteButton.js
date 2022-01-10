import React from 'react';
import '../../styles/DeleteButton.css';
import closeButton from '../../img/close.png';

export default function DeleteButton(props) {
  return (
    <button className='delete-button' onClick={props.handleDelete}>
      <img src={closeButton} alt=''/>
    </button>
  )
}