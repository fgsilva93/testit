import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos1: [
      {
        id: 1,
        title: 'Take out the trash', 
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife', 
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with Boss', 
        completed: false
      }
    ]
  }
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos = {this.state.todos1}/>
      </div>
    );
  }
}

export default App;
