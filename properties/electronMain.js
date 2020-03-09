const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
const electronDevTools = {electronDevTools};

let mainWindow;

function createWindow() {
  // see https://electronjs.org/docs/api/browser-window for all options
  mainWindow = new BrowserWindow({
    width: (electronDevTools) ? 768+512 : 768,
    height: 1004,
    title: '{title}',
    webPreferences: {nodeIntegration: true},
  })

  mainWindow.loadFile('index.html');

  if (electronDevTools) mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.on('activate', function () {
  if (mainWindow === null) createWindow();
})