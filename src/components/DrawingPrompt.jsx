import React, { useState, useEffect } from 'react';
import { getRandomPrompt } from '../functions/RandomWordGenerator';

const DrawingPrompt = () => {
    const [prompt, setPrompt] = useState({ category: '', word: '' });
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        let isMounted = true; // Track whether the component is mounted

        const fetchPrompt = async () => {
            setLoading(true); // Set loading to true before fetching
            const newPrompt = await getRandomPrompt();
            if (isMounted) {
                setPrompt(newPrompt);
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchPrompt();

        return () => {
            isMounted = false; // Cleanup to prevent state updates if unmounted
        };
    }, []);

    console.log(prompt.word, prompt.category)

    return (
        <div>
            {loading ? ( // Conditionally render based on loading state
                <h1>Generating random word...</h1>
            ) : (
                <div>
                    <h1>Draw this word: {prompt.word}</h1>
                    <p>Category: {prompt.category}</p>
                </div>
            )}
        </div>
    );
};

export default DrawingPrompt;