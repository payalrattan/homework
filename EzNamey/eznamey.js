// Array with first words for startup names
const firstWords = ["Saga ", "Atlas", "Titan", "Atlantis", "Fidelity", "Arai", "Ball", "Smart", "Wipro", "Petty "];

// Array with second words for startup names
const secondWords = ["Innovations", "Ventures", "Alarm", "Sports", "Investment", "Helmet", "Cooperation", "Partners", "Technologies", "Enterprises "];

const firstRandomWords = Math.floor(Math.random() * 10);
const secondRandomWords = Math.floor(Math.random() * 10);

const startupName = firstWords[firstRandomWords] + " " + secondWords[firstRandomWords];

console.log(startupName);