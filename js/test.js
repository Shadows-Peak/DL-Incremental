function updateVisuals() {
  try {
      document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
      document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
      document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
      document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
  } catch(error) {
      console.error(error);
  }
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
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 10)+1;
    if (RandomNumber >= 100 - RandomValue5xUpgrades) {
      multiplier = 5;
    } else {
      multiplier = 1;
    }
    clicks += (multiplier)*(1 + CountryClubs)*(1 + RiceWashers);
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
 };

document.getElementById('button2').onclick = function() {
  clicks = -1000000000000000000000;
  document.getElementById('button2').innerHTML = "You are beautiful and we should date even if you're a man";
};