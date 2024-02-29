var gameTick = 1;

// Game Variables that need constant updating
var RizzPointgain = Math.floor(Math.log(clicks/500000)/Math.log(1.05));

function gameLoop() {
  // Rizz Point Gain
  RizzPointgain = Math.floor(Math.log(1+(clicks/500000))/Math.log(1.05));

  // Automatic Rizzer
  var multiplier = 1;
  var RandomNumber = Math.floor(Math.random() * 100)+1;
  if (RandomNumber >= 100 - RandomAuto2xUpgrades) {
    multiplier = 2;
  } else {
    multiplier = 1;
  }
  clicks += (multiplier) * (1+Rizzmaxxes) * (AutomaticRizzers) * (1 + RiceWashers);
  updateVisuals();
}