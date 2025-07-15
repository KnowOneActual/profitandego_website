// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');
const complimentContainer = document.getElementById('complimentContainer');

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
    // 1. Select a random compliment
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];

    // 2. Animate the text out before changing it
    complimentText.classList.remove('compliment-animation');
    complimentText.style.opacity = '0';

    // 3. Wait for the fade-out, then update and fade-in
    setTimeout(() => {
        complimentText.textContent = randomCompliment;
        complimentText.classList.add('compliment-animation');
    }, 150); // A short delay to allow the opacity to reset

    // 4. Update button text after the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});