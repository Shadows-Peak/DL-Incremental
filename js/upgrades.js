function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
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