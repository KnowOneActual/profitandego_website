// --- DOM Elements ---
const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');

// --- A very simple test ---
validateButton.addEventListener('click', () => {
  // Directly change the text content
  complimentText.textContent = 'Test successful. The script is running.';

  // Directly make sure the text is visible
  complimentText.style.opacity = '1';
});