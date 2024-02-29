document.getElementById('BackgroundToggleButton').onclick = function() {
    backgroundToggle = 1 - backgroundToggle;
    document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    updateBackgrounds();
};