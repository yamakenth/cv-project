import React from 'react';
import '../styles/EditForm.css';

class EditForm extends React.Component {
  render() {
    return (
      <div style={this.props.formStyle}>
        <form className='edit-form'>
          <h2>This is a form</h2>
        </form>
        <div id='overlay'></div>
      </div>
    );
  }
}

export default EditForm;