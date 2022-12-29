var sudo = require('sudo-prompt');
const { exec } = require("child_process");
var options = {
  name: 'Electron',
  icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
};
const {ipcRenderer,contextBridge}=require("electron")
const WINDOW_API={
    GetVersion:()=>ipcRenderer.invoke("get/version"),
    ApplyTheme:()=>sudo.exec('echo hello', options,
    function(error, stdout, stderr) {
      if (error) throw error;
      console.log('stdout: ' + stdout);
    }
  ),
  W1:()=>sudo.exec('feh --bg-scale /home/rohit/Pictures/wp4438955-neon-retro-girl-wallpapers.jpg', options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
),
W2:()=>exec('feh --bg-scale /home/rohit/Pictures/bilal-o-ljXekphwr40-unsplash.jpg', options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
),
}


contextBridge.exposeInMainWorld("api",WINDOW_API);