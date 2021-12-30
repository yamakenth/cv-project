import React from 'react';
import '../styles/EditButton.css';

class EditButton extends React.Component {
  render() {
    return (
      <button 
        className='edit-button' 
        style={this.props.buttonStyle} 
        onClick={this.props.showEditForm}
      >
        Edit
      </button>
    )
  }
}

export default EditButton;