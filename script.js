// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');
const complimentContainer = document.getElementById('complimentContainer');

// --- Loading Messages Array ---
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

// --- Helper function to fade text in and out ---
function updateAndAnimateText(newText) {
    // Fade out
    complimentText.style.opacity = '0';
    complimentText.classList.remove('compliment-animation');

    // Wait for fade out, then update text and fade in
    setTimeout(() => {
        complimentText.textContent = newText;
        complimentText.style.opacity = '1';
        complimentText.classList.add('compliment-animation');
    }, 200); // A brief delay for a smooth transition
}


// --- Event Listener ---
validateButton.addEventListener('click', () => {
    // 1. Select and display a random loading message
    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    updateAndAnimateText(randomLoadingMessage);


    // 2. After a delay, select and display the real compliment
    setTimeout(() => {
        const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
        updateAndAnimateText(randomCompliment);
    }, 1500); // 1.5-second delay to show the loading message


    // 3. Update button text after the first click
    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});