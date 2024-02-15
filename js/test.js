function changeText(text){
    document.getElementById("charts").innerHTML = text;
};

window.addEventListener('keydown', e=>{
  if ((e.key == "w" || e.key == "W" || e.key == "ArrowUp") || (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") || (e.key == "s" || e.key == "S" || e.key == "ArrowDown") || (e.key == "d" || e.key == "D" || e.key == "ArrowRight")) (clicks += 0.1)
  if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") changeText("Thanks for pressing: "+e.key)
  if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") changeText("Thanks for pressing: "+e.key)
  if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") changeText("Thanks for pressing: "+e.key)
  if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") changeText("Thanks for pressing: "+e.key)
});

document.getElementById('button1').onclick = function() {
    clicks++;
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
    if (document.getElementById('counter').style.display == "none") {
      document.getElementById('counter').style.display = "initial";
    } else {
      document.getElementById('counter').style.display = "none";
    }
 };