var gameTick = 1;/*WHAT IS THIS!!!!!!!
askdjfhaksjdfhalksjdfhalksjdfhalksdjfhalksdjfha
dsfaksjdfhlaksjdfhalksjdfha;skdjfhalskdjfh
lkasdjfhlaksdjfhaslkdfjhasdkfj*/
var MoRCellChangeCount = 0;//what is this
var lastHighlight = [1,1];//what is this

function gameLoop() {
  if (gameActive == false) {return;}
  if (USERNAME == "" || PASSWORD == "" || USERNAME == null || PASSWORD == null) {
    menuLoad();
    return;
  }
  // Move Mine of Rizz Highlight
  if (MoRCellChangeCount == 0) {
    MoRCellChangeCount = gameTick;
    MoRCellHighlight = [Math.floor(5*Math.random())+1,Math.floor(5*Math.random())+1];
    document.getElementById('MoRCellR'+lastHighlight[0]+'C'+lastHighlight[1]).style.background = "rgb(240,240,240)";
    document.getElementById('MoRCellR'+MoRCellHighlight[0]+'C'+MoRCellHighlight[1]).style.background = "rgb(255, 255, 0)";
    lastHighlight = MoRCellHighlight;
  } else {
    MoRCellChangeCount--;
  }

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

    clicks += Math.floor((multiplier) * (multiplier2) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
  }

  // Increment time played
  timePlayed += 1 / gameTick;
}
