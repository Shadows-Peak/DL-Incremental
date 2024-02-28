data = {
    "mainClicks": 0,
    "CountryClubs": 0
}

function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
    } catch(error) {
        console.error(error);
    }
}

function saveData() {
    var basicIter = 0;
    for (const key of Object.keys(data)) {
        data[key] = [clicks,CountryClubs][basicIter];
        basicIter++;
    }
    for (const [key, value] of Object.entries(data)) {
        localStorage.setItem(key, value);
    }
}

function resetData() {
    data = {
        "clicks": 0,
        "CountryClubs": 0
    }
    for (const [key, value] of Object.entries(data)) {
        eval(key + " = " + value);
        localStorage.setItem(key, value);
    }
    CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
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