import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });
const isKioskMode = process.env.KIOSK_MODE === 'true';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    fullscreen: isKioskMode,
    kiosk: isKioskMode,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webviewTag: true,
      // Use a persistent partition so logins/cookies are saved across restarts
      partition: 'persist:library'
    }
  });

  // Override the User-Agent to prevent strict platforms (like Pearson) from blocking Electron
  const customUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  
  mainWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = customUserAgent;
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  mainWindow.loadFile('index.html');
};

app.whenReady().then(() => {
  ipcMain.handle('get-app-version', () => app.getVersion());
  
  createWindow();

  // Pressing Command+Q or Escape will quit the app (useful for development in kiosk mode)
  globalShortcut.register('CommandOrControl+Q', () => {
    app.quit();
  });
  globalShortcut.register('Escape', () => {
    app.quit();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
