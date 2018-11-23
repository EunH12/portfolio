import React, { Component } from 'react';
import './App.css';

const Title = ({tit}) => {
  return (
    <div className="up_tit">{tit}</div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title tit='Portfolio'/>
      </div>
    );
  }
}

export default App;
