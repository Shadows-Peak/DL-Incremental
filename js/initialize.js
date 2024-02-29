var backgroundToggle = 1;

var clicks = 0;

var RandomValue5xUpgrades = 0;
var RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades];

var RandomAuto2xUpgrades = 0;
var RandomAuto2xUpgradesCost = [25000,50000,150000,750000,15000000][RandomAuto2xUpgrades];

var AutomaticRizzers = 0;
var AutomaticRizzerCost = 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4));

var CountryClubs = 0;
var CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));

var RiceWashers = 0;
var RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));



try{
    backgroundToggle = Number(localStorage.getItem('backgroundToggle'));
    clicks = Number(localStorage.getItem('mainClicks'));
    CountryClubs = Number(localStorage.getItem('CountryClubs'));
    CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
    RiceWashers = Number(localStorage.getItem('RiceWashers'));
    RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));
    RandomValue5xUpgrades = Number(localStorage.getItem('RandomValue5xUpgrades'));
    RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades]
    RandomAuto2xUpgrades = Number(localStorage.getItem('RandomAuto2xUpgrades'));
    RandomAuto2xUpgradesCost = [25000,50000,150000,750000,15000000][RandomAuto2xUpgrades];
    AutomaticRizzers = Number(localStorage.getItem('AutomaticRizzers'));
    AutomaticRizzerCost = 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4));
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
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
        document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+RandomAuto2xUpgrades+"): Cost: <b>"+RandomAuto2xUpgradesCost+"</b>";
        document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer ("+AutomaticRizzers+"): Cost: <b>"+AutomaticRizzerCost+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    } catch(error) {
        console.error(error);
    }
}