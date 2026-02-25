var gameTick = 1;/*WHAT IS THIS!!!!!!!
askdjfhaksjdfhalksjdfhalksjdfhalksdjfhalksdjfha
dsfaksjdfhlaksjdfhalksjdfha;skdjfhalskdjfh
lkasdjfhlaksdjfhaslkdfjhasdkfj*/
var MoRCellChangeCount = 0;//what is this
var lastHighlight = [1,1];//what is this

var removeStep = false;

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
    proudBlings = 0;
    blingKings = 0;
    exposureTherapys = 0;
    prolongedPresences = 0;
    dilyansTruths = 0;
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

  clicksGaining = 0;
  // Automatic Rizzer  
  if (inLooksmaxxingChallenge != 2 && inLooksmaxxingChallenge != 6) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2+LooksmaxxingChallengesCompleted[2];
    } else {
      multiplier = 1;
    }

    var rushMult = 1;
    if (rushCounter > 0) {
      rushMult = 5+0.5*dilyansTruths;
    }

    clicksGaining = Math.floor((1+(countUnlockedAchievements()/100))*(rushMult)*(multiplier)*(AutomaticRizzers)*(1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)*(1+(Number(LooksmaxxingChallengesCompleted[0])/10))*(1 + Math.ceil(((1+Number(LooksmaxxingChallengesCompleted[3]))* (CountryClubs*0.10 >= 1 ? Math.floor(CountryClubs * 0.10) : 1) )**(1+Cars/10))*(1 + RiceWashers)));
    clicks += clicksGaining;

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

    clicksGaining = Math.floor((1+(countUnlockedAchievements()/100)) * (multiplier) * (multiplier2) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100) );
    clicks += clicksGaining;

    updateVisuals();
  } else if (inLooksmaxxingChallenge != 2 && inLooksmaxxingChallenge == 6 && runsIn6 > 0) {
    var multiplier = 1;
    var RandomNumber = Math.floor(Math.random() * 100);
    if (RandomNumber >= 100 - 10*RandomAuto2xUpgrades) {
      multiplier = 2;
    }

    clicksGaining = Math.floor((1+(countUnlockedAchievements()/100))*(multiplier)*(AutomaticRizzers)*(1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)*(1 + Math.ceil(((CountryClubs*0.10 >= 1 ? Math.floor(CountryClubs * 0.10) : 1) )**(1+Cars/10))*(1 + RiceWashers)));
    clicks += clicksGaining;
    
    updateVisuals();
    runsIn6--;
  }

  if (AutomaticRizzers > 0 && (inLooksmaxxingChallenge != 6 || inLooksmaxxingChallenge != 5)) {
    spawnFloatingText("RANDOM","+"+abbrev(clicksGaining));
  } else if (AutomaticRizzers > 0 && inLooksmaxxingChallenge == 6 && runsIn6 > 0) {
    spawnFloatingText("RANDOM","+"+abbrev(clicksGaining));
  } else if (AutomaticRizzers > 0 && inLooksmaxxingChallenge == 5) {
    spawnFloatingText("RANDOM","+???");
  }

  if (!savingInterval) {
    savingInterval = setInterval(periodicSave, autosaveInterval * 1000);
  }

  // Blinged Dilyans
  var RandomNumber = Math.floor(Math.random() * 300);
  if (RandomNumber >= 300 - 1 - 3*blingedDilyanChance && (inLooksmaxxingChallenge == 0 || inLooksmaxxingChallenge == 1 || inLooksmaxxingChallenge == 2 || inLooksmaxxingChallenge == 4 || inLooksmaxxingChallenge == 5)) { // 1 in a 300
    spawnBonusCircle(4000+proudBlings*1000);
  }

  // Peeking Dilyans
  RandomNumber = Math.floor(Math.random() * 400);
  if (Rizzmaxxes >= 1 && RandomNumber >= 400 - 1 - 6*exposureTherapys && (inLooksmaxxingChallenge == 0 || inLooksmaxxingChallenge == 1 || inLooksmaxxingChallenge == 2 || inLooksmaxxingChallenge == 5)) {
    spawnPeekPanel(6000+prolongedPresences*1000);
  }
  if (rushCounter > 0) {fullRushTimer += 1 / gameTick;}
  if (rushCounter <= 0 && fullRushTimer > 0) {removeStep = true;}
  if (removeStep) {fullRushTimer=0;removeStep=false;}

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
  circle.classList.add("bonus-circle", "themedUnlocked");
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
      if (inLooksmaxxingChallenge == 4) {
        var randomPulling = 0;
        const normalUpgrades = 6;
        if (Rizzmaxxes < 2) {Math.round((0+normalUpgrades)*Math.random())}
        else if (Rizzmaxxes < 3) {randomPulling=Math.round((1+normalUpgrades)*Math.random())}
        else if (Rizzmaxxes < 4) {randomPulling=Math.round((2+normalUpgrades)*Math.random())}
        else if (listSum(LooksmaxxingChallengesCompleted) < 30) {randomPulling=Math.round((3+normalUpgrades)*Math.random())}
        else if (listSum(LooksmaxxingChallengesCompleted) < 70) {randomPulling=Math.round((4+normalUpgrades)*Math.random())}
        else {randomPulling=Math.round((5+normalUpgrades)*Math.random())}
        
        if (randomPulling == 0 && CountryClubs < 5) {
          CountryClubs++
          spawnFloatingText("", "+1 Country Club",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 1 && RiceWashers < 5) {
          RiceWashers++
          spawnFloatingText("", "+1 Rice Washer",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 2 && Cars < 5) {
          Cars++
          spawnFloatingText("", "+1 Car",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 3 && AutomaticRizzers < 5) {
          AutomaticRizzers++
          spawnFloatingText("", "+1 Automatic Rizzer",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 4 && RandomValue5xUpgrades < 5) {
          RandomValue5xUpgrades++
          spawnFloatingText("", "+1 Serendipitous Clicker",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 5 && RandomAuto2xUpgrades < 5) {
          RandomAuto2xUpgrades++
          spawnFloatingText("", "+1 Lucky Rizzer",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 6 && blingedDilyanChance < 5) {
          blingedDilyanChance++
          spawnFloatingText("", "+1 Bling Detector",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 7 && proudBlings < 5) {
          proudBlings++
          spawnFloatingText("", "+1 Proud Bling",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 8 && blingKings < 5) {
          blingKings++
          spawnFloatingText("", "+1 Bling King",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 9 && exposureTherapys < 5) {
          exposureTherapys++
          spawnFloatingText("", "+1 Exposure Therapy",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 10 && prolongedPresences < 3) {
          prolongedPresences++
          spawnFloatingText("", "+1 Prolonged Presence",1,[e.clientX,e.clientY]);
        } else if (randomPulling == 11 && dilyansTruth < 5) {
          dilyansTruths++
          spawnFloatingText("", "+1 Dilyan's Truth",1,[e.clientX,e.clientY]);
        } else {
          spawnFloatingText("", "Nothing Happened..",1,[e.clientX,e.clientY]);
        }
      } else {
        clicksGained = simulateClick("BONUS",(6+2*Math.floor(blingKings/2))+Math.random()*((13+3*Math.ceil(blingKings/2))-(6+2*Math.floor(blingKings/2)))); // 6-13x multiplier i believe
        blingedDilyansObtained++;
        if (inLooksmaxxingChallenge == 5) {
          spawnFloatingText("", "+???",1,[e.clientX,e.clientY]);
        } else {
          spawnFloatingText("", "+"+abbrev(clicksGained),1,[e.clientX,e.clientY]);
        }
      }

      setTimeout(() => circle.remove(), 150);
  });
}



function spawnPeekPanel(lifetime = 6000) {
    const side = Math.random() < 0.5 ? "left" : "right";

    const panel = document.createElement("div");
    panel.classList.add("peek-panel", "themedUnlocked");

    var imageToUse = "url('images/peekerDill.jpg')";
    if (side === "left") {
        panel.classList.add("peek-left");
    } else {
        panel.classList.add("peek-right");
        imageToUse = "url('images/peekerDill2.jpg')";
    }

    const toolbarHeight = 60;
    const panelHeight = 140;

    const maxY = window.innerHeight - panelHeight;
    const randomY = toolbarHeight + Math.random() * (maxY - toolbarHeight);

    panel.style.top = randomY + "px";

    // Overlay (image only)
    const overlay = document.createElement("div");
    overlay.classList.add("peek-overlay");
    overlay.style.backgroundImage = imageToUse;
    panel.appendChild(overlay);

    // Apply theme background like bonus circle
    var themeMap = getTheme(chosenBackground);
    Object.entries(themeMap).forEach(([className, color]) => {
        panel.style.background = color;
    });

    document.getElementById('room1Stuff').appendChild(panel);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (buttonPictureToggle == 1) {
            panel.firstChild.classList.remove("hidden");
        } else {
            panel.firstChild.classList.add("hidden");
        }
        panel.classList.add("show");
      });
    });

    let expired = false;

    // Wiggle occasionally
    const wiggleInterval = setInterval(() => {
        panel.classList.add("wiggle");
        setTimeout(() => panel.classList.remove("wiggle"), 600);
    }, 2500);

    const expireTimer = setTimeout(() => {
        expired = true;
        clearInterval(wiggleInterval);

        panel.classList.remove("show");
        panel.classList.add("expire");

        setTimeout(() => panel.remove(), 900);
    }, lifetime);

    panel.addEventListener("click", (e) => {

        if (expired) return;

        expired = true;

        clearTimeout(expireTimer);
        clearInterval(wiggleInterval);

        panel.classList.remove("show");
        panel.classList.add("clicked");

        // Your variable change here
        addTime(1+0.5*prolongedPresences);
        if (inLooksmaxxingChallenge == 5) {
          setMultiplierText("x???");
        } else {
          setMultiplierText("x"+(5+0.5*dilyansTruths));
        }

        peekingDilyansObtained++;

        if (inLooksmaxxingChallenge == 5) {
          spawnFloatingText("", "+??? Seconds of Aura Rush!", 1, [e.clientX, e.clientY], 9000);
        } else {
          spawnFloatingText("", "+"+(1+0.5*prolongedPresences)+" Seconds of Aura Rush!", 1, [e.clientX, e.clientY],9000);
        }

        setTimeout(() => panel.remove(), 150);
    });
}


let maxTime = 30;       // seconds

let lastUpdate = performance.now();
function updateTimer(now) {
    const delta = (now - lastUpdate) / 1000;
    lastUpdate = now;

    rushCounter -= delta;
    if (rushCounter < 0) rushCounter = 0;

    renderTimer();

    requestAnimationFrame(updateTimer);
}

// requestAnimationFrame(updateTimer);

function renderTimer() {
  const container = document.getElementById('timerWrapper');
  const percent = rushCounter / maxTime;

  // Hide if no time
  if (rushCounter <= 0) {
    container.style.opacity = "0";
    container.style.pointerEvents = "none";
    return;
  } else {
    container.style.opacity = "1";
    container.style.pointerEvents = "auto";
  }

  const fill = document.querySelector(".timer-fill");
  fill.style.width = (percent * 100) + "%";
}

function addTime(seconds) {
  const fill = document.querySelector(".timer-fill");
  const bonus = document.querySelector(".timer-bonus");

  const oldPercent = rushCounter / maxTime;

  maxTime = rushCounter + seconds;
  rushCounter = maxTime;

  const newPercent = 1;

  // Main bar will animate automatically because renderTimer runs every frame

  // Set bonus layer to the gained portion only
  bonus.style.transition = "none";
  bonus.style.left = (oldPercent * 100) + "%";
  bonus.style.width = ((newPercent - oldPercent) * 100) + "%";
  bonus.style.opacity = "1";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      bonus.style.transition = "opacity 1.2s ease";
      bonus.style.opacity = "0";
    });
  });
}

function setMultiplierText(text) {
  const el = document.getElementById("timerMultiplier");
  el.textContent = text;

  el.style.transform = "scale(1.2)";
  el.style.opacity = "1";

  setTimeout(() => {
    el.style.transform = "scale(1)";
  }, 150);
}
