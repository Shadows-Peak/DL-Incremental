function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function gameLoad() {

    // this could be bugged

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    document.body.innerHTML = doc.body.innerHTML;
    
    setInterval(GameTick, 10);
    
    // Event Listeners
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            menuLoad();
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('logged_in');
            localStorage.removeItem('first_load');
        });
    } else {
        console.warn('logoutButton element not found.');
    }
}
window.gameLoad = gameLoad;
