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

    addAchievement(1205,"Occasionally.","Obtain your first Random Auto Upgrade.",function() {
        if (RandomAuto2xUpgrades >= 1) {return true}
    });

    addAchievement(1406,"I Guess Bro..","Rizzmax for the first time.",function() {
        if (Rizzmaxxes >= 1) {return true}
    });
    addAchievement(1407,"I Understand Now.","Rizzmax again.",function() {
        if (Rizzmaxxes >= 2) {return true}
    });

    addAchievement(1607,"Adequate Strategy.","Rizzmax for at least 10 points.", () => false);


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