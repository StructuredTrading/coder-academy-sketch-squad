import React, { useState, useEffect } from 'react';
import { playClockCountdownSound } from '../utils/playSound';

export default function Timer({ initialSeconds = 30, onTimeUp }) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        setSeconds(initialSeconds);
    }, [initialSeconds]);

    useEffect(() => {
        if (seconds == 15) {
            playClockCountdownSound();
        }
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (seconds === 0) {
            if (onTimeUp) {
                onTimeUp();
            }
        }
    }, [seconds, onTimeUp]);

    return (
        <div>
            <h1>Time Left: {seconds} seconds</h1>
        </div>
    );
}