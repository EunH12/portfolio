import React, { Component } from 'react';

class PortFolio extends Component {
  state = {
    title : '',
    info : '',
    part : '',
    link : '',
    id : ''
  }
  
  componentDidMount(){
    const {title, info, part, link, id} = this.props.data;
    this.setState({
      title : title,
      info : info,
      part : part,
      link : link,
      id : id
    })
  }
  render() {   
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.info}</div>
        <div>{this.state.part}</div>
        <div>{this.state.link}</div>
        <div>{this.state.id}</div>
      </div>
    );
  }
}

export default PortFolio;
