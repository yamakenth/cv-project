import React from 'react';
import '../styles/SubmitButton.css';

class EditForm extends React.Component {
  render() {
    return (
      <div className='buttons'>
        <button type='button' id='submit' onClick={this.props.handleSubmit}>Confirm</button>
        <button type='button' id='cancel' onClick={this.props.hideEditForm}>Cancel</button>
      </div>
    );
  }
}

export default EditForm;