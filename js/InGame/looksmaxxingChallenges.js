function ChallengeStart(num, alertMsg) {
    if (inLooksmaxxingChallenge == 0) {
        inLooksmaxxingChallenge = num;
        // Rizzmax reset
        clicks = 0;
        CountryClubs = 0;
        RiceWashers = 0;
        RandomValue5xUpgrades = 0;
        RandomAuto2xUpgrades = 0;
        AutomaticRizzers = 0;
        
        setRoom(1);
        updateBackgrounds();
        updateVisuals();

        alert(alertMsg);
    } 
}

document.getElementById('LMC1Button').onclick = function() {
    ChallengeStart(1,"You have begun the 'Bye Bye!' Looksmaxxing Challenge. You are unable to purchase any Rice Washers."); 
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