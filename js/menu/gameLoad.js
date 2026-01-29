function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var gameActive = false;;

async function gameLoad() {
    fetch('index.html')
    .then(response => response.text())
    .then(html => {
        // this could be bugged

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        document.body.innerHTML = doc.body.innerHTML;

        clearInterval(gameLoop);
        currentRoom = 1;
        gameActive = true;
        bodyLoad();
        updateBackgrounds();

        console.log("I ran!")
        
        // Event Listeners
        const logoutButton = document.getElementById('logoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', async function () {
                await saveData();
                currentRoom = 7;
                gameActive = false;
                menuLoad();
                updateBackgrounds();
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('logged_in');
                localStorage.removeItem('first_load');
            });
        } else {
            console.warn('logoutButton element not found.');
        }
    }).catch(error => alert(error));
}
window.gameLoad = gameLoad;
