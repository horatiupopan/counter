import { useEffect, useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const currentValue = value;
    
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() =>{
                setValue(currentValue => currentValue + 0.1);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
    }

    const restart = () => {
        setValue(0);
    }

    const pause = () => {
        setIsRunning(false);
    }

    const stop = () => {
        pause();
        restart();
    }

    return (
        <>
            <h1>{ value.toFixed(2) }</h1>
            <button onClick={() => start()}>Start</button>
            <button onClick={() => pause()}>Pause</button>
            <button onClick={() => restart()}>Restart</button>
            <button onClick={() => stop()}>Stop</button>
        </>
    );
};

export default Counter;