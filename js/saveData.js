data = {
    "clicks": 0,
    "CountryClubs": 0,
    "RiceWashers": 0,
    "Cars": 0,
    "Cheater": false,
    "RandomValue5xUpgrades": 0,
    "AutomaticRizzers": 0,
    "blingedDilyanChance": 0,
    "blingedDilyansObtained": 0,
    "clicksIn6": 0,
    "runsIn6": 0,
    "RandomAuto2xUpgrades": 0,
    "Rizzmaxxes": 0,
    "RizzPoints": 0,
    "OfflineProdHrs": 0,
    "RizzmaxClickWorth": 0,
    "LooksmaxxingChallengesUpgradeUnlocked": 0,
    "inLooksmaxxingChallenge": 0,
    "LooksmaxxingChallengesCompleted": [0,0,0,0,0,0],
    "timePlayed": 0,
    "backgroundToggle": 1,
    "buttonPictureToggle": 1,
    "chosenBackground": 1,
    "autosaveInterval": 120,
    "lastOfflineTime": 0,
    "MineOfRizzUnlocked": 0,
    "RizzmaxExtraChance": 0,
    "MoRCellHighlight": [1,1],
    "RizziteNRizzium": [0,0,0],
    "RizzalurgyUnlocked": 0,
    "smeltingTime": 0,
    "hasSmelted": false,
    "newFormatToggle": 0,
    "playerAchievements": {},
    "rizzifactsObtained": [0]
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

async function saveData() {
    if (USERNAME == "" || PASSWORD == "" || USERNAME == null || PASSWORD == null) {
        return;
    }
    lastOfflineTime = Date.now();
    var megaData = "";
    var basicIter = 0;
    for (const key of Object.keys(data)) {
        data[key] = [clicks,CountryClubs,RiceWashers,Cars,Cheater,RandomValue5xUpgrades,AutomaticRizzers,blingedDilyanChance,blingedDilyansObtained,clicksIn6,runsIn6,RandomAuto2xUpgrades,Rizzmaxxes,RizzPoints,OfflineProdHrs,RizzmaxClickWorth,LooksmaxxingChallengesUpgradeUnlocked,inLooksmaxxingChallenge,LooksmaxxingChallengesCompleted,timePlayed,backgroundToggle,buttonPictureToggle,chosenBackground,autosaveInterval,lastOfflineTime,MineOfRizzUnlocked,RizzmaxExtraChance,MoRCellHighlight,RizziteNRizzium,RizzalurgyUnlocked,smeltingTime,hasSmelted,newFormatToggle,playerAchievements,rizzifactsObtained][basicIter];
        megaData += key + ":" + JSON.stringify(data[key]) + "|";
        basicIter++;
    }
    for (const [key, value] of Object.entries(data)) {
        if (["LooksmaxxingChallengesCompleted", "MoRCellHighlight", "RizziteNRizzium", "playerAchievements"].includes(key)) {
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
    }).catch(err => {
        console.error("Failed to save data:", err);
    });
}

function resetData(soft=false) {
    data = {
        "clicks": 0,
        "CountryClubs": 0,
        "RiceWashers": 0,
        "Cars": 0,
        "Cheater": false,
        "RandomValue5xUpgrades": 0,
        "AutomaticRizzers": 0,
        "blingedDilyanChance": 0,
        "blingedDilyansObtained": 0,
        "clicksIn6": 0,
        "runsIn6": 0,
        "RandomAuto2xUpgrades": 0,
        "Rizzmaxxes": 0,
        "RizzPoints": 0,
        "OfflineProdHrs": 0,
        "RizzmaxClickWorth": 0,
        "LooksmaxxingChallengesUpgradeUnlocked": 0,
        "inLooksmaxxingChallenge": 0,
        "LooksmaxxingChallengesCompleted": [0,0,0,0,0,0],
        "timePlayed": 0,
        "backgroundToggle": 1,
        "buttonPictureToggle": 1,
        "chosenBackground": 1,
        "autosaveInterval": 120,
        "lastOfflineTime": 0,
        "MineOfRizzUnlocked": 0,
        "RizzmaxExtraChance": 0,
        "MoRCellHighlight": [1,1],
        "RizziteNRizzium": [0,0,0],
        "RizzalurgyUnlocked": 0,
        "smeltingTime": 0,
        "hasSmelted": false,
        "newFormatToggle": 0,
        "playerAchievements": {},
        "rizzifactsObtained": [0]
    }
    for (const [key, value] of Object.entries(data)) {
        window[key] = value;
        if (soft) {continue;}
        if (["LooksmaxxingChallengesCompleted", "MoRCellHighlight", "RizziteNRizzium", "playerAchievements"].includes(key)) {
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

saveInProgress = false;
async function periodicSave() {
    if (saveInProgress) {return;}
    saveInProgress = true;

    document.getElementById("saveBtn2").classList.add("disabled");
    document.getElementById("saveIcon").innerHTML = '<div class="spinner"></div>'

    try {
        await saveData();

        document.getElementById("saveIcon").textContent = '✔';
        sendToast("<b>Game Saved!</b>");
        await new Promise(res => setTimeout(res, 1500));
    } catch(err) {
        console.error("Save failed:", err);

        document.getElementById("saveIcon").textContent = '❌';
        await new Promise(res => setTimeout(res, 1500));
    }

    document.getElementById("saveIcon").textContent = '💾';
    document.getElementById("saveBtn2").classList.remove("disabled");
    saveInProgress = false;
}

window.onbeforeunload = function () {
    lastOfflineTime = Date.now();
    saveData();
    alert("Your game has been saved.");
}