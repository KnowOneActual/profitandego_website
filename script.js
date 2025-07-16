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

// This function handles the fade-out, text change, and fade-in
function switchText(newText) {
    // Start by ensuring the text is faded out
    complimentText.classList.remove('is-visible');

    // Wait for the fade-out to complete
    setTimeout(() => {
        // Change the content while it's invisible
        complimentText.textContent = newText;
        // Add the class to trigger the fade-in
        complimentText.classList.add('is-visible');
    }, 450); // Delay must be slightly longer than the CSS transition
}

// --- The Main Event Listener ---
validateButton.addEventListener('click', () => {
    if (isAnimating) {
        return;
    }
    isAnimating = true;

    // Select random messages
    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // 1. Show the loading message first
    switchText(randomLoadingMessage);

    // 2. After a delay, show the final compliment
    setTimeout(() => {
        switchText(randomCompliment);
        // Allow the button to be clicked again
        isAnimating = false;
    }, 2500); // How long before the final compliment appears

    // Update button text on the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});