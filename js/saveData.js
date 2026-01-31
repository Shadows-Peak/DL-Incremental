data = {
    "clicks": 0,
    "CountryClubs": 0,
    "RiceWashers": 0,
    "Cars": 0,
    "RandomValue5xUpgrades": 0,
    "AutomaticRizzers": 0,
    "RandomAuto2xUpgrades": 0,
    "Rizzmaxxes": 0,
    "RizzPoints": 0,
    "OfflineProdHrs": 0,
    "RizzmaxClickWorth": 0,
    "LooksmaxxingChallengesUpgradeUnlocked": 0,
    "inLooksmaxxingChallenge": 0,
    "LooksmaxxingChallengesCompleted": [0,0,0,0,0],
    "backgroundToggle": 1,
    "chosenBackground": 1,
    "lastOfflineTime": 0,
    "MineOfRizzUnlocked": 0,
    "RizzmaxExtraChance": 0,
    "MoRCellHighlight": [1,1],
    "RizziteNRizzium": [0,0,0],
    "RizzalurgyUnlocked": 0,
    "newFormatToggle": 0
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

async function saveData(silent=false) {
    var megaData = "";
    var basicIter = 0;
    for (const key of Object.keys(data)) {
        data[key] = [clicks,CountryClubs,RiceWashers,Cars,RandomValue5xUpgrades,AutomaticRizzers,RandomAuto2xUpgrades,Rizzmaxxes,RizzPoints,OfflineProdHrs,RizzmaxClickWorth,LooksmaxxingChallengesUpgradeUnlocked,inLooksmaxxingChallenge,LooksmaxxingChallengesCompleted,backgroundToggle,chosenBackground,lastOfflineTime,MineOfRizzUnlocked,RizzmaxExtraChance,MoRCellHighlight,RizziteNRizzium,RizzalurgyUnlocked,newFormatToggle][basicIter];
        megaData += key + ":" + JSON.stringify(data[key]) + "|";
        basicIter++;
    }
    for (const [key, value] of Object.entries(data)) {
        if (key == "LooksmaxxingChallengesCompleted" || key == "MoRCellHighlight" || key == "RizziteNRizzium") {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    }
    megaData = megaData.slice(0, -1); // Remove last ||
    var encryptedData = fullEncrypt(megaData, "8675309");
    await dataReplace(
        USERNAME,
        PASSWORD,
        encryptedData
    ).then(() => {
        console.log("Data saved successfully!");
        if (!silent) {
            alert('Save Successful!');
        }
    }).catch(err => {
        console.error("Failed to save data:", err);
    });
}

function resetData() {
    data = {
        "clicks": 0,
        "CountryClubs": 0,
        "RiceWashers": 0,
        "Cars": 0,
        "RandomValue5xUpgrades": 0,
        "AutomaticRizzers": 0,
        "RandomAuto2xUpgrades": 0,
        "Rizzmaxxes": 0,
        "RizzPoints": 0,
        "OfflineProdHrs": 0,
        "RizzmaxClickWorth": 0,
        "LooksmaxxingChallengesUpgradeUnlocked": 0,
        "inLooksmaxxingChallenge": 0,
        "LooksmaxxingChallengesCompleted": [0,0,0,0,0],
        "backgroundToggle": 1,
        "chosenBackground": 1,
        "lastOfflineTime": 0,
        "MineOfRizzUnlocked": 0,
        "RizzmaxExtraChance": 0,
        "MoRCellHighlight": [1,1],
        "RizziteNRizzium": [0,0,0],
        "RizzalurgyUnlocked": 0,
        "newFormatToggle": 0
    }
    for (const [key, value] of Object.entries(data)) {
        window[key] = value;
        if (key == "LooksmaxxingChallengesCompleted" || key == "MoRCellHighlight" || key == "RizziteNRizzium") {
            localStorage.setItem(key, JSON.stringify(value));
        } else if (key == "clicks") {
            localStorage.setItem("mainClicks", value);
        } else {
            localStorage.setItem(key, value);
        }
    }
    updateVisuals();
}

function setClickProcesses0andahalf() {
    document.getElementById('saveButton').onclick = function () {
        saveData();
        document.getElementById('saveButton').innerHTML = "Saved!";
        setTimeout(function () {
            document.getElementById('saveButton').innerHTML = "Save Game";
        }, (3 * 1000));
    };

    document.getElementById('resetButton').onclick = function () {
        if (confirm("Are you sure you want to reset your game?") == true) {
            if (confirm("Are you really really sure?") == true) {
                if (confirm("Like 100% positive?") == true) {
                    if (confirm("Okay I'll believe you this time.") == true) {
                        resetData();
                        document.getElementById('resetButton').innerHTML = "Game has been Reset!";
                        setTimeout(function () {
                            document.getElementById('resetButton').innerHTML = "Reset Game";
                        }, (3 * 1000));
                    }
                }
            }
        }
    };
}

function periodicSave() {
    saveData(true);
}

window.onbeforeunload = function () {
    lastOfflineTime = Date.now();
    saveData();
    alert("Your game has been saved.");
}

setInterval(periodicSave, 120 * 1000);