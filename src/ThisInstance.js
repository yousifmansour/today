import './ThisInstance.css';
import React from 'react';

class ThisInstance extends React.Component {
  render() {
    return (
      <div className='this-instance-container'>
        <h1>This Instance</h1>
        <h2>can be uniquly identified as: {this.props.thisInstance}</h2>
      </div>
    );
  }
}

export default ThisInstance;