import React from 'react';
import uniqid from 'uniqid';
import EducationDisplay from './EducationDisplay';
import EducationEdit from './EducationEdit';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtnStyle: { display: 'none' },
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' },
      
      id: uniqid(),
      school: '',
      location: '',
      major: '',
      date: '',
      desc_1: '',
      desc_2: '',
      
      schools: props.data
    }
  }

  showEditBtn = () => {
    this.setState({
      editBtnStyle: { display: 'block' }
    });
  }
  
  hideEditBtn = () => {
    this.setState({
      editBtnStyle: { display: 'none' }
    });
  }

  showEditForm = () => {
    this.setState({
      editFormStyle: { display: 'flex' },
      displayFormStyle: { display: 'none' },
    });
  }
  
  hideEditForm = () => {
    this.setState({
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' }
    });
  }

  handleSchoolChange = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, school: e.target.value } : item
      )
    });
  }

  handleLocationChange = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, location: e.target.value } : item
      )
    });
  }

  handleMajorChange = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, major: e.target.value } : item
      )
    });
  }

  handleDateChange = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, date: e.target.value } : item
      )
    });
  }

  handleDesc1Change = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, desc_1: e.target.value } : item
      )
    });
  }

  handleDesc2Change = (e, element) => {
    this.setState({
      schools: this.state.schools.map((item) => 
        (item.id === element.id) ? { ...item, desc_2: e.target.value } : item
      )
    });
  }

  handleDelete = (element) => {
    this.setState({
      schools: this.state.schools.filter(item => item.id !== element.id)
    });
  }

  handleAdd = () => {
    this.setState({
      schools: this.state.schools.concat({
        id: this.state.id,
        school: this.state.school,
        location: this.state.location,
        major: this.state.major,
        date: this.state.date,
        desc_1: this.state.desc_1,
        desc_2: this.state.desc_2,
      })
    });
  }

  render() {
    return(
      <div className='education section'>
        <EducationDisplay 
          editBtnStyle={this.state.editBtnStyle}
          displayFormStyle={this.state.displayFormStyle}
          schools={this.state.schools}

          showEditBtn={this.showEditBtn}
          hideEditBtn={this.hideEditBtn}
          showEditForm={this.showEditForm}
        />
        <EducationEdit 
          editFormStyle={this.state.editFormStyle}
          schools={this.state.schools}

          hideEditForm={this.hideEditForm}
          handleSchoolChange={this.handleSchoolChange}
          handleLocationChange={this.handleLocationChange}
          handleMajorChange={this.handleMajorChange}
          handleDateChange={this.handleDateChange}
          handleDesc1Change={this.handleDesc1Change}
          handleDesc2Change={this.handleDesc2Change}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
        />
      </div>
    );
  }
}