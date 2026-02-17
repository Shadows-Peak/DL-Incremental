async function menuLoad() {
    // HTML Load
    fetch('index.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        document.body.innerHTML = doc.body.innerHTML;
        document.getElementById('currencyCounter').style.display = 'none';

        clearInterval(gameLoopInterval);
        console.log("MENU LOAD");
        bodyLoad();
        updateBackgrounds();

        // Event Listeners

        console.log("SHOULDNT BE RUNNING!");
        
        try{
            document.getElementById('signUp').removeEventListener('click',signUpRun);
            document.getElementById('login').removeEventListener('click',loginRun);
            document.getElementById('backButton').removeEventListener('click',backButtonRun);
            document.removeEventListener('submit',submitRun);
        } catch(error) {
            console.log("No event listeners to remove")
        }

        document.getElementById('signUp').addEventListener('click', signUpRun);
        document.getElementById('login').addEventListener('click', loginRun);
        document.addEventListener('submit', submitRun);
    }).catch(error => alert(error));
}
window.menuLoad = menuLoad;