// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');

// --- State Variables ---
let hasBeenClicked = false;
let isAnimating = false; // Flag to prevent rapid clicks from breaking the animation

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
    // 1. If an animation is already running, do nothing.
    if (isAnimating) {
        return;
    }
    isAnimating = true;

    // 2. Select a random loading message and compliment
    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // 3. Fade out the current text
    complimentText.style.opacity = '0';

    // 4. After a short delay (for the fade-out to finish), show the loading message
    setTimeout(() => {
        complimentText.textContent = randomLoadingMessage;
        complimentText.classList.add('compliment-animation');
        complimentText.style.opacity = '1';
    }, 300); // 0.3-second delay

    // 5. After the loading message has been visible for a bit, fade it out
    setTimeout(() => {
        complimentText.style.opacity = '0';
    }, 2000); // 2-second delay

    // 6. After the loading message fades out, show the final compliment
    setTimeout(() => {
        complimentText.textContent = randomCompliment;
        complimentText.style.opacity = '1';
        isAnimating = false; // The animation is complete, allow clicks again
    }, 2300); // This must be longer than the previous delay

    // 7. Update button text only on the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});