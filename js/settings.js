document.getElementById('BackgroundToggleButton').onclick = function() {
    backgroundToggle = 1 - backgroundToggle;
    document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    updateBackgrounds();
};

document.getElementById('ThemeChangeButton').onclick = function() {
    if (chosenBackground == 1) {
        chosenBackground = 2;
    } else if (chosenBackground == 2) {
        chosenBackground = 1;
    }
    document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark"][chosenBackground-1];
    updateBackgrounds();
};