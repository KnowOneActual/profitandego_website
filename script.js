// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');

// --- State Variables ---
let hasBeenClicked = false;
let isAnimating = false;

// --- Compliments & Loading Messages ---
const loadingMessages = [
    "Synergizing compliments...",
    "Leveraging linguistic assets...",
    "Compiling ego-centric data...",
    "Optimizing validation matrix...",
    "Actualizing self-worth...",
    "Unpacking core competencies...",
    "Pivoting to praise..."
];

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

// --- The Main Function ---
validateButton.addEventListener('click', () => {
    if (isAnimating) {
        return; // Exit if animation is already running
    }
    isAnimating = true;

    // 1. Select messages
    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // 2. Fade out
    complimentText.style.opacity = '0';

    // 3. After fade out, show loading message and fade in
    setTimeout(() => {
        complimentText.textContent = randomLoadingMessage;
        complimentText.style.opacity = '1';
    }, 400); // This delay should match the CSS transition time

    // 4. After a pause, fade out the loading message
    setTimeout(() => {
        complimentText.style.opacity = '0';
    }, 2400); // 2-second pause (400ms + 2000ms)

    // 5. After fade out, show final compliment and fade in
    setTimeout(() => {
        complimentText.textContent = randomCompliment;
        complimentText.style.opacity = '1';
        isAnimating = false; // Animation is complete
    }, 2800); // Must be after the previous timeout (2400ms + 400ms)

    // 6. Update button text only on the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});