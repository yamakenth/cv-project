import React from 'react';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import WorkExp from './components/WorkExp';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='resume-body'>
        <PersonalInfo />
        <WorkExp />
        <Education />
      </div>
    );
  }
}

export default App;