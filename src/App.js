import React, {Component} from "react";
import PageTemplate from "./components/Pagetemplate";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
    state = {
        input: '', //input 값은 일단 비워둔다.
        //앞으로 todoItem값을 todos라는 배열에서 관리하도록 state를 만듬.
        //상위컴포넌트인 App에서 관리함이 포인트
        todos: [
            //미리 요소 두개 만들어둠
            {id: 0, text: '리액트 공부하기', done: true},
            {id: 1, text: '컴포넌트 스타일링', done: false}
        ]
    }

//TodoItem 데이터 안에 들어가는 id 값,
    //getId는 현재의 값에서 1을 더한 값을 반환
    id = 1
    getId=() => {
        return ++this.id;
    }

    render() {
        return (
            <PageTemplate>
                <TodoInput/>
                <TodoList/>
            </PageTemplate>
        )
    }
}

export default App;