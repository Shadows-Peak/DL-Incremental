var clicks = 0;
try{
    clicks = Number(localStorage.getItem('mainClicks'));
} catch(error) {
    console.error(error);
    clicks = 0;
}

window.onload = updateVisuals();
function updateVisuals() {
    document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
}