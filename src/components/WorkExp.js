import React from 'react';
import uniqid from 'uniqid';
import WorkExpDisplay from './WorkExpDisplay';

class WorkExp extends React.Component {
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

      data: [
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

      id: this.state.data.id,
      company: this.state.data.company,
      location: this.state.data.location,
      position: this.state.data.position,
      date: this.state.data.date,
      desc_1: this.state.data.desc_1,
      desc_2: this.state.data.desc_2,
      desc_3: this.state.data.desc_3,
    });
  }
  
  hideEditForm = () => {
    this.setState({
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' }
    });
  }
  
  render() {
    return (
      <div className='work-experience section'>
        <WorkExpDisplay 
          editBtnStyle={this.state.editBtnStyle}
          displayFormStyle={this.state.displayFormStyle}
          showEditBtn={this.showEditBtn}
          hideEditBtn={this.hideEditBtn}
          showEditForm={this.showEditForm}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default WorkExp;