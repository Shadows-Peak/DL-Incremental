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

window.addEventListener('keyup', e=>{
  if ((e.key == " ") && (currentRoom == 1 || currentRoom == 2 || currentRoom == 3)) {
    simulateClick();
  }
});

function setClickProcesses1() {
  document.getElementById('button1').onclick = function() {
      simulateClick();
  };

  document.getElementById('RizzmaxButton').onclick = function() {
    if (clicks >= 25000) {
      if (inLooksmaxxingChallenge > 0) {
        if (RizzPointgain()+1 < LooksmaxCosts(inLooksmaxxingChallenge)) {
          alert("You need to be able to gain least "+LooksmaxCosts(inLooksmaxxingChallenge)+" Rizz Points to end this challenge.");
          return;
        } else {
          LooksmaxxingChallengesCompleted[inLooksmaxxingChallenge-1] += 1;
          RizzPoints += RizzPointgain() + 1;
          const ranChance = Math.floor(Math.random() * 100);
          if (ranChance >= 100 - 5*(1-Boolean(inLooksmaxxingChallenge)) && rizzifactsObtained[0] >= 3) {
            RizzPoints += RizzPointgain() + 1;
            sendToast("Rizzmax: <b>+"+abbrev(2*RizzPointgain() + 2)+" Rizz Points</b>");
            if (2*RizzPointgain() + 2 >= 10) {
              forceAchieve(1607);
            }
          } else {
            sendToast("Rizzmax: <b>+"+abbrev(RizzPointgain() + 1)+" Rizz Points</b>");
            if (RizzPointgain() + 1 >= 10) {
              forceAchieve(1607);
            }
          }
          Rizzmaxxes++;
          clicks = 0;
          CountryClubs = 0;
          RiceWashers = 0;
          Cars = 0;
          RandomValue5xUpgrades = 0;
          RandomAuto2xUpgrades = 0;
          AutomaticRizzers = 0;
          clicksIn6 = 0;
          runsIn6 = 0;
          sendToast("Completion: <b>"+['Bye Bye!','Edging Maestro','Stone-Faced Mogging','Rags to Riches','Ad Hominem','Gods Plan'][inLooksmaxxingChallenge-1]+"</b> Challenge!");
          inLooksmaxxingChallenge = 0;
          setRoom(1);
          updateBackgrounds();
          updateVisuals();
          return;
        }
      }
      RizzPoints += RizzPointgain() + 1;
      const ranChance = Math.floor(Math.random() * 100);
      if (ranChance >= 100 - 5*(1-Boolean(inLooksmaxxingChallenge)) && rizzifactsObtained[0] >= 3) {
        RizzPoints += RizzPointgain() + 1;
        sendToast("Rizzmax: <b>+"+abbrev(2*RizzPointgain() + 2)+" Rizz Points</b>");
        if (2*RizzPointgain() + 2 >= 10) {
          forceAchieve(1607);
        }
      } else {
        sendToast("Rizzmax: <b>+"+abbrev(RizzPointgain() + 1)+" Rizz Points</b>");
        if (RizzPointgain() + 1 >= 10) {
          forceAchieve(1607);
        }
      }
      Rizzmaxxes++;
      clicks = 0;
      CountryClubs = 0;
      RiceWashers = 0;
      Cars = 0;
      RandomValue5xUpgrades = 0;
      RandomAuto2xUpgrades = 0;
      AutomaticRizzers = 0;
      updateVisuals();
    }
  };
} 

function simulateClick() {
  if (inLooksmaxxingChallenge != 2) {
    var mult3 = (Boolean(inLooksmaxxingChallenge) ? 0 : 1);

    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomValue5xUpgrades-mult3*5*RizzmaxExtraChance) {
      multiplier = 5+mult3*LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier = 1;
    }
    var mult2 = 0;
    if (inLooksmaxxingChallenge == 4) {
      mult2 = 1;
    } else {
      mult2 = (Boolean(inLooksmaxxingChallenge) ? 0 : 1);
    }

    if (inLooksmaxxingChallenge != 6) {
      clicks += Math.floor((1+(countUnlockedAchievements()/100))*(multiplier)*(1+(mult2*RizzmaxClickWorth*5)/100)*(1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)*(1+mult3*(Number(LooksmaxxingChallengesCompleted[0])/10))*(1 + Math.ceil(((1+mult3*Number(LooksmaxxingChallengesCompleted[3]))*CountryClubs)**(1+Cars/10))*(1 + RiceWashers)));
    } else if (inLooksmaxxingChallenge == 6) {
      var nerfMult = ( 0.8 + ( Math.log(clicksIn6+2) / ( Math.log(2) * ( 1 + ( clicksIn6 + 2 )**2 ) ) ) ) * ( ( 1.1 ) ** ( -1*clicksIn6 ) )
      clicks += Math.round(nerfMult*Math.floor((1+(countUnlockedAchievements()/100))*(multiplier)*(1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)*(1 + Math.ceil((CountryClubs)**(1+Cars/10))*(1 + RiceWashers))));
      clicksIn6++;
    }
    
    document.getElementById('counter').innerHTML = "You have: <b>"+abbrev(clicks)+"</b> Dilyan Points";
    updateVisuals();
  }
}


var GiveOfflineTime = 0;

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "hidden") {
    lastOfflineTime = Date.now();
  }

  if (document.visibilityState == "visible") {
    if (lastOfflineTime == 0) {
      return;
    }

    offlineProgress();

    lastOfflineTime = 0;
  }
});

window.addEventListener("pagehide", () => {
    lastOfflineTime = Date.now();
});

window.addEventListener("visibilitychange", () => {
    lastOfflineTime = Date.now();
});

// Not sure about this one.
window.addEventListener("load", () => {
    if (lastOfflineTime != 0 && gameActive) {
        offlineProgress();
        lastOfflineTime = 0;
    }
});
