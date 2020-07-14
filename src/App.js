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

    //handleChange는 input에 들어가는 값이 변했을 떄를 말하는데
    handleChange = (e) =>{
        //value값은 이벤트가 일어나는 값의 target으로 변수 설정
        const {value} = e.target;
        //따라서 state를 관리하는데 이 때 input의 state에 들어가는 값은
        //위에서 설정해둔 value값
        this.setState({
            input : value
        })
    }

    //그러면 이제 input에 넣은 것을 todos라는 배열에 넣어둬야함.
    handleInsert = () => {
        //미리 레퍼런스를 설정해두고, 앞으로 todos나 input은
        //this.state를 앞에 안쓰고도 사용이 가능하다.
        const {todos, input} = this.state;

        //newTodo라는 변수는, 새로운 객체를 만들어주는것.
        //handleInsert가 불러오면 바로 생성됨.
        const newTodo = {
            text:input,
            done:false,
            id:this.getId()
        }

        //newTodo로 새로운 객체가 만들어졌다면,
        //setState로 todos안에 새로운 요소를 만들어서 넣어줌.
        //이 때 todos는 ...todos즉 기존의 값에다가 newTodo를 불러와서 위에서
        //설정해준 값대로 배열에 들어감.
        //그리고나서 이제 input값을 초기화해준다.
        this.setState({
            todos : [...todos, newTodo],
            input: ''
        });
    }

    render() {
        //마찬가지로 레퍼런스를 미리 설정해둠
        const {input, todos} = this.state;
        const {
            handleChange,
            handleInsert
        } =this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        )
    }
}

export default App;