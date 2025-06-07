document.addEventListener("DOMContentLoaded", () => {
  const loginDiv = document.getElementById("login");
  const dashboardDiv = document.getElementById("dashboard");

  // Simulate OTP login
  loginDiv.innerHTML = '<button onclick="simulateLogin()">Login with OTP</button>';

  window.simulateLogin = () => {
    loginDiv.style.display = 'none';
    dashboardDiv.style.display = 'block';
    dashboardDiv.innerHTML = '<p>Welcome! Trade dashboard loading...</p>';
  };
});
