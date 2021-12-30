import React from 'react';
import EditButton from './EditButton';

class WorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        editBtn: { display: 'none' }
      }
    }
  }

  showEditBtn = () => {
    this.setState({
      style: {
        editBtn: { display: 'block' }
      }
    });
  }
  
  hideEditBtn = () => {
    this.setState({
      style: {
        editBtn: { display: 'none' }
      }
    });
  }
  
  render() {
    return (
      <div 
        className='work-experience section' 
        onMouseEnter={this.showEditBtn}
        onMouseLeave={this.hideEditBtn}
      >
        <EditButton editBtnStyle={this.state.style.editBtn} />
        <h3>WORK EXPERIENCE</h3>
        <div className='work one item'>
          <div className='row one'>
            <p>An E-commerce Company</p>
            <p>Bangkok, Thailand</p>
          </div>
          <div className='row two'>
            <p>Data Analyst</p>
            <p>September 2020 - October 2021</p>
          </div>
          <ul className='job-description'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.
            </li>
          </ul>
        </div>
        <div className='work two item'>
          <div className='row one'>
            <p>A Manufacturing Company</p>
            <p>Chonburi, Thailand</p>
          </div>
          <div className='row two'>
            <p>Industrial Engineer</p>
            <p>September 2019 - October 2020</p>
          </div>
          <ul className='job-description'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.
            </li>
          </ul>
        </div>
        <div className='work three item'>
          <div className='row one'>
            <p>A Banking Company</p>
            <p>Bangkok, Thailand</p>
          </div>
          <div className='row two'>
            <p>Investment Banker</p>
            <p>September 2018 - October 2019</p>
          </div>
          <ul className='job-description'>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Tincidunt vitae semper quis lectus nulla at volutpat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Adipiscing elit ut aliquam purus sit amet luctus.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default WorkExp;