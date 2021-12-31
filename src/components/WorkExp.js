import React from 'react';
import '../styles/WorkExp.css';
import uniqid from 'uniqid';
import WorkExpDisplay from './WorkExpDisplay';
import WorkExpEdit from './WorkExpEdit';

export default class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtnStyle: { display: 'none' },
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' },
      
      id: uniqid(),
      company: '',
      location: '',
      position: '',
      date: '',
      desc_1: '',
      desc_2: '',
      desc_3: '',

      jobs: [
        {
          id: uniqid(),
          company: 'An E-commerce Company',
          location: 'Bangkok, Thailand',
          position: 'Data Analyst',
          date: 'September 2020 - October 2021',
          desc_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.',
          desc_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.',
          desc_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.'
        },
        {
          id: uniqid(),
          company: 'A Manufacturing Company',
          location: 'Chonburi, Thailand',
          position: 'Industrial Engineer',
          date: 'September 2019 - October 2020',
          desc_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.',
          desc_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.',
          desc_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.'
        },
        {
          id: uniqid(),
          company: 'A Banking Company',
          location: 'Bangkok, Thailand',
          position: 'Investment Banker',
          date: 'September 2018 - October 2019',
          desc_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.',
          desc_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.',
          desc_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.'
        }
      ]
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

  handleCompanyChange = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, company: e.target.value } : item
      )
    });
  }

  handleLocationChange = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, location: e.target.value } : item
      )
    });
  }

  handlePositionChange = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, position: e.target.value } : item
      )
    });
  }

  handleDateChange = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, date: e.target.value } : item
      )
    });
  }

  handleDesc1Change = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, desc_1: e.target.value } : item
      )
    });
  }

  handleDesc2Change = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, desc_2: e.target.value } : item
      )
    });
  }

  handleDesc3Change = (e, element) => {
    this.setState({
      jobs: this.state.jobs.map((item) => 
        (item.id === element.id) ? { ...item, desc_3: e.target.value } : item
      )
    });
  }

  handleSubmit = () => {
    this.hideEditForm();
    
    this.setState({
      id: uniqid(),
      company: '',
      location: '',
      position: '',
      date: '',
      desc_1: '',
      desc_2: '',
      desc_3: '',
    });
  }
  
  render() {
    return (
      <div className='work-experience section'>
        <WorkExpDisplay 
          editBtnStyle={this.state.editBtnStyle}
          displayFormStyle={this.state.displayFormStyle}
          jobs={this.state.jobs}
          
          showEditBtn={this.showEditBtn}
          hideEditBtn={this.hideEditBtn}
          showEditForm={this.showEditForm}
        />
        <WorkExpEdit
          editFormStyle={this.state.editFormStyle}
          jobs={this.state.jobs}

          hideEditForm={this.hideEditForm}
          handleCompanyChange={this.handleCompanyChange}
          handleLocationChange={this.handleLocationChange}
          handlePositionChange={this.handlePositionChange}
          handleDateChange={this.handleDateChange}
          handleDesc1Change={this.handleDesc1Change}
          handleDesc2Change={this.handleDesc2Change}
          handleDesc3Change={this.handleDesc3Change}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}