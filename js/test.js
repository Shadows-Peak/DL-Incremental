/*
function updateVisuals() {
  try {
      document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
      document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
      document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
      document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
      document.getElementById('AutomaticRizzerButton').innerHTML = "Buy Automatic Rizzer ("+AutomaticRizzers+"): Cost: <b>"+AutomaticRizzerCost+"</b>";
      document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
  } catch(error) {
      console.error(error);
  }
}
*/

function changeText(text){
    document.getElementById("charts").innerHTML = text;
};

window.addEventListener('keydown', e=>{
  if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") changeText("Thanks for pressing: "+e.key)
  if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") changeText("Thanks for pressing: "+e.key)
  if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") changeText("Thanks for pressing: "+e.key)
  if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") changeText("Thanks for pressing: "+e.key)
});

window.addEventListener('keyup', e=>{
  if ((e.key == " ") && (currentRoom == 1)) {
    simulateClick();
  }
});

function simulateClick() {
  var multiplier = 1;
  var RandomNumber = Math.floor(Math.random() * 100)+1;
  if (RandomNumber >= 100 - RandomValue5xUpgrades) {
    multiplier = 5;
  } else {
    multiplier = 1;
  }
  clicks += (multiplier)*(1 + CountryClubs)*(1 + RiceWashers);
  document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
  updateVisuals();
}

document.getElementById('button1').onclick = function() {
    simulateClick();
};

document.getElementById('RizzmaxButton').onclick = function() {
  RizzPointgain = Math.floor(Math.log(1+Math.floor(clicks/25000))/Math.log(1.15));
  if (clicks >= 25000) {
    clicks = 0;
    CountryClubs = 0;
    RiceWashers = 0;
    RandomValue5xUpgrades = 0;
    AutomaticRizzers = 0;
    RizzPoints += RizzPointgain;
    updateVisuals();
  }
};