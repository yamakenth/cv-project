import React from 'react';
import '../styles/SubmitButton.css';

class EditForm extends React.Component {
  render() {
    return (
      <button type='button' id='submit' onClick={this.props.handleSubmit}>Confirm</button>
    );
  }
}

export default EditForm;