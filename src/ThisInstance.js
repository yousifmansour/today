import './ThisInstance.css';
import React from 'react';

class ThisInstance extends React.Component {
  render() {
    return (
      <div className='this-instance-container'>
        <h1>This Instance</h1>
        <h2>can be uniquly identified as: 20181206121235</h2>
      </div>
    );
  }
}

export default ThisInstance;