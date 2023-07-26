const { app, BrowserWindow,ipcMain } = require('electron')
const { login } = require('./api_handling/handleApi')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true, 
        contextIsolation: false,
      },
    })
  
    win.loadFile('./pages/login.html')
    win.webContents.openDevTools()

  }


  app.whenReady().then(() => {
    createWindow()
  })


  // Listen for the 'login-api' event from the renderer process

  ipcMain.on('login-api', async (event, data) => {
    const { email, password } = data;  
    try {
      await login(email, password);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  });