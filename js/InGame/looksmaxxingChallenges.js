function ChallengeStart(num, alertMsg) {
    if (LooksmaxxingChallengesCompleted[num-1] < [10,90,5,9][num-1]) {
        if (inLooksmaxxingChallenge == 0) {
            inLooksmaxxingChallenge = num;
            // Rizzmax reset
            clicks = 0;
            CountryClubs = 0;
            RiceWashers = 0;
            Cars = 0;
            RandomValue5xUpgrades = 0;
            RandomAuto2xUpgrades = 0;
            AutomaticRizzers = 0;
    
            if (num == 2) {
                AutomaticRizzers = 1;
            }
            
            setRoom(1);
            updateBackgrounds();
            updateVisuals();
    
            alert(alertMsg);
        }  else if (inLooksmaxxingChallenge == num) {
            if (confirm("Do you wish to leave this challenge?") == true) {
                if (confirm("Ending it this way makes you lose your attempt, if you have the requirements, you should Rizzmax instead. Press OK to end it anyways.")) {
                    inLooksmaxxingChallenge = 0;
    
                    // Rizzmax reset
                    clicks = 0;
                    CountryClubs = 0;
                    RiceWashers = 0;
                    Cars = 0;
                    RandomValue5xUpgrades = 0;
                    RandomAuto2xUpgrades = 0;
                    AutomaticRizzers = 0;
                    
                    setRoom(1);
                    updateBackgrounds();
                    updateVisuals();
                }
            }
        }
    }
}

function setClickProcesses3() {
    document.getElementById('LMC1Button').onclick = function() {
        ChallengeStart(1,"You have begun the 'Bye Bye!' Looksmaxxing Challenge. You are unable to purchase any Rice Washers or Cars."); 
    }

    document.getElementById('LMC2Button').onclick = function() {
        ChallengeStart(2,"You have begun the 'Edging Maestro' Looksmaxxing Challenge. You are unable to click to gain Dilyan Points."); 
    }

    document.getElementById('LMC3Button').onclick = function() {
        ChallengeStart(3,"You have begun the 'Stone-Faced Mogging' Looksmaxxing Challenge. You are unable to purchase any Random Value Upgrades or Automatic Rizzers."); 
    }

    document.getElementById('LMC4Button').onclick = function() {
        ChallengeStart(4,"You have begun the 'Rags to Riches' Looksmaxxing Challenge. You are unable to do anything other than click to gain Dilyan Points."); 
    }
}