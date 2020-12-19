const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 600,
        minWidth: 800,
        minHeight: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenu(null);

    win.loadFile('./src/index.html');

    win.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});
