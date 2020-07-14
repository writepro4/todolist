import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    render() {
        //App에서 정의한 todos, onToggle를 가져오는데,
        const {todos, onToggle, onRemove} = this.props;

        // todoList라는 메서드를 만들어준다. 이는 todos라는 배열을 map함수로 하나씩 훑는데,
        const todoList = todos.map(
            //todo는
            todo => (
                //TodoItem의 값을 설정해준다. 이 때 key는 배열의 id값, done의 유무도 todos의 done으로 설정해두고,
                //todo.text를 변수로 보여주게 코드를 작성.
                <TodoItem
                    key = {todo.id}
                    done = {todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}
                >
                    {todo.text}
                </TodoItem>
            )
        )
        return (
            <div>
                {/*결국 return 할 값은 우리가 위에서 정의한 todoList의 메서드를 통해서 나온 것을 보여줘야함*/}
                {todoList}
            </div>
        )
    }
}

export default TodoList;