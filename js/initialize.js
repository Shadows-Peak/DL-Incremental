var lastOfflineTime = 0;

var backgroundToggle = 1;
var chosenBackground = 1; // 1 for Light, 2 for Dark, 3 for Cream

var clicks = 0;

var Rizzmaxxes = 0;
var RizzPoints = 0;

var RandomValue5xUpgrades = 0;

var RandomAuto2xUpgrades = 0;

var AutomaticRizzers = 0;

var CountryClubs = 0;

var RiceWashers = 0;

var OfflineProdHrs = 0;
var RizzmaxClickWorth = 0;
var LooksmaxxingChallengesUpgradeUnlocked = 0;

var inLooksmaxxingChallenge = 0;
var LooksmaxxingChallengesCompleted = [0,0,0,0];



function grabCost(Item) {
    var allCosts = {
        "RandomValue5xUpgrades": [2500,5000,15000,50000,150000][RandomValue5xUpgrades],
        "RandomAuto2xUpgrades": [15000,35000,75000,150000,500000][RandomAuto2xUpgrades],
        "AutomaticRizzers": 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)),
        "CountryClubs": Math.ceil(Math.floor(1.75 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 1.5)) * (CountryClubs + 1)),
        "RiceWashers": Math.ceil(500*Math.floor(2 ** RiceWashers) * Math.log(7 * ((RiceWashers + 1) ** 1.5)) * (RiceWashers + 1)),
        "OfflineProdHrs": Math.ceil(1.5*((OfflineProdHrs)**3.5))+1,
        "RizzmaxClickWorth": (2**(Math.floor(RizzmaxClickWorth/50)))*(Math.ceil(Math.ceil(2/3*((RizzmaxClickWorth)**0.5))*(Math.log(RizzmaxClickWorth+1)))+1),
        "LooksmaxxingChallengesUpgradeUnlocked": Boolean(LooksmaxxingChallengesUpgradeUnlocked) ? -1 : 100,
    }
    return(allCosts[Item]);
}

function grabVisualCost(Item) {
    return(abbrev(grabCost(Item)));
}

function RizzPointgain() {
    if (clicks >= 25000) {
      return(Math.floor(Math.log(clicks/25000)/Math.log(1.05)));
    } else {
      return(0);
    }
}

try{
    backgroundToggle = Number(localStorage.getItem('backgroundToggle'));
    chosenBackground = Number(localStorage.getItem('chosenBackground'));
    if (chosenBackground == 0) {
        chosenBackground = 1;
    }
    clicks = Number(localStorage.getItem('mainClicks'));
    CountryClubs = Number(localStorage.getItem('CountryClubs'));
    RiceWashers = Number(localStorage.getItem('RiceWashers'));
    RandomValue5xUpgrades = Number(localStorage.getItem('RandomValue5xUpgrades'));
    RandomAuto2xUpgrades = Number(localStorage.getItem('RandomAuto2xUpgrades'));
    AutomaticRizzers = Number(localStorage.getItem('AutomaticRizzers'));
    Rizzmaxxes = Number(localStorage.getItem('Rizzmaxxes'));
    RizzPoints = Number(localStorage.getItem('RizzPoints'));
    OfflineProdHrs = Number(localStorage.getItem('OfflineProdHrs'));
    RizzmaxClickWorth = Number(localStorage.getItem('RizzmaxClickWorth'));
    LooksmaxxingChallengesUpgradeUnlocked = Number(localStorage.getItem('LooksmaxxingChallengesUpgradeUnlocked'));
    inLooksmaxxingChallenge = Number(localStorage.getItem('inLooksmaxxingChallenge'));
    LooksmaxxingChallengesCompleted = JSON.parse(localStorage.getItem('LooksmaxxingChallengesCompleted'));
    lastOfflineTime = Number(localStorage.getItem('lastOfflineTime'));
} catch(error) {
    console.error(error);
    clicks = 0;
    CountryClubs = 0;
    RiceWashers = 0;
    RandomValue5xUpgrades = 0;
    RandomAuto2xUpgrades = 0;
    AutomaticRizzers = 0;
    backgroundToggle = 1;
    chosenBackground = 1;
    Rizzmaxxes = 0;
    RizzPoints = 0;
    OfflineProdHrs = 0;
    RizzmaxClickWorth = 0;
    LooksmaxxingChallengesUpgradeUnlocked = 0;
    inLooksmaxxingChallenge = 0;
    LooksmaxxingChallengesCompleted = [0,0,0,0];
    lastOfflineTime = 0;
}

function abbrev(number) {
    if (number == 0) {
        return(number)
    } else {
        var zeros = (3*Math.floor(Math.floor(Math.log10(number))/3));
    }
    if (Math.abs(zeros) < 3) {
        return(number);
    }
    var AbbrevList = {
        0: "",
        3: "K",
        6: "M",
        9: "B",
        12: "T",
        15: "Qd",
        18: "Qn",
        21: "Sx",
        24: "Sp",
        27: "Oc",
        30: "No",
        33: "Dc",
        36: "Ud",
        39: "Dd",
        42: "Td",
        45: "Qad",
        48: "Qnd",
        51: "Sxd",
        54: "Spd",
        57: "Od",
        60: "Nd",
        63: "Vg",
        66: "Uvg",
        69: "Dvg",
        72: "Tvg",
        75: "Qavg",
        78: "Qnvg",
        81: "Sxvg",
        84: "Spvg",
        87: "Ovg",
        90: "Nvg",
        93: "Tg",
        96: "Utg",
        99: "Dtg",
        102: "Ttg",
        105: "Qatg",
        108: "Qntg",
        111: "Sxtg",
        114: "Sptg",
        117: "Otg",
        120: "Ntg"
    }
    var finalAbbrev = AbbrevList[zeros];
    if (typeof finalAbbrev === "undefined") {
        finalAbbrev = "E"+zeros;
    }
    return((Math.floor((number/(10**zeros))*100)/100).toString()+finalAbbrev);
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

function updateBackgrounds() {
    if (chosenBackground == 1) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            themedButtons[i].style.backgroundColor = "rgb(240, 240, 240)";
        }
    } else if (chosenBackground == 2) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            themedButtons[i].style.backgroundColor = "rgb(64, 66, 71)";
        }
    } else if (chosenBackground == 3) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            themedButtons[i].style.backgroundColor = "rgb(209, 193, 161)";
        }
    }
    if (backgroundToggle == 1) {
        if (currentRoom == 0) {
            document.body.style.backgroundImage = "url('images/otherDilyanLopez.jpg')";
        } else if (currentRoom == 1) {
            document.body.style.backgroundImage = "url('images/dilyanLopez.jpg')";
        } else if (currentRoom == 2) {
            document.body.style.backgroundImage = "url('images/RiceWashFacility.png')";
        } else if (currentRoom == 3) {
            document.body.style.backgroundImage = "url('images/dilyanLopez2.jpg')";
        } else if (currentRoom == 4) {
            document.body.style.backgroundImage = "url('images/dilyanLopez3.jpg')";
        }
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
    } else {
        if (chosenBackground == 1) {
            document.body.style.backgroundColor = "rgb(255, 255, 255)";
        } else if (chosenBackground == 2) {
            document.body.style.backgroundColor = "rgb(42, 44, 48)";
        } else if (chosenBackground == 3) {
            document.body.style.backgroundColor = "rgb(240, 222, 187)";
        }
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
    }
}

function isEqual(a,b) {
    if (a == b) {
        return(true);
    } else {
        return(false);
    }
}

function updateVisuals() {
    try {
        if (Rizzmaxxes > 0) {
            var LooksmaxChallengeText = [""," <b><em>Bye Bye!</em></b>"," <b><em>Edging Maestro</em></b>"," <b><em>Stone-Faced Mogging</em></b>"," <b><em>Rags to Riches</em></b>"][inLooksmaxxingChallenge];
            document.getElementById('currencyCounter').innerHTML = "<b>"+abbrev(clicks)+"</b> Dilyan Points <b>"+abbrev(RizzPoints)+"</b> Rizz Points"+LooksmaxChallengeText;
            setDisplay('2xRandomAutoUpgradeButton', 1);
            setDisplay('RizzmaxUpgrades', 1);
        } else {
            document.getElementById('currencyCounter').innerHTML = "<b>"+abbrev(clicks)+"</b> Dilyan Points";
            setDisplay('2xRandomAutoUpgradeButton', 0);
            setDisplay('RizzmaxUpgrades', 0);
        }
        document.getElementById('counter').innerHTML = "You have: <b>"+abbrev(clicks)+"</b> Dilyan Points";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+abbrev(CountryClubs)+"): Cost: <b>"+grabVisualCost('CountryClubs')+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+abbrev(RiceWashers)+"): Cost: <b>"+grabVisualCost('RiceWashers')+"</b>";
        if (typeof grabCost("RandomValue5xUpgrades") === "undefined") {
            document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): <b>MAXED</b>";
        } else {
            document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomValue5xUpgrades')+"</b>";
        }
        if (typeof grabCost("RandomAuto2xUpgrades") === "undefined") {
            document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): <b>MAXED</b>";
        } else {
            document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomAuto2xUpgrades')+"</b>";
        }
        document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer ("+abbrev(AutomaticRizzers)+"): Cost: <b>"+grabVisualCost('AutomaticRizzers')+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark","Cream"][chosenBackground-1];
        document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+"+abbrev(RizzPointgain())+" Points</b>";
        document.getElementById('OfflineProduction1Button').innerHTML = "Offline Production (+"+abbrev(OfflineProdHrs)+" hr(s)): Cost: <b>"+grabVisualCost('OfflineProdHrs')+"</b> RP";
        document.getElementById('RizzClickWorthButton').innerHTML = "Click Worth (+"+abbrev(RizzmaxClickWorth)+"%): Cost: <b>"+grabVisualCost('RizzmaxClickWorth')+"</b> RP";
        if (grabCost('LooksmaxxingChallengesUpgradeUnlocked') == -1) {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: <b>Unlocked</b>";
        } else {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: Cost: <b>"+grabVisualCost('LooksmaxxingChallengesUpgradeUnlocked')+"</b> RP";
        }
        // Looksmaxxing Challenges
        if (inLooksmaxxingChallenge != 0) {
            document.getElementById('LMC1Button').innerHTML = (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start");
            document.getElementById('LMC2Button').innerHTML = (isEqual(inLooksmaxxingChallenge,2) ? "End Challenge" : "Cannot Start");
            document.getElementById('LMC3Button').innerHTML = (isEqual(inLooksmaxxingChallenge,3) ? "End Challenge" : "Cannot Start");
            document.getElementById('LMC4Button').innerHTML = (isEqual(inLooksmaxxingChallenge,4) ? "End Challenge" : "Cannot Start");
        } else {
            document.getElementById('LMC1Button').innerHTML = "Begin";
            document.getElementById('LMC2Button').innerHTML = "Begin";
            document.getElementById('LMC3Button').innerHTML = "Begin";
            document.getElementById('LMC4Button').innerHTML = "Begin";
        }
    } catch(error) {
        console.error(error);
    }
}

function offlineProgress() {
    if (OfflineProdHrs > 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }
        clicks += Math.floor(0.1*(Math.floor(timeDifferenceSeconds) * (gameTick) * (AutomaticRizzers) * (1 + RiceWashers)));
        lastOfflineTime = 0;

        alert("You gained "+Math.floor(0.1*(Math.floor(timeDifferenceSeconds) * (AutomaticRizzers) * (1 + RiceWashers)))+" clicks while you were gone! "+timeDifferenceSeconds);
        updateVisuals();
    }
}


if (typeof console  != "undefined") 
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
    document.getElementById('debugDiv').innerHTML += ('<p>' + message + '</p>');
};
console.error = console.debug = console.info =  console.log