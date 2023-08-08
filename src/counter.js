import { useEffect, useState, useRef } from "react";
import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            interval: null
        }
    }

    start() {
        const myinterval = setInterval(() => {
            this.setState(currentState => ({value: currentState.value + 0.1}));
        }, 100);
        this.setState({interval: myinterval});
    }

    restart() {
        this.setState({ value: 0 });
    }

    pause() {
        clearInterval(this.state.interval);
    }

    stop() {
        this.pause();
        this.restart();
    }

    render() {
        const {value, interval} = this.state;
        return (
            <>
                <h1>{ Number(value).toFixed(1) }</h1>
                <button onClick={() => this.start()}>Start</button>
                <button onClick={() => this.pause()}>Pause</button>
                <button onClick={() => this.restart()}>Restart</button>
                <button onClick={() => this.stop()}>Stop</button>
            </>
        );
    }
}

export default Counter;