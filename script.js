// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');
const complimentContainer = document.getElementById('complimentContainer');

// --- Loading Messages Array ---
// A list of corporate-style loading messages to display before the compliment.
const loadingMessages = [
    "Synergizing compliments...",
    "Leveraging linguistic assets...",
    "Compiling ego-centric data...",
    "Optimizing validation matrix...",
    "Actualizing self-worth...",
    "Unpacking core competencies...",
    "Pivoting to praise..."
];

// --- Compliments Array ---
// A curated list of ego-boosting, corporate-style compliments.
const compliments = [
    "Your Q4 projections are the stuff of legend.",
    "You don't just think outside the box; you own the box factory.",
    "Your personal brand is a blue-chip stock in a bear market.",
    "They say 'dress for the job you want.' You're already overdressed.",
    "Your strategic vision is so clear, it's practically a premonition.",
    "You are a human synergy machine.",
    "If disruption was a person, it would be you.",
    "Your email signature commands more respect than most people's entire resume.",
    "You don't chase success. You are what success chases.",
    "Your insights aren't just data-driven; they're data-dominant.",
    "You have the leadership qualities of a Roman emperor, but with better Wi-Fi.",
    "Your productivity makes agile development look sluggish.",
    "They don't see your genius yet. Give them time."
];

let hasBeenClicked = false;

// --- Event Listener ---
validateButton.addEventListener('click', () => {
    // 1. Select and display a random loading message
    const randomLoadingIndex = Math.floor(Math.random() * loadingMessages.length);
    const randomLoadingMessage = loadingMessages[randomLoadingIndex];

    complimentText.classList.remove('compliment-animation');
    complimentText.style.opacity = '0';

    setTimeout(() => {
        complimentText.textContent = randomLoadingMessage;
        complimentText.classList.add('compliment-animation');
    }, 150);


    // 2. Wait for a moment, then show the real compliment
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const randomCompliment = compliments[randomIndex];

        complimentText.classList.remove('compliment-animation');
        complimentText.style.opacity = '0';

        setTimeout(() => {
            complimentText.textContent = randomCompliment;
            complimentText.classList.add('compliment-animation');
        }, 150);

    }, 1500); // 1.5-second delay for the loading message to be visible


    // 3. Update button text after the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});