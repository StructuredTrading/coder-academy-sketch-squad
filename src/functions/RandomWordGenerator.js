export const fetchAndOrganizeData = async () => {
    const drawingPrompts = {};
    const url = 'https://www.wordgamedb.com/api/v1/words'; // Replace with your API endpoint

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        data.forEach(word => {
            const { category, word: wordText } = word;
            if (!drawingPrompts[category]) {
                drawingPrompts[category] = [];
            }
            drawingPrompts[category].push(wordText);
        });

        // Return the organized data
        return drawingPrompts;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const getRandomWordFromCategory = (drawingPrompts) => {
    const categories = Object.keys(drawingPrompts);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const words = drawingPrompts[randomCategory];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return { category: randomCategory, word: randomWord };
};