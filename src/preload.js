// const { ipcRenderer, contextBridge } = require("electron"); const { platform } = require("os"); 
// // can be accessed through window.app 
// contextBridge.exposeInMainWorld('app', { 
// platform: platform(), // create a property oj the app object for platform 
// } 
// ) 


const { ipcRenderer, contextBridge } = require("electron"); const { platform } = require("os"); 

contextBridge.exposeInMainWorld('myApp', { 
    sayHello: (arg) => ipcRenderer.invoke("say-hello", arg)});
