import React, { useState, useEffect } from 'react';

const wordsOfEncouragement = [
  "That looks great!", "Better luck next time!", "Amazing effort!", 
  "You nailed it!", "Fantastic!", "Good try!", "Keep it up!",
  "Well done!", "Superb!", "Nice attempt!", "You're getting better!",
  "Excellent!", "Way to go!", "Awesome!", "Impressive!",
  "Not bad!", "You're on fire!", "Great job!", "Wonderful!",
  "Spectacular!", "Bravo!", "Stellar!", "Remarkable!", "Outstanding!",
  "Fabulous!", "Marvelous!", "Extraordinary!", "Terrific!",
  "Brilliant!", "Phenomenal!"
];

const getRandomEncouragement = () => {
  const randomIndex = Math.floor(Math.random() * wordsOfEncouragement.length);
  return wordsOfEncouragement[randomIndex];
};

export default function AfterGameCountdown({ initialSeconds = 20, onCountdownEnd }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [encouragement, setEncouragement] = useState('');

  useEffect(() => {
    // Set the encouragement message only once when the component mounts
    setEncouragement(getRandomEncouragement());
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0 && onCountdownEnd) {
      onCountdownEnd();
    }
  }, [seconds, onCountdownEnd]);

  return (
    <div>
      <h1>Time's Up!</h1>
      <p>{encouragement}</p>
      <h2>Next game starts in: {seconds} seconds</h2>
    </div>
  );
}