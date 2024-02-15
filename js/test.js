import { runPythonScript } from './initialize.js';


function changeText(text){
    document.getElementById("charts").innerHTML = text;
};

window.addEventListener('keydown', e=>{
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") changeText("Thanks for pressing: "+e.key)
    if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") changeText("Thanks for pressing: "+e.key)
    if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") changeText("Thanks for pressing: "+e.key)
    if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") changeText("Thanks for pressing: "+e.key)
});

document.getElementById('button1').onclick = function() {
    clicks++;
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
 };

 fetch('http://localhost:3000/runPythonTest1')
 .then(response => response.text())
 .then(data => {
   // 'data' is the output of the Python script
   changeText(data)
   console.log(data);
 });