export const fetchWords = async () => {
    try {
        const response = await fetch('https://www.wordgamedb.com/api/v1/words');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export const getRandomPrompt = async () => {
    const wordsData = await fetchWords();
    const wordsByCategory = {};

    if (wordsData) {
        wordsData.forEach(word => {
            const { category, word: wordText } = word;
            if (!wordsByCategory[category]) {
                wordsByCategory[category] = [];
            }
            wordsByCategory[category].push(wordText);
        });

        // Get a random category
        const categories = Object.keys(wordsByCategory);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        
        // Get a random word from the selected category
        const words = wordsByCategory[randomCategory];
        const randomWord = words[Math.floor(Math.random() * words.length)];
        
        return { category: randomCategory, word: randomWord };
    }
    return { category: 'N/A', word: 'N/A' }; // Return default values if data is not available
};