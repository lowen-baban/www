document.getElementById('registrationForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Extract form values
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const address = document.getElementById('address').value;
  const dOb = document.getElementById('DateOfBirth').value;

  // Basic validation
  if (!username || !email || !password) {
    alert('Please fill in all fields');
    return;
  }

  // Structure the data
  const payload = {
  username,
  email,
  password,
  address,
  DateOfBirth: dOb
};


  console.log("Submitting:", payload);

  // Replace with your actual API endpoint
 const API_URL = 'register';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('Request failed');

    const result = await response.json();
    console.log('Success:', result);
    alert('Registration successful!');
  } catch (err) {
    console.error('Error:', err);
    alert('Something went wrong. Please try again.');
  }
});
