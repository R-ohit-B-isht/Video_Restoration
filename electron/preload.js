var sudo = require('sudo-prompt');
const {resolve} = require('path');

// const path = require('path');
// require("electron-reload")(__dirname);
const esr=resolve("./model/Real-esrgan/realesrgan-ncnn-vulkan.exe")
const esrw=esr.split('\\').join('\\\\')
const { exec } = require("child_process");

const child_process = require('child_process');
var options = {
  name: 'Electron',
  icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
};
const {ipcRenderer,contextBridge}=require("electron")
const WINDOW_API={
    GetVersion:()=>ipcRenderer.invoke("get/version"),
    Realesrgan:(inp,out)=>exec(esrw+" -i "+inp+" -o "+out, options, function(error, stdout, stderr) { if (error) throw error; console.log('stdout: ' + stdout); }),
    // RealESRGAN:(inp,out)=>exec(path.join(__dirname,"/model/Real-esrgan/realesrgan-ncnn-vulkan.exe ")+" -i "+"C:/Users/rbtun/Videos/V/realesrgan-ncnn-vulkan-20220424-windows/input.jpg"+" -o "+"C:/Users/rbtun/Videos/V/realesrgan-ncnn-vulkan-20220424-windows/output.png", options,
    // options,
    // function(error, stdout, stderr) {
    //         if (error) throw error;
    //         console.log('stdout: ' + stdout);
    //       }),
//     ApplyTheme:()=>sudo.exec('echo hello', options,
//     function(error, stdout, stderr) {
//       if (error) throw error;
//       console.log('stdout: ' + stdout);
//     }
//   ),
//   W1:()=>exec('feh --bg-scale /home/rohit/Pictures/wp4438955-neon-retro-girl-wallpapers.jpg', options,
//   function(error, stdout, stderr) {
//     if (error) throw error;
//     console.log('stdout: ' + stdout);
//   }
// ),
// W2:()=>exec('feh --bg-scale /home/rohit/Pictures/bilal-o-ljXekphwr40-unsplash.jpg', options,
//   function(error, stdout, stderr) {
//     if (error) throw error;
//     console.log('stdout: ' + stdout);
//   }
// ),
}


contextBridge.exposeInMainWorld("api",WINDOW_API);