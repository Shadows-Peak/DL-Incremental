function changeText(text){
    document.getElementById("charts").innerHTML = "New text!";
}

window.addEventListener('keydown', e=>{
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") changeText("Thanks for pressing: "+e.key)
})