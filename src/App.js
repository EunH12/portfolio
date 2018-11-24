import React, { Component, Fragment } from 'react';
import PortList from './component/portList';
import './sass/main.css';

const Title = ({tit}) => {
  return (
    <div className="title">{tit}</div>
  );
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title tit='LEunH Portfolio List'/>
        <PortList />
      </Fragment>
    );
  }
}

export default App;
