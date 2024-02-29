document.getElementById('BackgroundToggleButton').onclick = function() {
    backgroundToggle = !(backgroundToggle);
    document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    updateBackgrounds();
};