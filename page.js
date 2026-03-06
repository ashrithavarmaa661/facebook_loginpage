function validateForm() {

  const form = document.getElementById("signupForm");

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const day = form.day.value;
  const month = form.month.value;
  const year = form.year.value;
  const gender = document.querySelector('input[name="gender"]:checked');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Name validation
  if (firstName === "" || lastName === "") {
    alert("Please enter your full name");
    return false;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  // DOB validation
  if (day === "Day" || month === "Month" || year === "Year") {
    alert("Please select your Date of Birth");
    return false;
  }

  // Gender validation
  if (!gender) {
    alert("Please select your gender");
    return false;
  }

  // Success message with Facebook logo
  alert("Login Successful! Welcome to Facebook 🎉");

  document.body.innerHTML = `
  <div style="text-align:center;margin-top:100px;font-family:Arial;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" width="120">
      <h1>Welcome to Facebook</h1>
      <p>Account created successfully!</p>
  </div>
  `;

  return false;
}