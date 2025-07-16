const validateButton = document.getElementById("validateButton"),
    complimentText = document.getElementById("complimentText"),
    tosCheckbox = document.getElementById("tosCheckbox"),
    tosLink = document.getElementById("tosLink"),
    tosModal = document.getElementById("tosModal"),
    tosOverlay = document.getElementById("tosOverlay"),
    closeModalButton = document.getElementById("closeModalButton");
let hasBeenClicked = !1,
    isAnimating = !1;
const loadingMessages = ["Synergizing compliments...", "Leveraging linguistic assets...", "Compiling ego-centric data...", "Optimizing validation matrix...", "Actualizing self-worth...", "Unpacking core competencies...", "Pivoting to praise..."],
    compliments = [
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
        "They don't see your genius yet. Give them time.",
        "You're not just moving the needle, you're redesigning the entire dashboard.",
        "Your ability to pivot is so seamless, it's practically ballet.",
        "You have a Ph.D. in 'Getting Things Done.'",
        "Your workflow is so optimized, it's a work of art.",
        "You don't just have a 'can-do' attitude, you have a 'has-already-done-it-better' attitude.",
        "You're the human equivalent of a hockey stick growth chart.",
        "You're not a thought leader, you're a thought-emperor.",
    ];

function openModal() {
    tosModal.classList.remove("hidden")
}

function closeModal() {
    tosModal.classList.add("hidden")
}

function switchText(e, t) {
    complimentText.classList.remove("is-visible"), setTimeout((() => {
        complimentText.textContent = e, complimentText.classList.add("is-visible"), t && setTimeout(t, 400)
    }), 450)
}
tosLink.addEventListener("click", (e => {
    e.preventDefault(), openModal()
})), closeModalButton.addEventListener("click", closeModal), tosOverlay.addEventListener("click", closeModal), tosCheckbox.addEventListener("change", (() => {
    tosCheckbox.checked ? (validateButton.disabled = !1, validateButton.classList.remove("opacity-50", "cursor-not-allowed")) : (validateButton.disabled = !0, validateButton.classList.add("opacity-50", "cursor-not-allowed"))
})), validateButton.addEventListener("click", (() => {
    if (isAnimating) return;
    isAnimating = !0;
    const e = loadingMessages[Math.floor(Math.random() * loadingMessages.length)],
        t = compliments[Math.floor(Math.random() * compliments.length)];
    switchText(e, (() => {
        setTimeout((() => {
            switchText(t, (() => {
                isAnimating = !1
            }))
        }), 1800)
    })), hasBeenClicked || (validateButton.textContent = "Validate Me Again", hasBeenClicked = !0)
}));