// const electron = require("electron");
const electron = require("electron");

const app = electron.app;

let mainWindow;

function createWindow() {
   mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL('http://localhost:5173');

  
}

app.on('ready', createWindow);


