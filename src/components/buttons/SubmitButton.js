import React from 'react';
import '../../styles/SubmitButton.css';

export default class EditForm extends React.Component {
  render() {
    return (
      <button type='button' id='submit' onClick={this.props.hideEditForm}>Confirm</button>
    );
  }
}