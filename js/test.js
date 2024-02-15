import { runPythonScript } from './initialize.js.js';

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

runPythonScript('../py/test1.py', [1,6])
 .then(data => {
   // 'data' is the result of the Python script
   let result = data;
   changeText(result);
   console.log(result);
 })
 .catch(error => {
   // Handle any errors
   console.error(error);
 });