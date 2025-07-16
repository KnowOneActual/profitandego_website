// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');

// --- State Variables ---
let hasBeenClicked = false;
let isAnimating = false;

// --- Compliments Array ---
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

    // 1. Select a random compliment
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    // 2. Fade out the current text
    complimentText.classList.remove('fade-in');
    complimentText.classList.add('fade-out');

    // 3. After the fade-out is complete, change the text and fade it back in
    setTimeout(() => {
        complimentText.textContent = randomCompliment;
        complimentText.classList.remove('fade-out');
        complimentText.classList.add('fade-in');
        isAnimating = false; // Animation is complete
    }, 400); // This delay must match your CSS transition time

    // 4. Update button text only on the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});