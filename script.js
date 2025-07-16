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

    // --- Select random messages ---
    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // --- Animation Sequence ---

    // 1. Fade out the initial text
    complimentText.classList.remove('fade-in');
    complimentText.classList.add('fade-out');

    // 2. After fade-out, change text to loading message and fade in
    setTimeout(() => {
        complimentText.textContent = randomLoadingMessage;
        complimentText.classList.remove('fade-out');
        complimentText.classList.add('fade-in');

        // 3. After loading message is visible, fade it out
        setTimeout(() => {
            complimentText.classList.remove('fade-in');
            complimentText.classList.add('fade-out');

            // 4. After fade-out, change text to final compliment and fade in
            setTimeout(() => {
                complimentText.textContent = randomCompliment;
                complimentText.classList.remove('fade-out');
                complimentText.classList.add('fade-in');
                isAnimating = false; // Animation is complete
            }, 500); // Wait for fade out

        }, 2000); // How long the loading message stays visible

    }, 500); // Wait for initial fade out

    // --- Update button text ---
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});