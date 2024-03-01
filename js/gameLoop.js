var gameTick = 1;

function gameLoop() {
  // Automatic Rizzer
  var multiplier = 1;
  var RandomNumber = Math.floor(Math.random() * 100)+1;
  if (RandomNumber >= 100 - RandomAuto2xUpgrades) {
    multiplier = 2;
  } else {
    multiplier = 1;
  }
  clicks += (multiplier) * (AutomaticRizzers) * (1 + RiceWashers);
  updateVisuals();
}