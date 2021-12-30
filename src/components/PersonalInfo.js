import React from 'react';
import '../styles/PersonalInfo.css';
import EditButton from './EditButton';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStyle: { display: 'none' },
      data: {
        fname: 'Ken',
        lname: 'Yamada',
        location: 'Bangkok, Thailand',
        email: 'contactme@gmail.com',
        phoneNumber: '(123)-567-8910',
        link: {
          href: 'https://www.youtube.com/watch?v=UqTTSo1wdIY&ab_channel=F1AudioBook',
          text: 'www.myportfolio.com'
        },
        descritption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }

  showEditButton = () => {
    this.setState({
      buttonStyle: { display: 'flex' }
    })
  }

  hideEditButton = () => {
    this.setState({
      buttonStyle: { display: 'none' }
    })
  }
  
  render() {
    return (
      <div 
        className='personal-info' 
        onMouseEnter={this.showEditButton} 
        onMouseLeave={this.hideEditButton}
      >
        <EditButton buttonStyle={this.state.buttonStyle} showEditForm={this.props.showEditForm}/>
        <div className='name'>
          <h1 className='fname'>{this.state.data.fname}</h1>
          <h1 className='lname'>{this.state.data.lname}</h1>
        </div>
        <div className='contacts'>
          <p className='location'>{this.state.data.location}</p>
          <p id='pipe'>||</p>
          <p className='email'>{this.state.data.email}</p>
          <p id='pipe'>||</p>
          <p className='phone-number'>{this.state.data.phoneNumber}</p>
          <p id='pipe'>||</p>
          <p className='link'>
            <a href= {this.state.data.link.href} target='_blank' rel='noreferrer'>
              {this.state.data.link.text}
            </a>
          </p>
        </div>
        <div className='description'>{this.state.data.descritption}</div>
      </div>
    );
  }
}

export default PersonalInfo;