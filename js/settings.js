function setClickProcesses0() {
    document.getElementById('BackgroundToggleButton').onclick = function() {
        backgroundToggle = 1 - backgroundToggle;
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        updateBackgrounds();
    };
    
    document.getElementById('ThemeChangeButton').onclick = function() {
        if (chosenBackground == 1) {
            chosenBackground = 2;
        } else if (chosenBackground == 2) {
            chosenBackground = 3;
        } else if (chosenBackground == 3) {
            chosenBackground = 1;
        }
        document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark","Cream"][chosenBackground-1];
        updateBackgrounds();
    };
    
    document.getElementById('fixButton').onclick = function() {
        let FixData = {
            "clicks": 0,
            "CountryClubs": 0,
            "RiceWashers": 0,
            "Cars": 0,
            "Cheater": false,
            "RandomValue5xUpgrades": 0,
            "AutomaticRizzers": 0,
            "clicksIn6": 0,
            "runsIn6": 0,
            "RandomAuto2xUpgrades": 0,
            "Rizzmaxxes": 0,
            "RizzPoints": 0,
            "OfflineProdHrs": 0,
            "RizzmaxClickWorth": 0,
            "LooksmaxxingChallengesUpgradeUnlocked": 0,
            "inLooksmaxxingChallenge": 0,
            "LooksmaxxingChallengesCompleted": [0,0,0,0,0,0],
            "timePlayed": 0,
            "backgroundToggle": 1,
            "chosenBackground": 1,
            "lastOfflineTime": 0,
            "MineOfRizzUnlocked": 0,
            "RizzmaxExtraChance": 0,
            "MoRCellHighlight": [1,1],
            "RizziteNRizzium": [0,0,0],
            "RizzalurgyUnlocked": 0,
            "smeltingTime": 0,
            "hasSmelted": false,
            "newFormatToggle": 0
        };
        for (const [key, value] of Object.entries(FixData)) {
            if (key == "LooksmaxxingChallengesCompleted" || key == "MoRCellHighlight" || key == "RizziteNRizzium") {
                if (localStorage.getItem(key) == null || localStorage.getItem(key) == 0) {window[key] = value;}
                if (window[key] == null || window[key] == 0) {window[key] = value;}
                if (key == "LooksmaxxingChallengesCompleted" && window[key].length < 6) {window[key].push(0);}
                if (key == "MoRCellHighlight" && window[key].length < 2) {window[key].push(1);}
                if (key == "RizziteNRizzium" && window[key].length < 3) {window[key].push(0);}
            } else {
                if (localStorage.getItem(key) == null) {window[key] = value;}
                if (window[key] == null) {window[key] = value;}
            }  
        }
        updateVisuals();
    }
    
    document.getElementById('NewFormatToggleButton').onclick = function() {
        newFormatToggle = 1 - newFormatToggle;
        document.getElementById('NewFormatToggleButton').innerHTML = "Toggle Better Format: "+["On","Off"][newFormatToggle];
        updateBackgrounds();
        updateVisuals();
    }
    
    document.getElementById('devB').onclick = function() {
        let Devpass = prompt("Password?");
        if (Devpass == "!S3cr3t") {
            let Devcurr = prompt("Currency Type?");
            let Devamt = prompt("Amount?");
            eval(Devcurr+" = "+Devamt);
            Cheater = true;
            updateVisuals();
        } else {
            alert("stop trying to active my dev tools");
        }
    };

    document.getElementById('logoutButton2').onclick = async function() {
        await saveData();
        resetData(true);
        Rizzmaxxes = 0;
        MineOfRizzUnlocked = 0;
        hasSmelted = false;
        clearInterval(gameLoop);
        currentRoom = 7;
        gameActive = false;
        menuLoad();
        updateBackgrounds();
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('logged_in');
        localStorage.removeItem('first_load');
    }
}