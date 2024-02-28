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

// Country Clubs
document.getElementById('CountryClubButton').onclick = function() {
    if (clicks >= CountryClubCost) {
        clicks -= CountryClubCost;
        CountryClubs++;
        CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
        updateVisuals();
    }
};
// Rice Washers
document.getElementById('RiceWasherButton').onclick = function() {
    if (clicks >= RiceWasherCost) {
        clicks -= RiceWasherCost;
        RiceWashers++;
        RiceWasherCost = RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));
        updateVisuals();
    }
}
// Random x5 Value Upgrade
document.getElementById('5xRandomValueUpgradeButton').onclick = function() {
    if (RandomValue5xUpgrades < 5) {
        if (clicks >= RandomValue5xUpgradesCost) {
            clicks -= RandomValue5xUpgradesCost;
            RandomValue5xUpgrades++;
            RandomValue5xUpgradesCost = [5000,15000,50000,150000,30000000][RandomValue5xUpgrades]
            updateVisuals();
        }
    }
}