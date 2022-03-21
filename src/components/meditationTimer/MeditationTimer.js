import React, { useState, useRef, useEffect } from "react";
import './meditationTimer.css';


const MeditationTimer = () => {

    const [timer, setTimer] = useState('Select a time to disconnect... To reconnect...');

    // *******************************************************************************
    // const [startTimer, setStartTimer] = useState();


    // function timeInput(time) {
    //     var hours = Math.floor(time / 3600);
    //     var minutes = Math.floor((time - (hours * 3600)) / 60);
    //     var seconds = time - (hours * 3600) - (minutes * 60);

    //     if (hours < 10) { hours = "0" + hours; }
    //     if (minutes < 10) { minutes = "0" + minutes; }
    //     if (seconds < 10) { seconds = "0" + seconds; }
    //     setTimer(hours + ':' + minutes + ':' + seconds);
    // }


    // *******************************************************************************
    // const [counter, setCounter] = useState(600);
    // const [isActive, setIsActive] = useState(false);
    // const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);


    let timeLeft = {};



    // const handleStart = (time) => {
    //     setIsActive(false);
    //     setIsPaused(false);

    //     countRef.current = setInterval(() => {
    //         setTimer((timer) => + 1);
    //         console.log('hi')
    //     }, 1000)

    // }

    const handleStart = (time) => {
        // setIsActive(false);
        // setIsPaused(false);

        countRef.current = setInterval(() => {
            setTimer((timer) => + 1);
            console.log('hi')
        }, 100)

    }


    const handlePause = () => {

    }


    const handleResume = () => {

    }


    const handleReset = () => {

    }

    return (
        <div>
            <p>{timer}</p>

            <p>minutes:</p>
            <div className="buttons">
                <button onClick={() => setTimer(300)}>5</button>
                <button onClick={() => setTimer(600)}>10</button>
                <button onClick={() => setTimer(900)}>15</button>
                <button onClick={() => setTimer(1200)}>20</button>
            </div>
            <p>controls:</p>
            <div className="buttons">
                <button onClick={handleStart}>Start</button>
                <button>Pause</button>
                <button>Resume</button>
                <button>Reset</button>
            </div>
        </div >
    );

};


export default MeditationTimer;