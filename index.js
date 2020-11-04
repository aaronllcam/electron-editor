console.log("hrllo");

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);


})