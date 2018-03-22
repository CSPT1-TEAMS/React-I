import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

class App extends Component {
  constructor() {
    super();
    this.state = {
    todostuff: ['make my bed', 'laundry', 'windows'],
    newtodo: ''
  };


  addToDo = (event) => {
    event.preventDefault();

    const todostuff = this.state.todostuff;
   todostuff.push(this.state.newtodo);

    this.setState({
      newtodo: '',
      todostuff: todostuff
    });
  };

  newToDoInput = (event) => {
    this.setState({newtodo: event.target.value});
  };

  render() {
    return(
      <div>
        {this.state.todostuff.map(stuff => <div>{name}</div>)}
        <form onSubmit={this.addToDo}/>
        <input type="text" onChange={this.newToDoInput} placeholder="Add new Todo item here!" value={this.state.newtodo} />
      </div>
    );
  }
}

export default App;
