import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>hello ,world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


function tick() {
    ReactDOM.render(<Clock/>, document.getElementById('root'))
}

setInterval(tick, 1000)
