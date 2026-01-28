/*
function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
        document.getElementById('AutomaticRizzerButton').innerHTML = "Buy Automatic Rizzer ("+AutomaticRizzers+"): Cost: <b>"+AutomaticRizzerCost+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    } catch(error) {
        console.error(error);
    }
}
*/

function setClickProcesses2() {
    // Country Clubs
    document.getElementById('CountryClubButton').onclick = function() {
        if (clicks >= grabCost('CountryClubs') && inLooksmaxxingChallenge != 4) {
            clicks -= grabCost('CountryClubs');
            CountryClubs++;
            updateVisuals();
        }
    };
    // Rice Washers
    document.getElementById('RiceWasherButton').onclick = function() {
        if (clicks >= grabCost('RiceWashers') && inLooksmaxxingChallenge != 1 && inLooksmaxxingChallenge != 4) {
            clicks -= grabCost('RiceWashers');
            RiceWashers++;
            updateVisuals();
        }
    }
    // Random x5 Value Upgrade
    document.getElementById('5xRandomValueUpgradeButton').onclick = function() {
        if (RandomValue5xUpgrades < 5 && inLooksmaxxingChallenge != 3 && inLooksmaxxingChallenge != 4) {
            if (clicks >= grabCost('RandomValue5xUpgrades')) {
                clicks -= grabCost('RandomValue5xUpgrades');
                RandomValue5xUpgrades++;
                updateVisuals();
            }
        }
    }
    // Automatic Rizzers
    document.getElementById('AutomaticRizzerButton').onclick = function() {
        if (clicks >= grabCost('AutomaticRizzers') && inLooksmaxxingChallenge != 3 && inLooksmaxxingChallenge != 4) {
            clicks -= grabCost('AutomaticRizzers');
            AutomaticRizzers++;
            updateVisuals();
        }
    }
    // Random x2 Auto Value
    document.getElementById('2xRandomAutoUpgradeButton').onclick = function() {
        if (RandomAuto2xUpgrades < 5 && inLooksmaxxingChallenge != 3 && inLooksmaxxingChallenge != 4) {
            if (clicks >= grabCost('RandomAuto2xUpgrades')) {
                clicks -= grabCost('RandomAuto2xUpgrades');
                RandomAuto2xUpgrades++;
                updateVisuals();
            }
        }
    }
    // Offline Progress +1 Hr Upgrade
    document.getElementById('OfflineProduction1Button').onclick = function() {
        if (RizzPoints >= grabCost('OfflineProdHrs') && inLooksmaxxingChallenge == 0) {
            RizzPoints -= grabCost('OfflineProdHrs');
            OfflineProdHrs++;
            updateVisuals();
        }
    }
    // Extra Click Worth Upgrade
    document.getElementById('RizzClickWorthButton').onclick = function() {
        if (RizzPoints >= grabCost('RizzmaxClickWorth') && inLooksmaxxingChallenge == 0) {
            RizzPoints -= grabCost('RizzmaxClickWorth');
            RizzmaxClickWorth++;
            updateVisuals();
        }
    }
    // Looksmaxxing Challenges Upgrade
    document.getElementById('UnlockLooksmaxxingButton').onclick = function() {
        if (grabCost('LooksmaxxingChallengesUpgradeUnlocked') != -1) {
            if (RizzPoints >= grabCost('LooksmaxxingChallengesUpgradeUnlocked')) {
                RizzPoints -= grabCost('LooksmaxxingChallengesUpgradeUnlocked');
                LooksmaxxingChallengesUpgradeUnlocked++;
                updateVisuals();
            }
        }
    }
    // Mine of Rizz Unlock
    document.getElementById('RmU2Upg1').onclick = function() {
        if (grabCost('MineOfRizzUnlocked') != -1) {
            if (RizzPoints >= grabCost('MineOfRizzUnlocked')) {
                RizzPoints -= grabCost('MineOfRizzUnlocked');
                MineOfRizzUnlocked++;
                updateVisuals();
            }
        }
    }
    // Rizzalurgy Unlock
    document.getElementById('RmU2Upg2').onclick = function() {
        if (RizziteNRizzium[1] >= grabCost('RizzalurgyUnlocked') && inLooksmaxxingChallenge == 0) {
            RizziteNRizzium[1] -= grabCost('RizzalurgyUnlocked');
            RizzalurgyUnlocked++;
            updateVisuals();
        }
    }
    // +5% Chance to All Random Chance Upgrades
    document.getElementById('RmU2Upg3').onclick = function() {
        if (RizzmaxExtraChance < 10 && RizzPoints >= grabCost('RizzmaxExtraChance') && inLooksmaxxingChallenge == 0) {
            RizzPoints -= grabCost('RizzmaxExtraChance');
            RizzmaxExtraChance++;
            updateVisuals();
        }
    }
}