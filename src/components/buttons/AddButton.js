import React from 'react';
import '../../styles/AddButton.css';

export default class AddButton extends React.Component {
  render() {
    return (
      <button type='button' onClick={this.props.handleAdd} id='add'>Add</button>
    );
  }
}