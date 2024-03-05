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
  var RandomNumber = Math.floor(Math.random() * 100);
  if (RandomNumber >= 100 - RandomValue5xUpgrades) {
    multiplier = 5;
  } else {
    multiplier = 1;
  }
  clicks += Math.floor((multiplier)*(1 + CountryClubs)*(1 + RiceWashers)*(1+RizzmaxClickWorth/100));
  document.getElementById('counter').innerHTML = "You have: <b>"+abbrev(clicks)+"</b> Dilyan Points";
  updateVisuals();
}

document.getElementById('button1').onclick = function() {
    simulateClick();
};

document.getElementById('RizzmaxButton').onclick = function() {
  if (clicks >= 25000) {
    RizzPoints += RizzPointgain();
    Rizzmaxxes++;
    clicks = 0;
    CountryClubs = 0;
    RiceWashers = 0;
    RandomValue5xUpgrades = 0;
    RandomAuto2xUpgrades = 0;
    AutomaticRizzers = 0;
    updateVisuals();
  }
};

var timeout;
var GiveOfflineTime = 0;

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    try {
      clearTimeout(timeout);
    } catch(error) {
      console.error(error); 
    }
    if (GiveOfflineTime == true) {
      offlineProgress();
    }
    GiveOfflineTime = false;
  } else {
    lastOfflineTime = 0;
    timeout = setTimeout(function () {
      GiveOfflineTime = true;
      lastOfflineTime = Date.now();
    }, 10*1000);
  }
});