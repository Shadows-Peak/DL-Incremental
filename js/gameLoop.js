var gameTick = 1;

function gameLoop() {
  // Automatic Rizzer
  var mult3 = Boolean(inLooksmaxxingChallenge) ? 0 : 1;

  var multiplier = 1;
  var RandomNumber = Math.floor(Math.random() * 100);
  if (RandomNumber >= 100 - RandomAuto2xUpgrades) {
    multiplier = 2+mult3*LooksmaxxingChallengesCompleted[2];
  } else {
    multiplier = 1;
  }
  clicks += Math.floor((multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) * (1+mult3*(Number(LooksmaxxingChallengesCompleted[0])/10)) );
  updateVisuals();
}