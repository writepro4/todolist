import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home, About, Menu} from './router'
import Axios from "axios";
// import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
// import PageTemplate from "./components/Pagetemplate";
// import TodoInput from "./components/TodoInput";
// import TodoList from "./components/TodoList";
// import Event from "./components/event";
// import ValidationSample from "./components/ValidationSample";
// import ScrollBox from "./components/ScrollBox";
// import MapExample from "./components/MapExample";
// import FunctionType from "./components/FunctionType";
// import HooksUseEffect from "./components/useEffectExample";
// import HooksUseTitle from "./components/UseTitleExample";
// import HooksUseClick from "./components/useClickExample";
// import {Home, About} from "./router";
import RSPHooks from "./components/RockPaperScissors";
import Users from './components/Users';


class App extends Component {
    // state = {
    //     input: '', //input 값은 일단 비워둔다.
    //     todos: [
    //         //미리 요소 두개 만들어둠
    //         {id: 0, text: '리액트 공부하기', done: true},
    //         {id: 1, text: '컴포넌트 스타일링', done: false}
    //     ]
    // }

//TodoItem 데이터 안에 들어가는 id 값,
    //getId는 현재의 값에서 1을 더한 값을 반환
    id = 1
    getId = () => {
        return ++this.id;
    }

    //handleChange는 input에 들어가는 값이 변했을 떄를 말하는데
    handleChange = (e) => {
        //value값은 이벤트가 일어나는 값의 target으로 변수 설정
        const {value} = e.target;
        //따라서 state를 관리하는데 이 때 input의 state에 들어가는 값은
        //위에서 설정해둔 value값
        this.setState({
            input: value
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
            text: input,
            done: false,
            id: this.getId()
        }

        //newTodo로 새로운 객체가 만들어졌다면,
        //setState로 todos안에 새로운 요소를 만들어서 넣어줌.
        //이 때 todos는 ...todos즉 기존의 값에다가 newTodo를 불러와서 위에서
        //설정해준 값대로 배열에 들어감.
        //그리고나서 이제 input값을 초기화해준다.
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }

    //id로 배열의 인덱스를 찾는 함수를 만든다. 이게 바로 done으로 상태를 바꾸는 이벤트.
    handleToggle = (id) => {
        const {todos} = this.state;

        //index라는 변수는 todos배열에서 찾는건데,
        const index = todos.findIndex(todo => todo.id === id);

        //toggled은 찾은 index의 값의 done값을 반전시키도록 만든다.
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        console.log(todos);
        //그리고 나서 찾은 index값을 제외하고 todos에 다 넣는다. donx된거는 따로
        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        })
        console.log(todos);

    }

    //id값을 받아서 해당 데이터를 지우는 이벤트를 만든다.
    handleRemove = (id) => {
        console.log("지웁니다.")
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        //이번에는 state인 todos안에 해당하는 값의 index를 아예 다 지워버림
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        })
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         first: Math.ceil(Math.random() * 9),
    //         second: Math.ceil(Math.random() * 9),
    //         value: '',
    //         result: ''
    //     }
    //     console.log(this.state)
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     if (parseInt(this.state.value) === this.state.first * this.state.second) {
    //         this.setState({
    //             result: '정답',
    //             first: Math.ceil(Math.random() * 9),
    //             second: Math.ceil(Math.random() * 9),
    //             value: ''
    //         })
    //         console.log(this.setState)
    //         console.log(this.state)
    //     } else {
    //         this.setState({
    //             result: "틀렷습니다.",
    //             value: ''
    //         })
    //     }
    //
    //     console.log(this.state)
    // }

    // onChnage = (e) => this.setState({value: e.target.value})


    //끝말잇기 게임 부분
    // state = {
    //     word: "리액트",
    //     value: '',
    //     result: ''
    // }
    //
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
    //         this.setState(
    //             {
    //                 result: '정답입니당.',
    //                 word: this.state.value,
    //                 value: ''
    //             })
    //         this.input.focus()
    //     } else {
    //         this.setState({
    //             result: '틀렸습니다.',
    //             value: ''
    //         })
    //         this.input.focus()
    //     }
    // }
    //
    // onChangeInput = (e) => {
    //     this.setState({
    //         value: e.target.value
    //     })
    // }
    //
    //
    // //이게 뭐징???
    // // input;
    //
    // onRefInput = (c) => {
    //     this.input = c
    // }






    render() {

        //마찬가지로 레퍼런스를 미리 설정해둠
        // const {input, todos} = this.state;
        // const {
        //     handleChange,
        //     handleInsert,
        //     handleToggle,
        //     handleRemove
        // } = this;
        // return (
        //
        //     <BrowserRouter>
        //         <PageTemplate>
        //             <TodoInput onChange={handleChange}
        //                        onInsert={handleInsert}
        //                        value={input}
        //             />
        //             <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        //
        //         </PageTemplate>
        //
        //
        //         <Route exact path="/" component={Home}/>
        //         <Route exact path="/about" component={About}/>
        //     </BrowserRouter>
        //
        //
        // )


        return (
            <BrowserRouter>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/about/:name" component={About}/>
                </Switch>

                <RSPHooks/>
                {/*<div>*/}
                {/*    {this.state.first}곱하기{this.state.second}는?*/}
                {/*    <form onSubmit={this.onSubmit}>*/}
                {/*        <input type="number" value={this.state.value} onChange={this.onChnage}/>*/}
                {/*        <button>입력</button>*/}
                {/*    </form>*/}
                {/*    <div>{this.state.result}</div>*/}
                {/*</div>*/}

                {/*<div>{this.state.word}</div>*/}
                {/*<form onSubmit={this.onSubmit}>*/}
                {/*    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>*/}
                {/*    <button>입력</button>*/}
                {/*</form>*/}
                {/*<div>{this.state.result}</div>*/}
                <Users/>
            </BrowserRouter>
        )
    }
}

export default App;