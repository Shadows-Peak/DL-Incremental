function saveData() {
    localStorage.setItem('mainClicks', clicks);
}

document.getElementById('saveButton').onclick = function() {
    localStorage.setItem('mainClicks', clicks);
    document.getElementById('saveButton').innerHTML = "Saved!";
    setTimeout(function() {
      document.getElementById('saveButton').innerHTML = "Save Game";
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