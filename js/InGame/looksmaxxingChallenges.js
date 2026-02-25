function ChallengeStart(num, alertMsg) {
    if (LooksmaxxingChallengesCompleted[num-1] < [10,40,5,9,10,3][num-1]) {
        if (inLooksmaxxingChallenge == 0) {
            inLooksmaxxingChallenge = num;
            // Rizzmax reset
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
            
            if (num == 1) {
                setDisplay('riceWasherUpgradeCard',0);
                setDisplay('carUpgradeCard',0);
            } else if (num == 2) {
                AutomaticRizzers = 1;
            } else if (num == 3) {
                setDisplay('automaticRizzerUpgradeCard',0);
                setDisplay('serendipitousClickerUpgradeCard',0);
                setDisplay('luckyRizzerUpgradeCard',0);
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

                    if (num == 1) {
                        setDisplay('riceWasherUpgradeCard',1,'special');
                        setDisplay('carUpgradeCard',1,'special');
                    } else if (num == 3) {
                        setDisplay('automaticRizzerUpgradeCard',1,'special');
                        setDisplay('serendipitousClickerUpgradeCard',1,'special');
                        setDisplay('luckyRizzerUpgradeCard',1,'special');
                    }
                    
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

    document.getElementById('LMC5Button').onclick = function() {
        ChallengeStart(5,"You have begun the 'Ad Hominem' Looksmaxxing Challenge. In this challenge, you are unable to see how many points, upgrades, prices, or multipliers you have."); 
    }

    document.getElementById('LMC6Button').onclick = function() {
        ChallengeStart(6,"You have begun the 'Gods Plan' Looksmaxxing Challenge. In this challenge, you have a depreciating click value and must repurchase upgrades/Automatic Rizzers to have them reset/continue producing."); 
    }
}
