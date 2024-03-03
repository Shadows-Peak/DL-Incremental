data = {
    "mainClicks": 0,
    "CountryClubs": 0,
    "RiceWashers": 0,
    "RandomValue5xUpgrades": 0,
    "AutomaticRizzers": 0,
    "RandomAuto2xUpgrades": 0,
    "Rizzmaxxes": 0,
    "RizzPoints": 0,
    "OfflineProdHrs": 0,
    "RizzmaxClickWorth": 0,
    "LooksmaxxingChallengesUpgradeUnlocked": 0,
    "backgroundToggle": 1,
    "chosenBackground": 1,
    "lastOfflineTime": 0
}

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

function saveData() {
    var basicIter = 0;
    for (const key of Object.keys(data)) {
        data[key] = [clicks,CountryClubs,RiceWashers,RandomValue5xUpgrades,AutomaticRizzers,RandomAuto2xUpgrades,Rizzmaxxes,RizzPoints,OfflineProdHrs,RizzmaxClickWorth,LooksmaxxingChallengesUpgradeUnlocked,backgroundToggle,chosenBackground,lastOfflineTime][basicIter];
        basicIter++;
    }
    for (const [key, value] of Object.entries(data)) {
        localStorage.setItem(key, value);
    }
}

function resetData() {
    data = {
        "clicks": 0,
        "CountryClubs": 0,
        "RiceWashers": 0,
        "RandomValue5xUpgrades": 0,
        "AutomaticRizzers": 0,
        "Rizzmaxxes": 0,
        "RizzPoints": 0,
        "RandomAuto2xUpgrades": 0,
        "OfflineProdHrs": 0,
        "RizzmaxClickWorth": 0,
        "LooksmaxxingChallengesUpgradeUnlocked": 0,
        "lastOfflineTime": 0
    }
    for (const [key, value] of Object.entries(data)) {
        eval(key + " = " + value);
        localStorage.setItem(key, value);
    }
    updateVisuals();
}

document.getElementById('saveButton').onclick = function () {
    localStorage.setItem('mainClicks', clicks);
    document.getElementById('saveButton').innerHTML = "Saved!";
    setTimeout(function () {
        document.getElementById('saveButton').innerHTML = "Save Game";
    }, (3 * 1000));
};

document.getElementById('resetButton').onclick = function () {
    resetData();
    document.getElementById('resetButton').innerHTML = "Game has been Reset!";
    setTimeout(function () {
        document.getElementById('resetButton').innerHTML = "Reset Game";
    }, (3 * 1000));
};

function periodicSave() {
    saveData();
}

window.onbeforeunload = function () {
    lastOfflineTime = Date.now();
    saveData();
    alert("Your game has been saved.");
}

setInterval(periodicSave, 120 * 1000);