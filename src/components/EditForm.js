import React from 'react';
import '../styles/EditForm.css';

class EditForm extends React.Component {
  render() {
    return (
      <form className='edit-form' style={this.props.editFormStyle}>
        <h2>Form Title</h2>
        <div className='buttons'>
          <button type='submit' id='submit'>Confirm</button>
          <button type='button' id='cancel'>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EditForm;