var clicks = 0;
try{
    clicks = Number(localStorage.getItem('mainClicks'));
} catch(error) {
    console.error(error);
    clicks = 0;
}

function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
    } catch(error) {
        console.error(error);
    }
}