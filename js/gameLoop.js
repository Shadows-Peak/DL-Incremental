var gameTick = 1;

function gameLoop() {
  // Automatic Rizzer
  if (inLooksmaxxingChallenge != 2) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2+LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier = 1;
    }
    
    clicks += Math.floor((multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
  } else if (inLooksmaxxingChallenge == 2) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2+LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier = 1;
    }

    var multiplier2 = 1;
    RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomValue5xUpgrades) {
      multiplier2 = 5+LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier2 = 1;
    }

    clicks += Math.floor((multiplier) * (multiplier2) * (AutomaticRizzers) * (1+ CountryClubs) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
  }
}