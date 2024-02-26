var clicks = 0;
try{
    clicks = Number(localStorage.getItem('mainClicks'));
} catch(error) {
    console.error(error);
    clicks = 0;
}
localStorage.setItem('pageLoadCount', newPageLoadCountValue);