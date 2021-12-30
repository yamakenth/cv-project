import React from 'react';
import '../styles/ResumeBody.css';
import PersonalInfo from './PersonalInfo';
import WorkExp from './WorkExp';
import EditForm from './EditForm';

class ResumeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStyle: { display: 'none' }
    }
  }

  showEditForm = () => {
    this.setState({
      formStyle: { display: 'flex' }
    })
  }
  
  render() {
    return (
      <div className='resume-body'>
        <PersonalInfo showEditForm={this.showEditForm} />
        <WorkExp />
        <EditForm formStyle={this.state.formStyle} />
      </div>
    );
  }
}

export default ResumeBody;