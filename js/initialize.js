var backgroundToggle = 1;

var clicks = 0;

var Rizzmaxxes = 0;
var RizzPoints = 0;

var RandomValue5xUpgrades = 0;

var RandomAuto2xUpgrades = 0;

var AutomaticRizzers = 0;

var CountryClubs = 0;

var RiceWashers = 0;



function grabCost(Item) {
    var allCosts = {
        "RandomValue5xUpgrades": [5000,15000,50000,150000,30000000][RandomValue5xUpgrades],
        "RandomAuto2xUpgrades": [25000,50000,150000,750000,15000000][RandomAuto2xUpgrades],
        "AutomaticRizzers": 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)),
        "CountryClubs": Math.ceil(Math.floor(1.75 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 1.5)) * (CountryClubs + 1)),
        "RiceWashers": Math.ceil(500*Math.floor(2 ** RiceWashers) * Math.log(7 * ((RiceWashers + 1) ** 1.5)) * (RiceWashers + 1))
    }
    return(allCosts[Item]);
}

try{
    backgroundToggle = Number(localStorage.getItem('backgroundToggle'));
    clicks = Number(localStorage.getItem('mainClicks'));
    CountryClubs = Number(localStorage.getItem('CountryClubs'));
    RiceWashers = Number(localStorage.getItem('RiceWashers'));
    RandomValue5xUpgrades = Number(localStorage.getItem('RandomValue5xUpgrades'));
    RandomAuto2xUpgrades = Number(localStorage.getItem('RandomAuto2xUpgrades'));
    AutomaticRizzers = Number(localStorage.getItem('AutomaticRizzers'));
} catch(error) {
    console.error(error);
    clicks = 0;
    CountryClubs = 0;
    RiceWashers = 0;
    RandomValue5xUpgrades = 0;
    RandomAuto2xUpgrades = 0;
    AutomaticRizzers = 0;
    backgroundToggle = 1;
}

function setDisplay(object, value) {
    var finalVal
    if (value == 0) {
        finalVal = "none";
    } else {
        finalVal = "initial";
    }
    document.getElementById(object).style.display = finalVal;
}

function updateBackgrounds() {
    if (backgroundToggle == 1) {
        document.body.style.backgroundImage = "url('images/dilyanLopez.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
    }
}

function updateVisuals() {
    try {
        if (Rizzmaxxes > 0) {
            document.getElementById('currencyCounter').innerHTML = "<b>"+clicks+"</b> Dilyan Points <b>"+RizzPoints+"</b> Rizz Points";
            setDisplay('2xRandomAutoUpgradeButton', 1);
        } else {
            document.getElementById('currencyCounter').innerHTML = "<b>"+clicks+"</b> Dilyan Points";
            setDisplay('2xRandomAutoUpgradeButton', 0);
        }
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+grabCost('CountryClubs')+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+grabCost('RiceWashers')+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+grabCost('RandomValue5xUpgrades')+"</b>";
        document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+RandomAuto2xUpgrades+"): Cost: <b>"+grabCost('RandomAuto2xUpgrades')+"</b>";
        document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer ("+AutomaticRizzers+"): Cost: <b>"+grabCost('AutomaticRizzers')+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+"+RizzPointgain+" Points</b>";
    } catch(error) {
        console.error(error);
    }
}