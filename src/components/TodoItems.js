import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo2.completed ? 'line-through' : 'none'
        }
        //The long way;
        // if(this.props.todo2.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else {
        //    return {
        //        textDecoration: 'none'
        //    }
        // }
    }

    render() {
        console.log(this.props.todo2);
        return (
    
            <div style ={this.getStyle()}>
               <p>{ this.props.todo2.title }</p> 
            </div>
        )
    }
}

TodoItems.propTypes = {
    todo2: PropTypes.object.isRequired
  }
// this is use when in style above is only using one curly brace. 
//   const itemStyle ={
//       backgroundColor: '#f4f4f4'
//   }

export default TodoItems
