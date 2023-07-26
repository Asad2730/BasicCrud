const { ipcRenderer } = require('electron');

// Function to send data to the main process
function sendData() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  ipcRenderer.send('login-api', { email, password });

}

// Call the sendData function when the "Login" button is clicked
document.getElementById('submit').addEventListener('click', sendData);
