const {ipcRenderer,contextBridge}=require("electron")
const WINDOW_API={
    GetVersion:()=>ipcRenderer.invoke("get/version")
}
var sudo = require('sudo-prompt');
var options = {
  name: 'Electron',
  icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
};
sudo.exec('echo hello', options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
);
contextBridge.exposeInMainWorld("api",WINDOW_API);