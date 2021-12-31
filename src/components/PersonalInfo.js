import React from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtnStyle: { display: 'none' },
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' },
      
      fname: 'James',
      lname: 'Jones',
      location: 'Seattle, Washington',
      email: 'contactme@gmail.com',
      phoneNumber: '(123)-567-8910',
      link: {
        href: 'https://www.youtube.com/watch?v=UqTTSo1wdIY&ab_channel=F1AudioBook',
        text: 'www.myportfolio.com'
      },
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
      displayFormStyle: { display: 'none' }
    });
  }
  
  hideEditForm = () => {
    this.setState({
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' }
    });
  }

  handleFNameChange = (e) => {
    this.setState({
      fname: e.target.value
    });
  }
  
  handleLNameChange = (e) => {
    this.setState({
      lname: e.target.value
    });
  }

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handlePhoneNumberChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleLinkTextChange = (e) => {
    this.setState({
      link : {
        href: this.state.link.href,
        text: e.target.value
      }
    });
  }
  
  handleLinkHrefChange = (e) => {
    this.setState({
      link: {
        href: e.target.value,
        text: this.state.link.text
      }
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    });
  }

  render() {
    return (
      <div className='personal-info section'>
        <PersonalInfoDisplay 
          editBtnStyle={this.state.editBtnStyle}
          displayFormStyle={this.state.displayFormStyle}
          fname={this.state.fname}
          lname={this.state.lname}
          location={this.state.location}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          link={this.state.link}
          description={this.state.description}
          
          showEditBtn={this.showEditBtn}
          hideEditBtn={this.hideEditBtn}
          showEditForm={this.showEditForm}
          />
        <PersonalInfoEdit 
          editFormStyle={this.state.editFormStyle}
          fname={this.state.fname}
          lname={this.state.lname}
          location={this.state.location}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          link={this.state.link}
          description={this.state.description}
          
          hideEditForm={this.hideEditForm}
          handleFNameChange={this.handleFNameChange}
          handleLNameChange={this.handleLNameChange}
          handleLocationChange={this.handleLocationChange}
          handleEmailChange={this.handleEmailChange}
          handlePhoneNumberChange={this.handlePhoneNumberChange}
          handleLinkTextChange={this.handleLinkTextChange}
          handleLinkHrefChange={this.handleLinkHrefChange}
          handleDescriptionChange={this.handleDescriptionChange}
        />
      </div>
    );
  }
}