var clicks = 0;

var CountryClubs = 0;
var CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));



try{
    clicks = Number(localStorage.getItem('mainClicks'));
    CountryClubs = Number(localStorage.getItem('CountryClubs'));
    CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
} catch(error) {
    console.error(error);
    clicks = 0;
    CountryClubs = 0;
}

function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
    } catch(error) {
        console.error(error);
    }
}