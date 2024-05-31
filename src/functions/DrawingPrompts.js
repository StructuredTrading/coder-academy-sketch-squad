const drawingPrompts = {
    Animals: ['Cat', 'Dog', 'Fox', 'Bear', 'Owl', 'Fish', 'Horse', 'Frog', 'Shark', 'Rabbit'],
    Nature: ['Tree', 'Mountain', 'River', 'Flower', 'Leaf', 'Cloud', 'Sun', 'Moon', 'Star', 'Rock'],
    Objects: ['Chair', 'Book', 'Clock', 'Lamp', 'Bottle', 'Phone', 'Hat', 'Car', 'Ball', 'Key'],
    Food: ['Apple', 'Cake', 'Pizza', 'Burger', 'Ice cream', 'Banana', 'Cookie', 'Carrot', 'Egg', 'Cheese'],
    Places: ['Beach', 'Park', 'City', 'Farm', 'School', 'Market', 'Castle', 'Road', 'Bridge', 'House'],
    People: ['Artist', 'Chef', 'Dancer', 'Singer', 'Runner', 'Doctor', 'Sailor', 'Pilot', 'Teacher', 'Farmer'],
    Fantasy: ['Dragon', 'Fairy', 'Wizard', 'Knight', 'Ghost', 'Vampire', 'Robot', 'Alien', 'Mermaid', 'Unicorn'],
    Actions: ['Jump', 'Run', 'Swim', 'Dance', 'Climb', 'Draw', 'Cook', 'Sing', 'Read', 'Sleep'],
    Emotions: ['Happy', 'Sad', 'Angry', 'Surprised', 'Scared', 'Excited', 'Confused', 'Proud', 'Nervous', 'Relaxed'],
    Miscellaneous: ['Heart', 'Star', 'Arrow', 'Flame', 'Wave', 'Spiral', 'Cube', 'Zigzag', 'Diamond', 'Crescent']
};

export default function getRandomPrompt() {
    // Get a random category
    const categories = Object.keys(drawingPrompts);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    // Get a random word from the selected category
    const words = drawingPrompts[randomCategory];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    return { category: randomCategory, word: randomWord };
}