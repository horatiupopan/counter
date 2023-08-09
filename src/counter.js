import { useEffect, useState, useRef } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    let currentValue = value;
    const intervalRef = useRef(null);

    const start = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() =>{
            setValue(currentValue => currentValue + 0.1);
        }, 100);
    }

    const restart = () => {
        setValue(0);
    }

    const pause = () => {
        clearInterval(intervalRef.current);
    }

    const stop = () => {
        pause();
        restart();
    }

    return (
        <>
            <h1>{ value.toFixed(1) }</h1>
            <button onClick={() => start()}>Start</button>
            <button onClick={() => pause()}>Pause</button>
            <button onClick={() => restart()}>Restart</button>
            <button onClick={() => stop()}>Stop</button>
        </>
    );
};

export default Counter;