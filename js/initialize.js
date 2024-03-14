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

var MineOfRizzUnlocked = 0;
var RizzmaxExtraChance = 0;

var MoRCellHighlight = [1,1];
var RizziteNRizzium = [0,0,0]; // Rizzite Progress, Rizzite, Rizzium



function grabCost(Item) {
    var allCosts = {
        "RandomValue5xUpgrades": [2500,5000,15000,50000,150000][RandomValue5xUpgrades],
        "RandomAuto2xUpgrades": [15000,35000,75000,150000,500000][RandomAuto2xUpgrades],
        "AutomaticRizzers": 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)),
        "CountryClubs": Math.ceil(Math.floor(1.75 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 1.5)) * (CountryClubs + 1)),
        "RiceWashers": Math.ceil(500*Math.floor(2 ** RiceWashers) * Math.log(7 * ((RiceWashers + 1) ** 1.5)) * (RiceWashers + 1)),
        "OfflineProdHrs": Math.ceil(1.5*((OfflineProdHrs)**3.5))+1,
        "RizzmaxClickWorth": (2**(Math.floor(RizzmaxClickWorth/50)))*(Math.ceil(Math.ceil(2/3*((RizzmaxClickWorth)**0.5))*(Math.log(RizzmaxClickWorth+1)))+1),
        "LooksmaxxingChallengesUpgradeUnlocked": (Boolean(LooksmaxxingChallengesUpgradeUnlocked) ? -1 : 100),
        "RizzmaxExtraChance": (4*Math.floor(2.3**RizzmaxExtraChance)+(2**RizzmaxExtraChance)),
        "MineOfRizzUnlocked": (Boolean(MineOfRizzUnlocked) ? -1 : 250)
    }
    return(allCosts[Item]);
}

function LooksmaxCosts(Looksmax) {
    if (Looksmax == 1) {
        return(10 + 5*LooksmaxxingChallengesCompleted[0]*Math.floor(1.25**LooksmaxxingChallengesCompleted[0]));
    } else if (Looksmax == 2) {
        return(1 + 2*LooksmaxxingChallengesCompleted[1]*Math.floor(1.01**LooksmaxxingChallengesCompleted[1]));
    } else if (Looksmax == 3) {
        return(50 + 50*LooksmaxxingChallengesCompleted[2]*Math.floor(1.25**LooksmaxxingChallengesCompleted[2]));
    } else if (Looksmax == 4) {
        return(10 + 20*LooksmaxxingChallengesCompleted[3]*Math.floor(1.5**LooksmaxxingChallengesCompleted[3]));
    }
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
    MineOfRizzUnlocked = Number(localStorage.getItem('MineOfRizzUnlocked'));
    RizzmaxExtraChance = Number(localStorage.getItem('RizzmaxExtraChance'));
    MoRCellHighlight = JSON.parse(localStorage.getItem('MoRCellHighlight'));
    RizziteNRizzium = JSON.parse(localStorage.getItem('RizziteNRizzium'));
    try {
        if (LooksmaxxingChallengesCompleted == null || LooksmaxxingChallengesCompleted == 0) {
            LooksmaxxingChallengesCompleted = [0,0,0,0];
        }
        if (MoRCellHighlight == null || MoRCellHighlight == 0) {
            MoRCellHighlight = [0,0];
        }
        if (RizziteNRizzium == null || RizziteNRizzium == 0) {
            RizziteNRizzium = [0,0,0];
        }
    } catch(error) {
        console.log(error);
    }
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
            document.body.style.backgroundImage = "url('images/RiceWashFacility.jpg')";
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

function isLessThan(a,b) {
    if (a < b) {
        return(true);
    } else {
        return(false);
    }
}

function listSum(list) {
    var sum = 0;
    for (var i = 0; i < list.length; sum += list[i++]);
    return(sum);
}

var lastHighlight = [1,1];

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
        if (LooksmaxxingChallengesUpgradeUnlocked == 1 && listSum(LooksmaxxingChallengesCompleted) < 5) {
            setDisplay('RizzmaxUpg2Indicator', 1);
            setDisplay('RizzmaxUpgrades2',0);
        } else if (LooksmaxxingChallengesUpgradeUnlocked == 1 && listSum(LooksmaxxingChallengesCompleted) >= 5) {
            setDisplay('RizzmaxUpg2Indicator', 0);
            setDisplay('RizzmaxUpgrades2',1);
        } else {
            setDisplay('RizzmaxUpg2Indicator', 0);
            setDisplay('RizzmaxUpgrades2', 0);
        }
        document.getElementById('counter').innerHTML = "You have: <b>"+abbrev(clicks)+"</b> Dilyan Points";
        document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+abbrev(CountryClubs)+"): Cost: <b>"+grabVisualCost('CountryClubs')+"</b>";
        document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+abbrev(RiceWashers)+"): Cost: <b>"+grabVisualCost('RiceWashers')+"</b>";
        if (inLooksmaxxingChallenge == 0) {
            if (typeof grabCost("RandomValue5xUpgrades") === "undefined") {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = abbrev(5+LooksmaxxingChallengesCompleted[2])+"x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): <b>MAXED</b>";
            } else {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = abbrev(5+LooksmaxxingChallengesCompleted[2])+"x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomValue5xUpgrades')+"</b>";
            }
            if (typeof grabCost("RandomAuto2xUpgrades") === "undefined") {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = abbrev(2+LooksmaxxingChallengesCompleted[2])+"x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): <b>MAXED</b>";
            } else {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = abbrev(2+LooksmaxxingChallengesCompleted[2])+"x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomAuto2xUpgrades')+"</b>";
            }
        } else {
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
        }
        document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer ("+abbrev(AutomaticRizzers)+"): Cost: <b>"+grabVisualCost('AutomaticRizzers')+"</b>";
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark","Cream"][chosenBackground-1];
        if (clicks >= 25000) {
            document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+"+abbrev(RizzPointgain()+1)+" Points</b>";
        } else {
            document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+0 Points</b>";
        }
        document.getElementById('OfflineProduction1Button').innerHTML = "Offline Production (+"+abbrev(OfflineProdHrs)+" hr(s)): Cost: <b>"+grabVisualCost('OfflineProdHrs')+"</b> RP";
        document.getElementById('RizzClickWorthButton').innerHTML = "Click Worth (+"+abbrev(RizzmaxClickWorth)+"%): Cost: <b>"+grabVisualCost('RizzmaxClickWorth')+"</b> RP";
        if (grabCost('LooksmaxxingChallengesUpgradeUnlocked') == -1) {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: <b>Unlocked</b>";
        } else {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: Cost: <b>"+grabVisualCost('LooksmaxxingChallengesUpgradeUnlocked')+"</b> RP";
        }
        // Looksmaxxing Challenges
        document.getElementById('LMCDPMVisual').innerHTML = "Current Dilyan Point Multiplier: +<b>"+abbrev(5*listSum(LooksmaxxingChallengesCompleted))+"</b>%"
        if (inLooksmaxxingChallenge != 0) {
            document.getElementById('LMC1Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],10) ? (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC2Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],90) ? (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC3Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],5) ? (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC4Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],9) ? (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
        } else {
            document.getElementById('LMC1Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],10) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC2Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],90) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC3Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],5) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC4Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],9) ? "Begin" : "<b>MAXED</b>");
        }
        document.getElementById('LMC1D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(1))+" points without using any Rice Washers.";
        document.getElementById('LMC1B').innerHTML = "Current Bonus: +"+abbrev(10*LooksmaxxingChallengesCompleted[0])+"% Dilyan Point Multiplier";
        document.getElementById('LMC1C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[0])+"/10";
        document.getElementById('LMC2D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(2))+" point without clicking the main button and starting with 1 Automatic Rizzer.  Offline Progress is enabled at 50% efficiency. Automatic Rizzers use the formula of clicking in this challenge, and are affected by both random chance upgrades.";
        document.getElementById('LMC2B').innerHTML = "Current Bonus: +"+abbrev(LooksmaxxingChallengesCompleted[1])+"% Offline Value";
        document.getElementById('LMC2C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[1])+"/90";
        document.getElementById('LMC3D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(3))+" points without any random chance triggers or Automatic Rizzers.";
        document.getElementById('LMC3B').innerHTML = "Current Bonus: +"+abbrev(LooksmaxxingChallengesCompleted[2])+"x On All Random Multipliers";
        document.getElementById('LMC3C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[2])+"/5";
        document.getElementById('LMC4D').innerHTML = "In this challenge, you can use your rizzmax click worth upgrade. Everything is disabled aside from the clicking of the main button. Rizzmax for at least "+abbrev(LooksmaxCosts(4))+" points.";
        document.getElementById('LMC4B').innerHTML = "Current Bonus: +"+abbrev(LooksmaxxingChallengesCompleted[3])+" Dilyan Point Worth Per Country Club";
        document.getElementById('LMC4C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[3])+"/9";

        if (inLooksmaxxingChallenge == 0) {
            document.getElementById('RandomValueExplanatory').innerHTML = "The earlier upgrades labeled as 'Random Value Upgrade/Auto Value' function as follows: Each time you upgrade them, you gain an additional 10% chance to either receive "+abbrev(5+LooksmaxxingChallengesCompleted[2])+" times the usual value upon manual click or "+abbrev(2+LooksmaxxingChallengesCompleted[2])+" times the usual value upon automatic generation by a rizzer, depending on the specific upgrade purchased.";
        } else {
            document.getElementById('RandomValueExplanatory').innerHTML = "The earlier upgrades labeled as 'Random Value Upgrade/Auto Value' function as follows: Each time you upgrade them, you gain an additional 10% chance to either receive 2 times the usual value upon manual click or 5 times the usual value upon automatic generation by a rizzer, depending on the specific upgrade purchased.";
        }
        if (MineOfRizzUnlocked == 0) {
            document.getElementById('RmU2Upg1').innerHTML = "Unlock Mine of Rizz: Cost: <b>250</b> RP";
            document.getElementById('RmU2Upg2').innerHTML = "Unlock the Mine of Rizz to See This Upgrade";
        } else { 
            document.getElementById('RmU2Upg1').innerHTML = "Mine of Rizz: <b>UNLOCKED</b>";
            document.getElementById('RmU2Upg2').innerHTML = "Unlock the Rizzalurgy: Cost: <b>5</b> Rizzite [NOT IMPLEMENTED YET]";
        }
        if (RizzmaxExtraChance >= 10) {
            document.getElementById('RmU2Upg3').innerHTML = "Extra Odds to All Random Chance Upgrades (+"+abbrev(5*RizzmaxExtraChance)+"%): <b>MAXED</b>";
        } else {
            document.getElementById('RmU2Upg3').innerHTML = "Extra Odds to All Random Chance Upgrades (+"+abbrev(5*RizzmaxExtraChance)+"%): Cost: <b>"+grabVisualCost('RizzmaxExtraChance')+"</b> RP";
        }

        // Mine of Rizz
        document.getElementById('RizziteCollectionProgress').innerHTML = RizziteNRizzium[0]+"/10"
        document.getElementById('RizziteCounter').innerHTML = "<b>"+abbrev(RizziteNRizzium[1])+"</b>"
        lastHighlight = MoRCellHighlight;
        document.getElementById('MoRCellR'+MoRCellHighlight[0]+'C'+MoRCellHighlight[1]).backgroundColor = "rgb(255, 255, 0)"
    } catch(error) {
        console.error(error);
    }
}

function offlineProgress() {
    if (OfflineProdHrs > 0 && inLooksmaxxingChallenge == 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }
        clicks += Math.floor(((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) ));
        lastOfflineTime = 0;

        alert("You gained "+Math.floor(((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) ))+" clicks while you were gone! "+timeDifferenceSeconds);
        updateVisuals();
    } else if (inLooksmaxxingChallenge == 2) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }
        clicks += Math.floor((0.5)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (AutomaticRizzers) * (1 + CountryClubs) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) ));
        lastOfflineTime = 0;

        alert("You gained "+Math.floor((0.5)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (AutomaticRizzers) * (1 + CountryClubs) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) ))+" clicks while you were gone! "+timeDifferenceSeconds);
        updateVisuals(); 
    }
}