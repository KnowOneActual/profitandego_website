const validateButton = document.getElementById('validateButton');
const complimentText = document.getElementById('complimentText');

validateButton.addEventListener('click', () => {
  complimentText.textContent = 'This is a test.';
});