// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');
const tosCheckbox = document.getElementById('tosCheckbox');
const tosLink = document.getElementById('tosLink');
const tosModal = document.getElementById('tosModal');
const tosOverlay = document.getElementById('tosOverlay');
const closeModalButton = document.getElementById('closeModalButton');

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

// --- Modal Functions ---
function openModal() {
    tosModal.classList.remove('hidden');
}

function closeModal() {
    tosModal.classList.add('hidden');
}

tosLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the link from trying to navigate
    openModal();
});

closeModalButton.addEventListener('click', closeModal);
tosOverlay.addEventListener('click', closeModal);

// --- Checkbox Logic ---
tosCheckbox.addEventListener('change', () => {
    if (tosCheckbox.checked) {
        validateButton.disabled = false;
        validateButton.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        validateButton.disabled = true;
        validateButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
});


// --- Compliment Animation Functions ---
function switchText(newText, callback) {
    complimentText.classList.remove('is-visible');
    setTimeout(() => {
        complimentText.textContent = newText;
        complimentText.classList.add('is-visible');
        if (callback) {
            setTimeout(callback, 400);
        }
    }, 450);
}

validateButton.addEventListener('click', () => {
    if (isAnimating) {
        return;
    }
    isAnimating = true;

    const randomLoadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    switchText(randomLoadingMessage, () => {
        setTimeout(() => {
            switchText(randomCompliment, () => {
                isAnimating = false;
            });
        }, 1800);
    });

    if (!hasBeenClicked) {
        validateButton.textContent = 'Validate Me Again';
        hasBeenClicked = true;
    }
});