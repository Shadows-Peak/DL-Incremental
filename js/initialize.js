var clicks = 0;

var RandomValue5xUpgrades = 0;
var RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades];

var CountryClubs = 0;
var CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));

var RiceWashers = 0;
var RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));



try{
    clicks = Number(localStorage.getItem('mainClicks'));
    CountryClubs = Number(localStorage.getItem('CountryClubs'));
    CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
    RiceWashers = Number(localStorage.getItem('RiceWashers'));
    RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));
    RandomValue5xUpgrades = Number(localStorage.getItem('RandomValue5xUpgrades'));
    RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades]
} catch(error) {
    console.error(error);
    clicks = 0;
    CountryClubs = 0;
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