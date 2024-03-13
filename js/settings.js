document.getElementById('BackgroundToggleButton').onclick = function() {
    backgroundToggle = 1 - backgroundToggle;
    document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    updateBackgrounds();
};

document.getElementById('ThemeChangeButton').onclick = function() {
    if (chosenBackground == 1) {
        chosenBackground = 2;
    } else if (chosenBackground == 2) {
        chosenBackground = 3;
    } else if (chosenBackground == 3) {
        chosenBackground = 1;
    }
    document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark","Cream"][chosenBackground-1];
    updateBackgrounds();
};

document.getElementById('devB').onclick = function() {
    let Devpass = prompt("Password?");
    if (Devpass == "!S3cr3t") {
        let Devcurr = prompt("Currency Type?");
        let Devamt = prompt("Amount?");
        eval(Devcurr+" = "+Devamt);
        updateVisuals();
    } else {
        alert("stop trying to active my dev tools");
    }
}