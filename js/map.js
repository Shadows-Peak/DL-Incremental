const map = [0,1,2,3,4];
var currentRoom = 1;

/*
function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
        document.getElementById('AutomaticRizzerButton').innerHTML = "Buy Automatic Rizzer ("+AutomaticRizzers+"): Cost: <b>"+AutomaticRizzerCost+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
    } catch(error) {
        console.error(error);
    }
}
*/

window.addEventListener('keydown', e=>{
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") move("uMap", currentRoom)
    if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") move("lMap", currentRoom)
    if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") move("dMap", currentRoom)
    if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") move("rMap", currentRoom)
});

function move(direction, FcurrentRoom) {
    movement = {
        "lMap": [-1,-1,-1,-1,1,1,0][currentRoom],
        "rMap": [1,1,1,1,0,-1,-1][currentRoom],
        "uMap": [0,5,3,1,0,0,0][currentRoom],
        "dMap": [0,0,0,0,-1,-3,-5][currentRoom],
    };
    // Can't go too far left or right
    if (direction == "rMap") {
        if (FcurrentRoom == 3 || FcurrentRoom == 4) {
            return
        } else {
            currentRoom = currentRoom + movement[direction];
        }
    } else if (direction == "lMap") {
        if (FcurrentRoom == 0 || FcurrentRoom == 6) {
            return
        } else {
            if (FcurrentRoom == 4 && MineOfRizzUnlocked == 0) {
                return;
            }
            if (FcurrentRoom == 5 && RizzalurgyUnlocked == 0) {
                return;
            }
            currentRoom = currentRoom + movement[direction];
        }
    }
    // Can't go too far up or down
    if (direction == "uMap" || direction == "dMap") {
        if (LooksmaxxingChallengesUpgradeUnlocked == 0 && FcurrentRoom == 3 && direction == "uMap") {
            return
        }
        if ((MineOfRizzUnlocked == 0 && FcurrentRoom == 4 && direction == "lMap") || (MineOfRizzUnlocked == 0 && FcurrentRoom == 2 && direction == "uMap")) {
            return
        }
        if ((FcurrentRoom == 5 && RizzalurgyUnlocked == 0 && direction == "lMap") || (FcurrentRoom == 1 && RizzalurgyUnlocked == 0 && direction == "uMap")) {
            return;
        }
        if ([0,4,5,6].includes(FcurrentRoom)) {
            if (direction == "uMap") {
                return
            } else {
                currentRoom = currentRoom + movement[direction];
            }
        } else if ([0,1,2,3].includes(FcurrentRoom)) {
            if (direction == "dMap") {
                return
            } else {
                currentRoom = currentRoom + movement[direction];
            }
        } else {
            currentRoom = currentRoom + movement[direction];
        }
    }
    updateBackgrounds();
    updateVisuals();
    disables(currentRoom);
}

function setRoom(room) {
    currentRoom = room;
    updateBackgrounds();
    updateVisuals();
    disables(currentRoom);
}

function disables(FcurrentRoom) {
    var disablesList = [0,0,0,0]
    var extraDisables;
    if (FcurrentRoom == 0) {
        disablesList = [0,1,0,0]
        extraDisables = {
            "room0Stuff": 1,
            "room1Stuff": 0,
            "room2Stuff": 0,
            "room3Stuff": 0,
            "room4Stuff": 0,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 1) {
        if (RizzalurgyUnlocked == 0) {
            disablesList = [1,1,0,0]
        } else {
            disablesList = [1,1,1,0]
        }
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 1,
            "room2Stuff": 0,
            "room3Stuff": 0,
            "room4Stuff": 0,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 2) {
        if (MineOfRizzUnlocked == 0) {
            disablesList = [1,1,0,0]
        } else {
            disablesList = [1,1,1,0];
        }
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 1,
            "room3Stuff": 0,
            "room4Stuff": 0,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 3) {
        if (LooksmaxxingChallengesUpgradeUnlocked == 0) {
            disablesList = [1,0,0,0]
        } else {
            disablesList = [1,0,1,0]
        }
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 0,
            "room3Stuff": 1,
            "room4Stuff": 0,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 4) {
        if (MineOfRizzUnlocked == 0) {
            disablesList = [0,0,0,1];
        } else {
            disablesList = [1,0,0,1];
        }
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 0,
            "room3Stuff": 0,
            "room4Stuff": 1,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 5) {
        if (RizzalurgyUnlocked == 0) {
            disablesList = [0,1,0,1]
        } else {
            disablesList = [1,1,0,1]
        }
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 0,
            "room3Stuff": 0,
            "room4Stuff": 0,
            "room5Stuff": 1,
            "room5Stuff2": 1,
            "room6Stuff": 0,
            "room6Stuff2": 0
        }
    } else if (FcurrentRoom == 6) {
        disablesList = [0,1,0,1]
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 0,
            "room3Stuff": 0,
            "room4Stuff": 0,
            "room5Stuff": 0,
            "room5Stuff2": 0,
            "room6Stuff": 1,
            "room6Stuff2": 1
        }
    }
    var DisableDict = {
        "lMap": disablesList[0],
        "rMap": disablesList[1],
        "uMap": disablesList[2],
        "dMap": disablesList[3]
    };
    for (const [key, value] of Object.entries(DisableDict)) {
        setDisplay(key, value);
    }
    try {
        for (const [key, value] of Object.entries(extraDisables)) {
            setDisplay(key, value);
        }
    } catch(error) {
        console.log("No extra disables. Does room not have content?");
    }
}