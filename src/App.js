import React, { Component } from 'react';

const Title = ({tit}) => {
  return (
    <div className="up_tit">{tit}</div>
  );
};

class App extends Component {
  render() {
    return (
      <div className='wrap'>
        <Title tit='LEunH Portfolio List'/>
      </div>
    );
  }
}

export default App;
