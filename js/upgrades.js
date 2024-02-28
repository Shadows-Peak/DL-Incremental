function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
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
document.getElementById('RiceWasherButton').onclick = function() {
    if (clicks >= RiceWasherCost) {
        clicks -= RiceWasherCost;
        RiceWashers++;
        RiceWasherCost = RiceWasherCost = Math.ceil(1500*Math.floor(1.5 ** RiceWashers) * Math.log(6 * ((RiceWashers + 1) ** 2.3)) * (RiceWashers + 1));
        updateVisuals();
    }
}