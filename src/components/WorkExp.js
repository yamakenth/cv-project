import React from 'react';
import uniqid from 'uniqid';
import EditButton from './EditButton';

class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtn: { display: 'none' },
      data: {
        job: {
          id: uniqid(),
          company: '',
          location: '',
          position: '',
          date: '',
          desc_1: '',
          desc_2: '',
          desc_3: ''
        },
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
  }

  showEditBtn = () => {
    this.setState({
      editBtn: { display: 'block' }
    });
  }
  
  hideEditBtn = () => {
    this.setState({
      editBtn: { display: 'none' }
    });
  }
  
  render() {
    return (
      <div 
        className='work-experience section' 
        onMouseEnter={this.showEditBtn}
        onMouseLeave={this.hideEditBtn}
      >
        <EditButton editBtnStyle={this.state.editBtn} />
        <h3>WORK EXPERIENCE</h3>
        {this.state.data.jobs.map((job) => {
          return (
            <div key={job.id} className='work item'>
              <div className='row one'>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
              <div className='row two'>
                <p>{job.position}</p>
                <p>{job.date}</p>
              </div>
              <ul className='job-description'>
                <li>{job.desc_1}</li>
                <li>{job.desc_2}</li>
                <li>{job.desc_3}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkExp;