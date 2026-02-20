function setClickProcessesFirst() {
    // Toolbar
    const settingsBtn = document.getElementById("settingsBtn2");
    const saveBtn = document.getElementById("saveBtn2");
    const profileBtn = document.getElementById("profileBtn2");
    const infoBtn = document.getElementById("infoBtn");
    const settingsMenu = document.getElementById("settingsMenu");
    const profileMenu = document.getElementById("profileMenu");
    const infoMenu = document.getElementById("infoMenu");
    const overlay = document.getElementById("overlay");
    const saveIcon = document.getElementById("saveIcon");

    function updateOverlay() {
        if (settingsMenu.classList.contains("active") || profileMenu.classList.contains("active") || infoMenu.classList.contains("active")) {
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
        infoMenu.classList.remove("active");
        updateOverlay();
    });

    profileBtn.addEventListener("click", (e) => {
        e.stopPropagation();  // 🔥 Prevent bubbling
        profileMenu.classList.toggle("active");
        settingsMenu.classList.remove("active");
        infoMenu.classList.remove("active");
        updateOverlay();
    });

    infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();  // 🔥 Prevent bubbling
        profileMenu.classList.remove("active");
        settingsMenu.classList.remove("active");
        infoMenu.classList.toggle("active");
        updateOverlay();
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", (e) => {
      if (!settingsMenu.contains(e.target) &&
          !profileMenu.contains(e.target) &&
          !settingsBtn.contains(e.target) &&
          !profileBtn.contains(e.target) &&
          !infoBtn.contains(e.target)) {
        settingsMenu.classList.remove("active");
        profileMenu.classList.remove("active");
        infoMenu.classList.remove("active");
        updateOverlay();
      }
    });

    // Optional: clicking overlay closes menus
    overlay.addEventListener("click", () => {
        settingsMenu.classList.remove("active");
        profileMenu.classList.remove("active");
        infoMenu.classList.remove("active");
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
    addAchievement(4,"\"I'm not even rich\"","Get 10k Dilyan Points.",function() {
        if (clicks >= 10000) {return true}
    });
    addAchievement(5,"Yet Still Only Enough For A Few Upgrades.","Get 100k Dilyan Points.",function() {
        if (clicks >= 100000) {return true}
    });
    addAchievement(6,"Big Leagues Are Calling.","Get 1m Dilyan Points.",function() {
        if (clicks >= 1000000) {return true}
    });
    addAchievement(7,"Pocket Change.","Get 10m Dilyan Points.",function() {
        if (clicks >= 10000000) {return true}
    });
    addAchievement(8,"Potentially Wired Funds.","Get 100m Dilyan Points.",function() {
        if (clicks >= 100000000) {return true}
    });
    addAchievement(9,"Dillionare","Get 1b Dilyan Points.",function() {
        if (clicks >= 1000000000) {return true}
    });
    addAchievement(10,"Dilyan Lopez Exponential","Get 1t Dilyan Points.",function() {
        if (clicks >= 1000000000000) {return true}
    });
    addAchievement(11,"ok you can stop now","Get 1qd Dilyan Points.",function() {
        if (clicks >= 1000000000000000) {return true}
    });

    addAchievement(200,"Why a Country Club?","Obtain your first Country Club.",function() {
        if (CountryClubs >= 1) {return true}
    });
    addAchievement(201,"Things Are Getting Expensive.","Have at least 7 Country Clubs.",function() {
        if (CountryClubs >= 7) {return true}
    });
    addAchievement(202,"Business Plan.","Have at least 15 Country Clubs.",function() {
        if (CountryClubs >= 15) {return true}
    });

    addAchievement(401,"Asian Food 😋","Obtain your first Rice Washer.",function() {
        if (RiceWashers >= 1) {return true}
    });
    addAchievement(402,"Too Expensive..","Get another Rice Washer.",function() {
        if (RiceWashers >= 2) {return true}
    });
    addAchievement(403,"Shooting Shots.","Have at least 5 Rice Washers.",function() {
        if (RiceWashers >= 5) {return true}
    });

    addAchievement(602,"No Correlation.","Obtain your first Car.",function() {
        if (Cars >= 1) {return true}
    });
    addAchievement(603,"Poor Man's Rotation.","Have at least 3 Cars.",function() {
        if (Cars >= 3) {return true}
    });
    addAchievement(604,"Lore Accurare.","Have at least 11 Cars.",function() {
        if (Cars >= 11) {return true}
    });
    addAchievement(702,"All I Need.","Have at least 1 Car while having only 1 Country Club and no Rice Washers.",function() {
        if (Cars >= 1 && CountryClubs == 1 && RiceWashers == 0) {return true}
    });
    addAchievement(703,"Moving Out.","Have at least 2 Cars while having no Country Clubs and only 1 Rice Washer.",function() {
        if (Cars >= 2 && CountryClubs == 0 && RiceWashers == 1) {return true}
    });
    addAchievement(704,"My Own Legacy.","Have at least 3 Cars while having no Country Clubs and no Rice Washers.",function() {
        if (Cars >= 3 && CountryClubs == 0 && RiceWashers == 0) {return true}
    });

    addAchievement(803,"Completely Useless.","Obtain your first Automatic Rizzer.",function() {
        if (AutomaticRizzers >= 1) {return true}
    });
    addAchievement(804,"When Does This Get Good?","Have at least 5 Automatic Rizzers.",function() {
        if (AutomaticRizzers >= 5) {return true}
    });
    addAchievement(805,"10 CPS And Still Nothing.","Have at least 10 Automatic Rizzers.",function() {
        if (AutomaticRizzers >= 10) {return true}
    });
    addAchievement(806,"At Least It's Cheap.","Have at least 50 Automatic Rizzers.",function() {
        if (AutomaticRizzers >= 50) {return true}
    });
    addAchievement(807,"Maybe It's Okay?","Have at least 100 Automatic Rizzers.",function() {
        if (AutomaticRizzers >= 100) {return true}
    });
    addAchievement(903,"Not Quite My Tempo.","Have at least 200 Automatic Rizzers and no Country Clubs, Rice Washers, or Cars.",function() {
        if (AutomaticRizzers >= 200 && CountryClubs == 0 && RiceWashers == 0 && Cars == 0) {return true}
    });

    addAchievement(1004,"Sometimes.","Obtain your first Serendipitous Clicker.",function() {
        if (RandomValue5xUpgrades >= 1) {return true}
    });
    addAchievement(1005,"Pretty Likely.","Have three Serendipitous Clickers.",function() {
        if (RandomValue5xUpgrades >= 3) {return true}
    });
    addAchievement(1006,"Toss Of A Coin.","Have max Serendipitous Clickers.",function() {
        if (RandomValue5xUpgrades == 5) {return true}
    });

    addAchievement(1205,"Occasionally.","Obtain your first Lucky Rizzer.",function() {
        if (RandomAuto2xUpgrades >= 1) {return true}
    });
    addAchievement(1206,"Consistently.","Have three Lucky Rizzers.",function() {
        if (RandomAuto2xUpgrades >= 3) {return true}
    });
    addAchievement(1207,"Half Time.","Have max Lucky Rizzers.",function() {
        if (RandomAuto2xUpgrades == 5) {return true}
    });

    addAchievement(1255,"Liquid Luck.","Obtain your first Bling Detector.",function() {
        if (blingedDilyanChance >= 1) {return true}
    });
    addAchievement(1256,"Turururururu.. Click!","Have five Bling Detectors.",function() {
        if (blingedDilyanChance >= 5) {return true}
    });
    addAchievement(1257,"Money On My Click.","Have max Bling Detectors.",function() {
        if (blingedDilyanChance >= 10) {return true}
    });

    addAchievement(1280,"He is Him.","Click your first Blinged Dilyan.",function() {
        if (blingedDilyansObtained >= 1) {return true}
    });
    addAchievement(1281,"Any Day Now..","Click your second Blinged Dilyan.",function() {
        if (blingedDilyansObtained >= 2) {return true}
    });
    addAchievement(1282,"Making It Rain","Click five Blinged Dilyans.",function() {
        if (blingedDilyansObtained >= 5) {return true}
    });
    addAchievement(1283,"Lucky Dilyan.","Click seven Blinged Dilyans.",function() {
        if (blingedDilyansObtained >= 7) {return true}
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
    addAchievement(2413,"Evolution.","Complete five Looksmaxxing Challenges.",function() {
        if (listSum(LooksmaxxingChallengesCompleted) >= 5) {return true};
    });

    addAchievement(2612,"The King Of Fighters.","Complete your first \"Bye Bye!\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 1) {return true};
    });
    addAchievement(2613,"Nice Jawline.","Complete your third \"Bye Bye!\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 3) {return true};
    });
    addAchievement(2614,"Frame Mogging.","Complete your fifth \"Bye Bye!\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 5) {return true};
    });
    addAchievement(2615,"Built Different.","Complete your eighth \"Bye Bye!\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 8) {return true};
    });
    addAchievement(2616,"All Mewed Out.","Complete all \"Bye Bye!\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[0] >= 10) {return true};
    });

    addAchievement(2813,"Inner Peace.","Complete your first \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 1) {return true};
    });
    addAchievement(2814,"Do Not Disturb.","Complete your fifth \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 5) {return true};
    });
    addAchievement(2815,"False Fire Alarm.","Complete your tenth \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 10) {return true};
    });
    addAchievement(2816,"Guru Of The Arts.","Complete your twentieth \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 20) {return true};
    });
    addAchievement(2817,"Gravity Simulation Machine.","Complete your thirtieth \"Edging Maestro\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 30) {return true};
    });
    addAchievement(2818,"Low Cortisol.","Complete all \"Edging Maestro\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[1] >= 40) {return true};
    });

    addAchievement(3014,"Clavicular.","Complete your first \"Stone-Faced Mogging\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 1) {return true};
    });
    addAchievement(3015,"Light Work. No Reaction.","Complete your second \"Stone-Faced Mogging\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 2) {return true};
    });
    addAchievement(3016,"Poker Face.","Complete your third \"Stone-Faced Mogging\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 3) {return true};
    });
    addAchievement(3017,"Diamond Is Unbreakable.","Complete your fourth \"Stone-Faced Mogging\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 4) {return true};
    });
    addAchievement(3018,"Giga Chad.","Complete all \"Stone-Faced Mogging\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[2] >= 5) {return true};
    });

    addAchievement(3215,"Bands Like Dillpakel.","Complete your first \"Rags to Riches\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 1) {return true};
    });
    addAchievement(3216,"A Pen Traded Up To A Car.","Complete your third \"Rags to Riches\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 3) {return true};
    });
    addAchievement(3217,"Business Talent.","Complete your fifth \"Rags to Riches\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 5) {return true};
    });
    addAchievement(3218,"Dirt To Hyperion.","Complete your seventh \"Rags to Riches\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 7) {return true};
    });
    addAchievement(3219,"Corrupt CEO.","Complete all \"Rags to Riches\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[3] >= 9) {return true};
    });

    addAchievement(3416,"Dilyan Lopez: Played By Noble Amani.","Complete your first \"Ad Hominem\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[4] >= 1) {return true};
    });
    addAchievement(3417,"Invisible. Invisible.","Complete your fifth \"Ad Hominem\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[4] >= 5) {return true};
    });
    addAchievement(3418,"Ragebaiter.","Complete all \"Ad Hominem\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[4] >= 10) {return true};
    });

    addAchievement(3617,".gif","Complete your first \"Gods Plan\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[5] >= 1) {return true};
    });
    addAchievement(3618,"How'd You Do It?","Complete your second \"Gods Plan\" Looksmaxxing Challenge.",function() {
        if (LooksmaxxingChallengesCompleted[5] >= 2) {return true};
    });
    addAchievement(3619,"Your Own God.","Complete all \"Gods Plan\" Looksmaxxing Challenges.",function() {
        if (LooksmaxxingChallengesCompleted[5] >= 3) {return true};
    });

    // 3818 is Tiktok
    
    // 4019 is the random one

    addAchievement(4020,"Stat Boosting.","Obtain your first upgrade of having Extra Odds to All Random Chance Upgrades.",function() {
        if (RizzmaxExtraChance >= 1) {return true};
    });
    addAchievement(4021,"Obscene Odds.","Have two of the Extra Odds to All Random Chance Upgrades upgrade.",function() {
        if (RizzmaxExtraChance >= 2) {return true};
    });
    addAchievement(4022,"Against The Odds.","Have four of the Extra Odds to All Random Chance Upgrades upgrade.",function() {
        if (RizzmaxExtraChance >= 4) {return true};
    });
    addAchievement(4023,"Like.. Even More Odds.","Have six of the Extra Odds to All Random Chance Upgrades upgrade.",function() {
        if (RizzmaxExtraChance >= 6) {return true};
    });
    addAchievement(4024,"On The Precipice.","Have eight of the Extra Odds to All Random Chance Upgrades upgrade.",function() {
        if (RizzmaxExtraChance >= 8) {return true};
    });
    addAchievement(4025,"Probability Manipulation.","Have max of the Extra Odds to All Random Chance Upgrades upgrade.",function() {
        if (RizzmaxExtraChance >= 10) {return true};
    });

    addAchievement(4121,"Coal Miner.","Unlock the Mine of Rizz.",function() {
        if (MineOfRizzUnlocked == 1) {return true};
    });
    addAchievement(4122,"Wait.. Not Coal.","Obtain your first Rizzite.",function() {
        if (RizziteNRizzium[1] >= 1) {return true};
    });

    addAchievement(4223,"Oh So This Does Have A Use.","Unlock the Rizzalurgy.",function() {
        if (RizzalurgyUnlocked == 1) {return true};
    });
    addAchievement(4224,"Pure Unbridled Rizz.","Smelt down your first Rizzite.",function() {
        if (RizziteNRizzium[2] >= 1) {return true};
    });



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
