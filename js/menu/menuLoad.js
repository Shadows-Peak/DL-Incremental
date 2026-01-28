async function menuLoad() {

    // this could be bugged

    // Event Listeners
    
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
}
window.menuLoad = menuLoad;