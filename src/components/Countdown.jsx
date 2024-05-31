import React, { useState, useEffect } from 'react';

export default function Countdown({ onCountdownComplete }) {
    const [count, setCount] = useState(3);
    const messages = ["Ready", "Set", "Sketch!"];

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (count === 0) {
            const timer = setTimeout(() => {
                onCountdownComplete();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [count, onCountdownComplete]);

    return (
        <div>
            <h1>{messages[3 - count]}</h1>
        </div>
    );
}
