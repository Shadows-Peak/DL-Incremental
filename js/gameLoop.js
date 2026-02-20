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
  // EJECT
  if (inLooksmaxxingChallenge == 2 && LooksmaxxingChallengesCompleted[1] >= 40) {
    removeAllBonuses();
    clicks = 0;
    CountryClubs = 0;
    RiceWashers = 0;
    Cars = 0;
    RandomValue5xUpgrades = 0;
    RandomAuto2xUpgrades = 0;
    AutomaticRizzers = 0;
    blingedDilyanChance = 0;
    clicksIn6 = 0;
    runsIn6 = 0;
    sendToast("Ejected you from your challenge due to an update!");
    inLooksmaxxingChallenge = 0;
    var currentMore = LooksmaxxingChallengesCompleted[1] - 40;
    LooksmaxxingChallengesCompleted[1] = 40;
    if (currentMore > 0) {
      RizziteNRizzium[2] += currentMore*30;
      sendToast("You have been compensated with: "+abbrevLiquid(currentMore*30)+" Rizzium");
    }
    setRoom(1);
    updateBackgrounds();
    updateVisuals();
  } else if (LooksmaxxingChallengesCompleted[1] > 40) {
    var currentMore = LooksmaxxingChallengesCompleted[1] - 40;
    LooksmaxxingChallengesCompleted[1] = 40;
    sendToast("Forcefully set your \"Edging Maestro\" Completions to 40 due to an update.");
    if (currentMore > 0) {
      RizziteNRizzium[2] += currentMore*30;
      sendToast("You have been compensated with: "+abbrevLiquid(currentMore*30)+" Rizzium");
    }
    updateBackgrounds();
    updateVisuals();
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

  if (smeltingTime > 0) {
    smeltingTime -= 1 / gameTick;
    if (smeltingTime <= 0) {
      smeltingTime = 0;
      const numToIncreaseBy = 15 + Math.floor(10*Math.random());
      RizziteNRizzium[2] += numToIncreaseBy;
      sendToast("Rizzalurgy: <b>+"+abbrevLiquid(numToIncreaseBy)+" Rizzium</b>");
      hasSmelted = true;
      updateVisuals();
    }
  }

  // Automatic Rizzer  
  if (inLooksmaxxingChallenge != 2 && inLooksmaxxingChallenge != 6) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2+LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier = 1;
    }
    
    clicks += Math.floor((1+(countUnlockedAchievements()/100)) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
  } else if (inLooksmaxxingChallenge == 2 && inLooksmaxxingChallenge != 6) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2;
    } else {
      multiplier = 1;
    }

    var multiplier2 = 1;
    RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomValue5xUpgrades) {
      multiplier2 = 5;
    } else {
      multiplier2 = 1;
    }

    clicks += Math.floor((1+(countUnlockedAchievements()/100)) * (multiplier) * (multiplier2) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
  } else if (inLooksmaxxingChallenge != 2 && inLooksmaxxingChallenge == 6 && runsIn6 > 0) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2;
    }
    
    clicks += Math.floor((1+(countUnlockedAchievements()/100)) * (multiplier) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    updateVisuals();
    runsIn6--;
  }

  if (!savingInterval) {
    savingInterval = setInterval(periodicSave, autosaveInterval * 1000);
  }

  // Green Dilyans
  var RandomNumber = Math.floor(Math.random() * 300);
  if (RandomNumber >= 300 - 1 - 3*blingedDilyanChance && inLooksmaxxingChallenge == 0) { // 1 in a 300
    spawnBonusCircle();
  }

  // Achievemnts
  checkAchievements();

  // Increment time played
  timePlayed += 1 / gameTick;
}



function spawnBonusCircle(lifetime = 4000) {
  const size = 120;
  const toolbarHeight = 60;

  const maxX = window.innerWidth - size;
  const maxY = window.innerHeight - size;

  const randomX = Math.random() * maxX;
  const randomY = toolbarHeight + Math.random() * (maxY - toolbarHeight);

  const circle = document.createElement("div");
  circle.classList.add("bonus-circle", "themed1");
  circle.style.left = randomX + "px";
  circle.style.top = randomY + "px";

  const overlay = document.createElement("div");
  overlay.classList.add("bonus-overlay");
  overlay.style.backgroundImage = "url('images/bandsDilyan.png')";
  circle.appendChild(overlay);

  var themeMap = getTheme(chosenBackground);
  Object.entries(themeMap).forEach(([className, color]) => {
      circle.style.background = color;
  });


  document.getElementById('room1Stuff').appendChild(circle);

  // Trigger fade-in
  requestAnimationFrame(() => {
    if (buttonPictureToggle == 1) {
      circle.firstChild.classList.remove("hidden");
    } else {
      circle.firstChild.classList.add("hidden");
    }
    circle.classList.add("show");
  });

  let expired = false;

  // Expire timer
  const expireTimer = setTimeout(() => {
      expired = true;
      circle.classList.remove("show");
      circle.classList.add("expire");

      setTimeout(() => circle.remove(), 900);
  }, lifetime);

  // Click handler
  circle.addEventListener("click", (e) => {

      if (expired) return;

      clearTimeout(expireTimer);

      circle.classList.remove("show");
      circle.classList.add("clicked");

      // reward logic here
      clicksGained = simulateClick("BONUS",6+Math.random()*7); // 6-13x multiplier i believe
      blingedDilyansObtained++;
      spawnFloatingText("", "+"+abbrev(clicksGained),1,[e.clientX,e.clientY])

      setTimeout(() => circle.remove(), 150);
  });
}