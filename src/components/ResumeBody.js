import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkExp from './WorkExp';

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
      </div>
    );
  }
}

export default ResumeBody;