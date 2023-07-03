// Get the required elements from the DOM
const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Add click event listener to the calculate button
calculateButton.addEventListener('click', calculateAge);

// Function to calculate the age
function calculateAge() {
  const birthdateValue = birthdateInput.value;
  
  // Check if the birthdate input is valid
  if (birthdateValue === "") {
    resultElement.textContent = "Please enter a valid birthdate.";
    return;
  }
  
  const birthdate = new Date(birthdateValue);
  const today = new Date();
  
  // Check if the birthdate is valid
  if (isNaN(birthdate.getTime())) {
    resultElement.textContent = "Please enter a valid birthdate.";
    return;
  }
  
  // Calculate the age
  const ageInMilliseconds = today - birthdate;
  const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  
  // Display the result
  resultElement.textContent = `You are ${ageInYears} years old!`;
}
