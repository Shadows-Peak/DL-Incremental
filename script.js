function setClickProcessesFirst() {
    // Toolbar
    const settingsBtn = document.getElementById("settingsBtn2");
    const saveBtn = document.getElementById("saveBtn2");
    const profileBtn = document.getElementById("profileBtn2");
    const settingsMenu = document.getElementById("settingsMenu");
    const profileMenu = document.getElementById("profileMenu");
    const overlay = document.getElementById("overlay");
    const saveIcon = document.getElementById("saveIcon");

    function updateOverlay() {
        if (settingsMenu.classList.contains("active") || profileMenu.classList.contains("active")) {
            overlay.classList.add("active");
        } else {
            overlay.classList.remove("active");
        }
    }

    console.log("Script running");
    console.log(document.getElementById("settingsBtn2"));

    settingsBtn.addEventListener("click", (e) => {
        e.stopPropagation();  // 🔥 Prevent bubbling
        settingsMenu.classList.toggle("active");
        profileMenu.classList.remove("active");
        updateOverlay();
    });

    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();  // 🔥 Prevent bubbling
        profileMenu.classList.toggle("active");
        settingsMenu.classList.remove("active");
        updateOverlay();
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) &&
          !profileMenu.contains(e.target) &&
          !settingsBtn.contains(e.target) &&
          !profileBtn.contains(e.target)) {
        settingsMenu.classList.remove("active");
        profileMenu.classList.remove("active");
        updateOverlay();
      }
    });

    // Optional: clicking overlay closes menus
    overlay.addEventListener("click", () => {
        settingsMenu.classList.remove("active");
        profileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });

    saveInProgress = false;
    saveBtn.addEventListener("click", async () => {
        if (saveInProgress) return; // ignore clicks while saving
        saveInProgress = true;

        // Disable visually
        saveBtn.classList.add("disabled");

        // Show spinner
        saveIcon.innerHTML = '<div class="spinner"></div>';

        try {
            await saveData(); // your async save function

            // Show checkmark for 1.5 seconds
            saveIcon.textContent = '✔';
            sendToast("<b>Game Saved!</b>");
            await new Promise(res => setTimeout(res, 1500));

        } catch(err) {
            console.error("Save failed:", err);

            // Optional: show ❌ for failure
            saveIcon.textContent = '❌';
            await new Promise(res => setTimeout(res, 1500));
        }

        clearInterval(savingInterval);
        savingInterval = setInterval(periodicSave, autosaveInterval * 1000);

        // Restore original icon and re-enable
        saveIcon.textContent = '💾';
        saveBtn.classList.remove("disabled");
        saveInProgress = false;
    });



    // Achievements
    const grid = document.getElementById("achievementsGrid");
    const tooltip = document.getElementById("achievementTooltip");

    //
    //  ADD ACHIEVEMENTS
    //
    addAchievement(0,"Beginning of Boredom","Obtain your first Dilyan Point.",function() {
        if (clicks >= 1) {return true}
    });
    addAchievement(1,"Still Here?","Get 10 Dilyan Points.",function() {
        if (clicks >= 10) {return true}
    });
    addAchievement(2,"Ooh, Another Zero!","Get 100 Dilyan Points.",function() {
        if (clicks >= 100) {return true}
    });
    addAchievement(3,"Bands?","Get 1k Dilyan Points.",function() {
        if (clicks >= 1000) {return true}
    });

    addAchievement(200,"Why a Country Club?","Obtain your first Country Club.",function() {
        if (CountryClubs >= 1) {return true}
    });
    addAchievement(201,"Things Are Getting Expensive.","Have at least 7 Country Clubs.",function() {
        if (CountryClubs >= 7) {return true}
    });

    addAchievement(401,"Asian Food 😋","Obtain your first Rice Washer.",function() {
        if (RiceWashers >= 1) {return true}
    });
    addAchievement(402,"Too Expensive..","Get another Rice Washer.",function() {
        if (RiceWashers >= 2) {return true}
    });

    addAchievement(602,"No Correlation.","Obtain your first Car.",function() {
        if (Cars >= 1) {return true}
    });

    addAchievement(803,"Completely Uselss.","Obtain your first Automatic Rizzer.",function() {
        if (AutomaticRizzers >= 1) {return true}
    });
    // Not Quite My Tempo

    addAchievement(1004,"Sometimes.","Obtain your first Random Value Upgrade.",function() {
        if (RandomValue5xUpgrades >= 1) {return true}
    });
    addAchievement(1005,"Pretty Likely.","Have three Random Value Upgrades.",function() {
        if (RandomValue5xUpgrades >= 3) {return true}
    });
    addAchievement(1005,"Pretty Likely.","Have max Random Value Upgrades.",function() {
        if (RandomValue5xUpgrades == 5) {return true}
    });

    addAchievement(1205,"Occasionally.","Obtain your first Random Auto Upgrade.",function() {
        if (RandomAuto2xUpgrades >= 1) {return true}
    });
    addAchievement(1206,"Consistently.","Have three Random Auto Upgrades.",function() {
        if (RandomAuto2xUpgrades >= 3) {return true}
    });
    addAchievement(1207,"Consistently.","Have max Random Auto Upgrades.",function() {
        if (RandomAuto2xUpgrades == 5) {return true}
    });

    addAchievement(1406,"I Guess Bro..","Rizzmax for the first time.",function() {
        if (Rizzmaxxes >= 1) {return true}
    });
    addAchievement(1407,"I Understand Now.","Rizzmax again.",function() {
        if (Rizzmaxxes >= 2) {return true}
    });

    addAchievement(1607,"Adequate Strategy.","Rizzmax for at least 10 points.", () => false);

    addAchievement(1808,"Longer Than Most People.","Play for 2 minutes.",function() {
        if (timePlayed >= 120) {return true};
    });
    addAchievement(1809,"Locked In.","Play for 10 minutes.",function() {
        if (timePlayed >= 10*60) {return true};
    });
    addAchievement(1810,"Lowkey A Loser.","Play for 30 minutes.",function() {
        if (timePlayed >= 30*60) {return true};
    });
    addAchievement(1811,"ts not this deep","Play for an hour.",function() {
        if (timePlayed >= 60*60) {return true};
    });

    addAchievement(2009,"Keyboard Warrior.","Obtain your first Rizzmax Click Worth Upgrade.",function() {
        if (RizzmaxClickWorth*5 >= 5) {return true};
    });
    addAchievement(2010,"Good Buffs.","Get a +25% click value increase from Rizzmax Click Worth Upgrades.",function() {
        if (RizzmaxClickWorth*5 >= 25) {return true};
    });
    addAchievement(2011,"Massive Buffs.","Get a +50% click value increase from Rizzmax Click Worth Upgrades.",function() {
        if (RizzmaxClickWorth*5 >= 50) {return true};
    });
    addAchievement(2012,"Double Trouble.","Get a x2 click value increase from Rizzmax Click Worth Upgrades.",function() {
        if (RizzmaxClickWorth*5 >= 100) {return true};
    });
    addAchievement(2013,"AIPAC Boosting","Get a x3 click value increase from Rizzmax Click Worth Upgrades.",function() {
        if (RizzmaxClickWorth*5 >= 200) {return true};
    });

    addAchievement(2210,"Tactical Laziness.","Obtain your first Offline Production Hour.",function() {
        if (OfflineProdHrs >= 1) {return true};
    });
    addAchievement(2211,"More Down Time.","Have 2 hours of Offline Production.",function() {
        if (OfflineProdHrs >= 2) {return true};
    });
    addAchievement(2212,"I Think I Need A Break.","Have 6 hours of Offline Production.",function() {
        if (OfflineProdHrs >= 6) {return true};
    });
    addAchievement(2213,"Twice A Day.","Have 12 hours of Offline Production.",function() {
        if (OfflineProdHrs >= 12) {return true};
    });
    addAchievement(2214,"Don't Look Back.","Have a full day of Offline Production.",function() {
        if (OfflineProdHrs >= 24) {return true};
    });

    addAchievement(2411,"New Beginnings.","Unlock Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesUpgradeUnlocked == 1) {return true};
    });
    addAchievement(2412,"Student Of Mog.","Complete your first Looksmaxxing Challenge.",function() {
        if (listSum(LooksmaxxingChallengesCompleted) >= 1) {return true};
    });
    addAchievement(2413,"Evolution.","Complete your first Looksmaxxing Challenge.",function() {
        if (listSum(LooksmaxxingChallengesCompleted) >= 5) {return true};
    });

    addAchievement(2612,"The King Of Fighters.","Complete your first \"Bye Bye!\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 1) {return true};
    });

    addAchievement(2813,"Inner Peace.","Complete your first \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 1) {return true};
    });

    addAchievement(3014,"Clavicular.","Complete your first \"Stone-Faced Mogging\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 1) {return true};
    });

    addAchievement(3215,"Bands Like Dillpakel.","Complete your first \"Rags to Riches\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 1) {return true};
    });

    addAchievement(3416,"Dilyan Lopez: Played By Noble Amani.","Complete your first \"Ad Hominem\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[4] >= 1) {return true};
    });

    addAchievement(3617,".gif","Complete your first \"Gods Plan\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[5] >= 1) {return true};
    });

    // 3818 is Tiktok
    
    // 4019 is the random one


    orderAchievements();





    /* CLICK HANDLER (delegated, scalable) */
    grid.addEventListener("click", function(e) {
        if (e.target.classList.contains("achievementSquare")) {
            console.log("Hi");
        }
    });

    /* TOOLTIP SHOW */
    grid.addEventListener("mouseover", function(e) {
        if (e.target.classList.contains("achievementSquare")) {
            tooltip.innerHTML = e.target.dataset.tooltip;
            tooltip.style.opacity = "1";
        }
    });

    /* TOOLTIP MOVE */
    document.addEventListener("mousemove", function(e) {
        tooltip.style.left = (e.clientX + 15) + "px";
        tooltip.style.top = (e.clientY + 15) + "px";
    });

    /* TOOLTIP HIDE */
    grid.addEventListener("mouseout", function(e) {
        if (e.target.classList.contains("achievementSquare")) {
            tooltip.style.opacity = "0";
        }
    });
}