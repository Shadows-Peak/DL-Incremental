var lastOfflineTime = 0;

var timePlayed = 0;

var Cheater = false;

var backgroundToggle = 1;
var newFormatToggle = 0;
var chosenBackground = 1; // 1 for Light, 2 for Dark, 3 for Cream

var clicks = 0;

var Rizzmaxxes = 0;
var RizzPoints = 0;

var RandomValue5xUpgrades = 0;

var RandomAuto2xUpgrades = 0;

var AutomaticRizzers = 0;

var CountryClubs = 0;
var RiceWashers = 0;
var Cars = 0;

var OfflineProdHrs = 0;
var RizzmaxClickWorth = 0;
var LooksmaxxingChallengesUpgradeUnlocked = 0;

var inLooksmaxxingChallenge = 0;
var LooksmaxxingChallengesCompleted = [0,0,0,0,0]; // Bye Bye!, Edging Maestro, Stone-Faced Mogging, Rags to Riches, Ad Hominem

var MineOfRizzUnlocked = 0;
var RizzalurgyUnlocked = 0;
var RizzmaxExtraChance = 0;

var MoRCellHighlight = [1,1];
var RizziteNRizzium = [0,0,0]; // Rizzite Progress, Rizzite, Rizzium



function grabCost(Item) {
    var allCosts = {
        "RandomValue5xUpgrades": [2500,5000,15000,50000,150000][RandomValue5xUpgrades],
        "RandomAuto2xUpgrades": [15000,35000,75000,150000,500000][RandomAuto2xUpgrades],
        "AutomaticRizzers": 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)),
        "CountryClubs": Math.ceil(Math.floor(1.75 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 1.5)) * (CountryClubs + 1)),
        "RiceWashers": Math.ceil(400*Math.floor(2 ** RiceWashers) * Math.log(7 * ((RiceWashers + 1) ** 1.5)) * (RiceWashers + 1)),
        "Cars": 12000 + 10000*Cars + Math.ceil(300*Math.floor(2.3 ** Cars)*Math.ceil(Math.log((Cars*Cars+1)*((Cars+1)**3)))*Math.log(Cars+1)),
        "OfflineProdHrs": Math.ceil(1.5*((OfflineProdHrs)**3.5))+1,
        "RizzmaxClickWorth": (2**(Math.floor(RizzmaxClickWorth/50)))*(Math.ceil(Math.ceil(2/3*((RizzmaxClickWorth)**0.5))*(Math.log(RizzmaxClickWorth+1)))+1),
        "LooksmaxxingChallengesUpgradeUnlocked": (Boolean(LooksmaxxingChallengesUpgradeUnlocked) ? -1 : 100),
        "RizzmaxExtraChance": (4*Math.floor(2.3**RizzmaxExtraChance)+(2**RizzmaxExtraChance)),
        "MineOfRizzUnlocked": (Boolean(MineOfRizzUnlocked) ? -1 : 250),
        "RizzalurgyUnlocked": (Boolean(RizzalurgyUnlocked) ? -1 : 1)
    }
    return(allCosts[Item]);
}

function LooksmaxCosts(Looksmax) {
    if (Looksmax == 1) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (10 + 5*LooksmaxxingChallengesCompleted[0]*Math.floor(1.25**LooksmaxxingChallengesCompleted[0]))));
    } else if (Looksmax == 2) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (1 + 2*LooksmaxxingChallengesCompleted[1]*Math.floor(1.01**LooksmaxxingChallengesCompleted[1]))));
    } else if (Looksmax == 3) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (50 + 50*LooksmaxxingChallengesCompleted[2]*Math.floor(1.25**LooksmaxxingChallengesCompleted[2]))));
    } else if (Looksmax == 4) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (10 + 20*LooksmaxxingChallengesCompleted[3]*Math.floor(1.5**LooksmaxxingChallengesCompleted[3]))));
    } else if (Looksmax == 5) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (30 + 10*LooksmaxxingChallengesCompleted[4]*Math.floor(1.25**LooksmaxxingChallengesCompleted[4]))));
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

function abrevTime(seconds) {
    var mins = Math.floor(Math.floor(seconds) / 60);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    secs = Math.floor(seconds) % 60;
    return((days > 0 ? abbrev(days)+" Days: " : "")+(hrs > 0 ? hrs%24+"h " : "")+((mins > 0 && days < 10) ? mins%60+"m " : "")+(days <= 0 ? secs+"s" : ""));
}

function setDisplay(object, value) {
    var finalVal
    if (value == 0) {
        finalVal = "none";
    } else {
        finalVal = "initial";
    }
    try{
        document.getElementById(object).style.display = finalVal;
    } catch(error) {
        console.log(error);
    }
}

function updateBackgrounds() {
    if (newFormatToggle == 1 && currentRoom != 7) {
        document.querySelectorAll('button.freeButton').forEach(function(elem) {
            elem.classList.remove("freeButton");
        });
    } else {
        document.querySelectorAll('button:not(:is(.freeButton, .freeButtonPersist, .MoR))').forEach(function(elem) {
            elem.classList.add("freeButton");
        });
    }
    if (chosenBackground == 1) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            if (themedButtons[i].id == "leaderboard-table") {
                themedButtons[i].style.backgroundColor = "rgba(240, 240, 240, 0.6)";
                continue;
            }
            themedButtons[i].style.backgroundColor = "rgb(240, 240, 240)";
        }
    } else if (chosenBackground == 2) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            if (themedButtons[i].id == "leaderboard-table") {
                themedButtons[i].style.backgroundColor = "rgba(64, 66, 71, 0.6)";
                continue;
            }
            themedButtons[i].style.backgroundColor = "rgb(64, 66, 71)";
        }
    } else if (chosenBackground == 3) {
        themedButtons = document.getElementsByClassName("themed1");
        for(var i = 0; i < themedButtons.length; i++)
        {
            if (themedButtons[i].id == "leaderboard-table") {
                themedButtons[i].style.backgroundColor = "rgba(209, 193, 161, 0.6)";
                continue;
            }
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
        } else if (currentRoom == 7) {
            document.body.style.backgroundColor = "rgb(228, 210, 178)";
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPositionX = "center";
            document.body.style.backgroundPositionY = "center";
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
        if (currentRoom == 7) {
            document.body.style.backgroundColor = "rgb(228, 210, 178)";
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

function updateVisuals() {
    if (gameActive == false) {return;}
    try {
        if (Rizzmaxxes > 0) {
            var LooksmaxChallengeText = [""," <b><em>Bye Bye!</em></b>"," <b><em>Edging Maestro</em></b>"," <b><em>Stone-Faced Mogging</em></b>"," <b><em>Rags to Riches</em></b>"," <b><em>Ad Hominem</em></b>"][inLooksmaxxingChallenge];
            if (inLooksmaxxingChallenge == 5) {
                document.getElementById('currencyCounter').innerHTML = "<b>???</b> Dilyan Points <b>"+abbrev(RizzPoints)+"</b> Rizz Points"+LooksmaxChallengeText;
            } else {
                document.getElementById('currencyCounter').innerHTML = "<b>"+abbrev(clicks)+"</b> Dilyan Points <b>"+abbrev(RizzPoints)+"</b> Rizz Points"+LooksmaxChallengeText;
            }
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
        if (inLooksmaxxingChallenge == 5) {
            document.getElementById('counter').innerHTML = "You have: <b>???</b> Dilyan Points";
        } else {
            document.getElementById('counter').innerHTML = "You have: <b>"+abbrev(clicks)+"</b> Dilyan Points";
        }
        
        if (inLooksmaxxingChallenge != 5) {
            document.getElementById('CountryClubButton').innerHTML = "Buy Country Club ("+abbrev(CountryClubs)+"): Cost: <b>"+grabVisualCost('CountryClubs')+"</b>";
            document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer ("+abbrev(RiceWashers)+"): Cost: <b>"+grabVisualCost('RiceWashers')+"</b>";
            document.getElementById('CarsButton').innerHTML = "Buy "+(Cars>0 ? "Another " : "")+"Car ("+abbrev(Cars)+"): Cost: <b>"+grabVisualCost('Cars')+"</b>";
            document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer ("+abbrev(AutomaticRizzers)+"): Cost: <b>"+grabVisualCost('AutomaticRizzers')+"</b>";
        } else {
            document.getElementById('CountryClubButton').innerHTML = "Buy Country Club (???): Cost: <b>???</b>";
            document.getElementById('RiceWasherButton').innerHTML = "Buy Rice Washer (???): Cost: <b>???</b>";
            document.getElementById('CarsButton').innerHTML = "Buy Car (???): Cost: <b>???</b>";
            document.getElementById('AutomaticRizzerButton').innerHTML = "Automatic Rizzer (???): Cost: <b>???</b>";
        }
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
            if (typeof grabCost("RandomValue5xUpgrades") === "undefined" && inLooksmaxxingChallenge != 5) {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): <b>MAXED</b>";
            } else if (inLooksmaxxingChallenge != 5) {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomValue5xUpgrades')+"</b>";
            } else {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "???x Random Value Upgrade (???): Cost: <b>???</b>";
            }
            if (typeof grabCost("RandomAuto2xUpgrades") === "undefined" && inLooksmaxxingChallenge != 5) {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): <b>MAXED</b>";
            } else if (inLooksmaxxingChallenge != 5) {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomAuto2xUpgrades')+"</b>";
            } else {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "???x Random Auto Upgrade (???): Cost: <b>???</b>";
            }
        }
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        document.getElementById('ThemeChangeButton').innerHTML = "Current Theme: "+["Light","Dark","Cream"][chosenBackground-1];
        document.getElementById('NewFormatToggleButton').innerHTML = "Toggle Better Format: "+["Off","On"][newFormatToggle];
        if (clicks >= 25000) {
            document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+"+abbrev(RizzPointgain()+1)+" Points</b>";
        } else {
            document.getElementById('RizzmaxButton').innerHTML = "Rizzmax: <b>+0 Points</b>";    
        }
        document.getElementById('OfflineProduction1Button').innerHTML = "Offline Production (+"+abbrev(OfflineProdHrs)+" hr(s)): Cost: <b>"+grabVisualCost('OfflineProdHrs')+"</b> RP";
        document.getElementById('RizzClickWorthButton').innerHTML = "Click Worth (+"+abbrev(RizzmaxClickWorth*5)+"%): Cost: <b>"+grabVisualCost('RizzmaxClickWorth')+"</b> RP";
        if (grabCost('LooksmaxxingChallengesUpgradeUnlocked') == -1) {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: <b>Unlocked</b>";
        } else {
            document.getElementById('UnlockLooksmaxxingButton').innerHTML = "Looksmaxxing Challenges: Cost: <b>"+grabVisualCost('LooksmaxxingChallengesUpgradeUnlocked')+"</b> RP";
        }
        // Looksmaxxing Challenges
        document.getElementById('LMCDPMVisual').innerHTML = "Current Dilyan Point Multiplier: +<b>"+abbrev(5*listSum(LooksmaxxingChallengesCompleted))+"</b>%"
        if (inLooksmaxxingChallenge != 0) {
            document.getElementById('LMC1Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],10) ? (isEqual(inLooksmaxxingChallenge,1) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC2Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[1],90) ? (isEqual(inLooksmaxxingChallenge,2) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC3Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[2],5) ? (isEqual(inLooksmaxxingChallenge,3) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC4Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[3],9) ? (isEqual(inLooksmaxxingChallenge,4) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
            document.getElementById('LMC5Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[4],10) ? (isEqual(inLooksmaxxingChallenge,5) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
        } else {
            document.getElementById('LMC1Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],10) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC2Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[1],90) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC3Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[2],5) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC4Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[3],9) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC5Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[4],10) ? "Begin" : "<b>MAXED</b>");
        }
        document.getElementById('LMC1D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(1))+" points without using any Rice Washers or Cars.";
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
        document.getElementById('LMC5D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(5))+" points while being unable to see any points, upgrades, prices, or multipliers.";
        document.getElementById('LMC5B').innerHTML = "Current Bonus: -"+abbrev(3*LooksmaxxingChallengesCompleted[4])+"% Rizz Point Requirement for Looksmaxxing Challenge Completion";
        document.getElementById('LMC5C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[4])+"/10";

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
            if (RizzalurgyUnlocked == 0) {
                document.getElementById('RmU2Upg2').innerHTML = "Unlock the Rizzalurgy: Cost: <b>1</b> Rizzite";
            } else {
                document.getElementById('RmU2Upg2').innerHTML = "Unlock the Rizzalurgy: <b>UNLOCKED</b>";
            }
        }
        if (RizzmaxExtraChance >= 10) {
            document.getElementById('RmU2Upg3').innerHTML = "Extra Odds to All Random Chance Upgrades (+"+abbrev(5*RizzmaxExtraChance)+"%): <b>MAXED</b>";
        } else {
            document.getElementById('RmU2Upg3').innerHTML = "Extra Odds to All Random Chance Upgrades (+"+abbrev(5*RizzmaxExtraChance)+"%): Cost: <b>"+grabVisualCost('RizzmaxExtraChance')+"</b> RP";
        }

        // Mine of Rizz
        document.getElementById('RizziteCollectionProgress').innerHTML = RizziteNRizzium[0]+"/10"
        document.getElementById('RizziteCounter').innerHTML = "<b>"+abbrev(RizziteNRizzium[1])+"</b>"
    } catch(error) {
        console.error(error);
    }
}

function offlineProgress() {
    if (OfflineProdHrs > 0 && inLooksmaxxingChallenge == 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference < 1000*10) {return;}
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }
        
        var multiplier = (0.1*RandomValue5xUpgrades+0.05*RizzmaxExtraChance)*(0.1*RandomAuto2xUpgrades+0.05*RizzmaxExtraChance)*10+(0.1*RandomAuto2xUpgrades+0.05*RizzmaxExtraChance)*(1-0.1*RandomValue5xUpgrades-0.05*RizzmaxExtraChance)*2+(0.1*RandomValue5xUpgrades+0.05*RizzmaxExtraChance)*(1-0.1*RandomAuto2xUpgrades-0.05*RizzmaxExtraChance)*5+(1-0.1*RandomAuto2xUpgrades-0.05*RizzmaxExtraChance)*(1-0.1*RandomValue5xUpgrades-0.05*RizzmaxExtraChance);
        
        clicks += Math.floor(((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) ));
        lastOfflineTime = 0;

        alert("You gained "+Math.floor(((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) ))+" clicks while you were gone! "+timeDifferenceSeconds);
        updateVisuals();
    } else if (inLooksmaxxingChallenge == 2 && OfflineProdHrs > 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference < 1000*10) {return;}
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }

        var multiplier = 0.01*RandomValue5xUpgrades*RandomAuto2xUpgrades*10+(0.1*RandomAuto2xUpgrades-0.01*RandomAuto2xUpgrades*RandomValue5xUpgrades)*2+(0.1*RandomValue5xUpgrades-0.01*RandomAuto2xUpgrades*RandomValue5xUpgrades)*5+(1-0.1*RandomValue5xUpgrades-0.1*RandomAuto2xUpgrades+0.01*RandomValue5xUpgrades*RandomAuto2xUpgrades);
        
        clicks += Math.floor(0.5*Math.floor(timeDifferenceSeconds)*Math.floor((multiplier) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)));
        lastOfflineTime = 0;

        alert("You gained "+Math.floor(0.5*Math.floor(timeDifferenceSeconds)*Math.floor((multiplier) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)))+" clicks while you were gone! "+timeDifferenceSeconds);
        updateVisuals(); 
    }
}


async function loadData(username, password) {
    try {
        const encryptedData = await readData(username, password);
        const decryptedMegaData = fullDecrypt(encryptedData, "8675309");

        const entries = decryptedMegaData.split("|");

        const data = {};

        for (const entry of entries) {
            if (!entry) continue;

            const colonIndex = entry.indexOf(":");
            if (colonIndex === -1) continue;

            const key = entry.slice(0, colonIndex);
            let value = entry.slice(colonIndex + 1);

            try {
                value = JSON.parse(value);
                        
                if (key === "LooksmaxxingChallengesCompleted") {
                    value = padArrayToLength(
                        value,
                        LooksmaxxingChallengesCompleted.length,
                        0
                    );
                }
            
            } catch (e) {
                console.error(e);
            }

            window[key] = value;
            data[key] = value;

            if (
                key === "LooksmaxxingChallengesCompleted" ||
                key === "MoRCellHighlight" ||
                key === "RizziteNRizzium"
            ) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, value);
            }
        }

        console.log("Game data loaded successfully!");
        return data;

    } catch (err) {
        console.error("Failed to load data:", err);
    }
}

function padArrayToLength(arr, targetLength, padValue = 0) {
    if (!Array.isArray(arr)) return arr;

    if (arr.length < targetLength) {
        return arr.concat(
            Array(targetLength - arr.length).fill(padValue)
        );
    }

    return arr;
}






async function allInitialize() {
    try{
        backgroundToggle = Number(localStorage.getItem('backgroundToggle'));
        chosenBackground = Number(localStorage.getItem('chosenBackground'));
        newFormatToggle = Number(localStorage.getItem('newFormatToggle'));
        if (chosenBackground == 0) {
            chosenBackground = 1;
        }
        lastOfflineTime = Number(localStorage.getItem('lastOfflineTime'));
    } catch(error) {
        console.error(error);
        backgroundToggle = 1;
        chosenBackground = 1;
        lastOfflineTime = 0;
    }

    await loadData(USERNAME, PASSWORD);

    offlineProgress();

    setClickProcesses0();
    setClickProcesses0andahalf();
    setClickProcesses1();
    setClickProcesses2();
    setClickProcesses3();
    setClickProcesses4();
    setClickProcesses5();
}
