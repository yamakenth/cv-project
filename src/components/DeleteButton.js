import React from 'react';
import '../styles/DeleteButton.css';
import closeButton from '../img/close.png';

export default class DeleteButton extends React.Component {
  render() {
    return (
      <button className='delete-button' onClick={this.props.handleDelete}>
        <img src={closeButton} alt=''/>
      </button>
    )
  }
}