function saveData() {
    localStorage.setItem('mainClicks', clicks);
}

function resetData() {
    clicks = 0;
    localStorage.setItem('mainClicks', 0);
    updateVisuals();
}

document.getElementById('saveButton').onclick = function() {
    localStorage.setItem('mainClicks', clicks);
    document.getElementById('saveButton').innerHTML = "Saved!";
    setTimeout(function() {
      document.getElementById('saveButton').innerHTML = "Save Game";
    }, (3 * 1000));
};

document.getElementById('resetButton').onclick = function() {
    resetData();
    document.getElementById('resetButton').innerHTML = "Game has been Reset!";
    setTimeout(function() {
      document.getElementById('resetButton').innerHTML = "Reset Game";
    }, (3 * 1000));
};

function periodicSave() {
    saveData();
}

window.onbeforeunload = function(){
    saveData();
    alert("Your game has been saved.")
}

setInterval(periodicSave, 120*1000);