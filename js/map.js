const map = [0,1,2];
var currentRoom = 1;

function updateVisuals() {
    try {
        document.getElementById('counter').innerHTML = "You have: <b>"+clicks+"</b> clicks";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+CountryClubs+"): Cost: <b>"+CountryClubCost+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+RiceWashers+"): Cost: <b>"+RiceWasherCost+"</b>";
        document.getElementById('5xRandomValueUpgradeButton').innerHTML = "Buy 5x Random Value Upgrade ("+RandomValue5xUpgrades+"): Cost: <b>"+RandomValue5xUpgradesCost+"</b>";
    } catch(error) {
        console.error(error);
    }
}

function setDisplay(object, value) {
    var finalVal
    if (value == 0) {
        finalVal = "none";
    } else {
        finalVal = "initial";
    }
    document.getElementById(object).style.display = finalVal;
}

window.addEventListener('keydown', e=>{
    if (e.key == "w" || e.key == "W" || e.key == "ArrowUp") move("uMap", currentRoom)
    if (e.key == "a" || e.key == "A" || e.key == "ArrowLeft") move("lMap", currentRoom)
    if (e.key == "s" || e.key == "S" || e.key == "ArrowDown") move("dMap", currentRoom)
    if (e.key == "d" || e.key == "D" || e.key == "ArrowRight") move("rMap", currentRoom)
});

function move(direction, FcurrentRoom) {
    movement = {
        "lMap": -1,
        "rMap": 1,
        "uMap": 0,
        "dMap": 0,
    };
    if (FcurrentRoom == 0) {
        if (direction == "lMap") {
            return
        } else {
            currentRoom = currentRoom + movement[direction];
        }
    } else if (FcurrentRoom == 2) {
        if (direction == "rMap") {
            return
        } else {
            currentRoom = currentRoom + movement[direction];
        }
    }
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
            "room2Stuff": 0
        }
    } else if (FcurrentRoom == 1) {
        disablesList = [1,1,0,0]
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 1,
            "room2Stuff": 0
        }
    } else if (FcurrentRoom == 2) {
        disablesList = [1,0,0,0]
        extraDisables = {
            "room0Stuff": 0,
            "room1Stuff": 0,
            "room2Stuff": 1
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