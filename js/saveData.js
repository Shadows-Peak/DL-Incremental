data = {
    "mainClicks": 0,
    "CountryClubs": 0,
    "RiceWashers": 0,
    "RandomValue5xUpgrades": 0
}

function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
    } catch(error) {
        console.error(error);
    }
}

function saveData() {
    var basicIter = 0;
    for (const key of Object.keys(data)) {
        data[key] = [clicks,CountryClubs,RiceWashers,RandomValue5xUpgrades][basicIter];
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
        "RandomValue5xUpgrades": 0
    }
    for (const [key, value] of Object.entries(data)) {
        eval(key + " = " + value);
        localStorage.setItem(key, value);
    }
    CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
    RiceWasherCost = RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));
    RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades];
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
    saveData();
    alert("Your game has been saved.")
}

setInterval(periodicSave, 120 * 1000);