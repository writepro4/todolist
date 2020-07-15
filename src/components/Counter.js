import React, {Component} from "react";

class Counter extends Component {
    state = {
        number: 1
    }

    incrementItem = () => {
        this.setState({
            number: this.state.number + 1
        });
    }


    DecrementItem = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {

        return (
            <>
                <div>{this.state.number}</div>
                <button onClick={this.incrementItem}>increment</button>
                <button onClick={this.DecrementItem}>DecrementItem</button>
            </>
        )
    }


}