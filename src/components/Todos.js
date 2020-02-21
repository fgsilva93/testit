import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // the todos is the array
    return this.props.todos.map((something) => (
      <TodoItems key = { something.id } todo2 = { something } />
    ));
}

}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;