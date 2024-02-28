function cannotAfford(object) {
    var cur = document.getElementById(object).innerHTML;
    document.getElementById(object).innerHTML = "You cannot afford this!";
    setTimeout(function() {
      document.getElementById(object).innerHTML = cur;
    }, (3 * 1000));
}

// Country Clubs
var CountryClubs = 0;
var CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));

document.getElementById('CountryClubButton').onclick = function() {
    if (clicks >= CountryClubCost) {
        clicks -= CountryClubCost;
        CountryClubs++;
        CountryClubCost = Math.ceil(Math.floor(2.5 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 2)) * (CountryClubs + 1));
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
    } else {cannotAfford('CountryClubButton');}
 };