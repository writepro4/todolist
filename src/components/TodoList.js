import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return(
            <div>
                <TodoItem done>리액트 공부</TodoItem>
                <TodoItem>아직 안함</TodoItem>
            </div>
        )
    }
}

export default TodoList;
