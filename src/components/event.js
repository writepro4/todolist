import React, {Component} from "react";

class EventPractice extends Component {

    state = {
        message:''
    }
    render() {
        return (
            <div>
                <h1>event 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="entering anything"
                    value={this.state.message}
                    onChange={                        //요소가 바뀌게 된다면
                        (e) => {
                            this.setState({                    //state관리를 하는데(state에 값 추가), 이 때
                                message : e.target.value,        //message는 이벤트가 일어난 value값이다.
                            })
                            console.log(this.state.message)        //console창에 state에 들어간 messager값을 띄우도록 한다. (잘 들어갔는지 확인하기 위해서)
                        }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;