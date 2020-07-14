import React, {Component} from "react";

class EventPractice extends Component {

    state = {
        message: '',
        username: ''
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () =>{
        alert(this.state.username + " :" + this.state.message)
        this.setState({
            message: "",
            username: ''
        })

    }

    handlekeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
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
                    onChange={this.handleChange}
                    onKeyPress={this.handlekeyPress}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="user name"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handlekeyPress}
                />


                <button
                    onClick={this.handleClick}>확인
                </button>

            </div>
        );
    }
}

export default EventPractice;