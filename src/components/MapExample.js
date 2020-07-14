import React, {Component} from 'react';

class MapExample extends Component {

    state = {
        names: ['snowman', 'ice', 'snow', 'wind'],
        name: ''
    }

    //입력한 값 가져오기
    inputChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    //버튼 동작 함수
    BtnClick = () => {
        this.setState({
            //입력한 값을 가져오고
            names: this.state.names.concat(this.state.name),
            //공백 상태로 만든다.
            name: ''
        })
    }

    handleRemove = (index) => {
        const {names} = this.state;
        this.setState({
            names: names.filter((item, i) => i !== index)
        })
    }

    render() {
        //함수
        const namelist = this.state.names.map((name, index) => (
            <li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>
        ));
        //return에서 다 처리함
        return (
            <div>
                {/*setState로 값을 보내준뒤에 */}
                <input onChange={this.inputChange} placeholder="enter your wore" value={this.state.name}/>
                {/*setState에 그 값을 배열에 넣어준다. */}
                <button onClick={this.BtnClick}>PUSH IT!!!!</button>
                <ul>{namelist}</ul>
            </div>
        )
    }
}

export default MapExample;