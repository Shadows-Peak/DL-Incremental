function updateVisuals() {
  document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
}

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
    clicks += 1 + CountryClubs;
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
 };

document.getElementById('button2').onclick = function() {
  clicks = -1000000000000000000000;
  document.getElementById('button2').innerHTML = "You are beautiful and we should date even if you're a man";
};