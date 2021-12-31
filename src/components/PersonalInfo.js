import React from 'react';
import '../styles/PersonalInfo.css';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import PersonalInfoEdit from './PersonalInfoEdit';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBtnStyle: { display: 'none' },
      editFormStyle: { display: 'none' },
      displayFormStyle: { display: 'block' },
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
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
      data: {
        fname: e.target.value,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }
  
  handleLNameChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: e.target.value,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }

  handleLocationChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: e.target.value,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: e.target.value,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }

  handlePhoneNumberChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: e.target.value,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }

  handleLinkTextChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: e.target.value,
        },
        description: this.state.data.description
      }
    });
  }

  handleLinkHrefChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: e.target.value,
          text: this.state.data.link.text,
        },
        description: this.state.data.description
      }
    });
  }

  handleDescriptionChange = (e) => {
    this.setState({
      data: {
        fname: this.state.data.fname,
        lname: this.state.data.lname,
        location: this.state.data.location,
        email: this.state.data.email,
        phoneNumber: this.state.data.phoneNumber,
        link: {
          href: this.state.data.link.href,
          text: this.state.data.link.text,
        },
        description: e.target.value
      }
    });
  }

  render() {
    return (
      <div className='personal-info section'>
        <PersonalInfoDisplay 
          data={this.state.data}
          editBtnStyle={this.state.editBtnStyle}
          displayFormStyle={this.state.displayFormStyle}
          showEditBtn={this.showEditBtn}
          hideEditBtn={this.hideEditBtn}
          showEditForm={this.showEditForm}
          />
        <PersonalInfoEdit 
          data={this.state.data}
          editFormStyle={this.state.editFormStyle}
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

export default PersonalInfo;