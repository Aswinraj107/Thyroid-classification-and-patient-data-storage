const form = document.getElementById('patientForm');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const password = passwordInput.value;

  // **SIMULATION (Replace with actual Excel file creation):**
  localStorage.setItem('patientPassword', password); // Simulate storing password in Excel

  successMessage.textContent = 'Details stored successfully!';

  // Redirect to next page (optional)
  // window.location.href = 'next_page.html';
});
