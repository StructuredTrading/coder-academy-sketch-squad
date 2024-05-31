import React, { useState, useEffect } from 'react';
import { fetchAndOrganizeData, getRandomWordFromCategory } from '../functions/RandomWordGenerator';

const DrawingPrompt = ({ keyProp }) => { // Accept a keyProp to re-trigger fetching
    const [prompt, setPrompt] = useState({ category: '', word: '' });
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        let isMounted = true; // Track whether the component is mounted

        const fetchPrompt = async () => {
            setLoading(true); // Set loading to true before fetching
            const drawingPrompts = await fetchAndOrganizeData();
            if (isMounted && drawingPrompts) {
                const newPrompt = getRandomWordFromCategory(drawingPrompts);
                setPrompt(newPrompt);
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchPrompt();

        return () => {
            isMounted = false; // Cleanup to prevent state updates if unmounted
        };
    }, [keyProp]); // Depend on keyProp to refetch the prompt

    return (
        <div>
            {loading ? ( // Conditionally render based on loading state
                <div>
                    <h1>Generating random word...</h1>
                    <p>Category: </p>
                </div>
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