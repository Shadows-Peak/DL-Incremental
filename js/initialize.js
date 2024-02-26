var clicks = 0;
try{
    clicks = Number(localStorage.getItem('mainClicks'));
} catch(error) {
    console.error(error);
    clicks = 0;
}

function updateVisuals() {
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
}

updateVisuals();