//const { run } = require("googleapis/build/src/apis/run");
var savingInterval;
var saveInProgress = false;

var lastOfflineTime = 0;

var timePlayed = 0;

var Cheater = false;

var backgroundToggle = 1;
var newFormatToggle = 0;
var chosenBackground = 1; // 1 for Light, 2 for Dark, 3 for Cream
var autosaveInterval = 120;

var clicks = 0;

var Rizzmaxxes = 0;
var RizzPoints = 0;

var RandomValue5xUpgrades = 0;

var RandomAuto2xUpgrades = 0;

var AutomaticRizzers = 0;

var clicksIn6 = 0;
var runsIn6 = 0;

var CountryClubs = 0;
var RiceWashers = 0;
var Cars = 0;

var OfflineProdHrs = 0;
var RizzmaxClickWorth = 0;
var LooksmaxxingChallengesUpgradeUnlocked = 0;

var inLooksmaxxingChallenge = 0;
var LooksmaxxingChallengesCompleted = [0,0,0,0,0,0]; // Bye Bye!, Edging Maestro, Stone-Faced Mogging, Rags to Riches, Ad Hominem, Gods Plan

var MineOfRizzUnlocked = 0;
var RizzalurgyUnlocked = 0;
var RizzmaxExtraChance = 0;

var MoRCellHighlight = [1,1];
var RizziteNRizzium = [0,0,0]; // Rizzite Progress, Rizzite, Rizzium
var smeltingTime = 0;
var hasSmelted = false;

var rizzifactsObtained = [0,0];

var playerAchievements = {}; // Player Data Side


var gameAchievements = {}; // Game Side



function addAchievement(id,name,tooltip,requirementFunction) {
    const square = document.createElement("div");
    square.className = "achievementSquare";
    square.dataset.id = id;
    square.dataset.tooltip = name+"<br><hr>"+tooltip;
    square.classList.add('themedLocked');
    square.style.width = '50px';
    square.style.height = '50px';

    document.getElementById("achievementsGrid").appendChild(square);

    gameAchievements[id] = {
        element: square,
        name: name,
        tooltip: tooltip,
        unlocked: playerAchievements[id] ?? false,
        requirement: requirementFunction
    };

    playerAchievements[id] = playerAchievements[id] ?? false;
}

function orderAchievements() {
    const grid = document.getElementById("achievementsGrid");

    const squares = Array.from(grid.children);

    squares.sort((a, b) => {
        return Number(a.dataset.id) - Number(b.dataset.id);
    });

    squares.forEach(square => {
        const achievement = gameAchievements[square.dataset.id];
        if (achievement.unlocked) {square.dataset.tooltip=achievement.name+" <b>(COMPLETED)</b><br><hr>"+achievement.tooltip;square.classList.add('themedUnlocked');}
        grid.appendChild(square); // Re-append in sorted order
    });
}

function checkAchievements() {
    for (const id in gameAchievements) {
        const achievement = gameAchievements[id];

        if (!achievement.unlocked && achievement.requirement()) {
            unlockAchievement(id);
            achievement.element.dataset.tooltip=achievement.name+" <b>(COMPLETED)</b><br><hr>"+achievement.tooltip;
            achievement.element.classList.add('themedUnlocked');
            unlockAchievementCard(achievement.name,achievement.tooltip);
        }
    }
}

function forceAchieve(id) {
    const achievement = gameAchievements[id];

    if (!achievement.unlocked) {
        unlockAchievement(id);
        achievement.element.dataset.tooltip=achievement.name+" <b>(COMPLETED)</b><br><hr>"+achievement.tooltip;
        achievement.element.classList.add('themedUnlocked');
        unlockAchievementCard(achievement.name,achievement.tooltip);
    }
}

function unlockAchievement(id) {
    const achievement = gameAchievements[id];
    achievement.unlocked = true;
    playerAchievements[id] = true;

    achievement.element.classList.add("unlocked");
    console.log("Unlocked achievement:", id);
}

function countUnlockedAchievements() {
    if (!playerAchievements || typeof playerAchievements !== "object") return 0;

    let count = 0;
    for (const key in playerAchievements) {
        if (playerAchievements[key] === true) {
            count++;
        }
    }
    return count;
}




function grabCost(Item) {
    var allCosts = {
        "RandomValue5xUpgrades": Math.ceil((inLooksmaxxingChallenge != 6 ? 1 : (1/3)) * [2500,5000,15000,50000,150000][RandomValue5xUpgrades]),
        "RandomAuto2xUpgrades": Math.ceil((inLooksmaxxingChallenge != 6 ? 1 : (1/3)) * [15000,35000,75000,150000,500000][RandomAuto2xUpgrades]),
        "AutomaticRizzers": (inLooksmaxxingChallenge != 6 ? 2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)) : (5) * (2500 + 500*(AutomaticRizzers) + Math.ceil(50*(Math.log(7*(AutomaticRizzers)+1)**1.4)))),
        "CountryClubs": Math.ceil((inLooksmaxxingChallenge != 6 ? 1 : (1/3)) * Math.floor(1.75 ** CountryClubs) * Math.log(5 * ((CountryClubs + 1) ** 1.5)) * (CountryClubs + 1)),
        "RiceWashers": Math.ceil((inLooksmaxxingChallenge != 6 ? 1 : (1/3)) * 400*Math.floor(2 ** RiceWashers) * Math.log(7 * ((RiceWashers + 1) ** 1.5)) * (RiceWashers + 1)),
        "Cars": Math.ceil((inLooksmaxxingChallenge != 6 ? 1 : (1/3)) * (12000 + 10000*Cars + Math.ceil(300*Math.floor(2.3 ** Cars)*Math.ceil(Math.log((Cars*Cars+1)*((Cars+1)**3)))*Math.log(Cars+1)))),
        "OfflineProdHrs": Math.ceil(1.5*((OfflineProdHrs)**3.5))+1,
        "RizzmaxClickWorth": (2**(Math.floor(RizzmaxClickWorth/50)))*(Math.ceil(Math.ceil(2/3*((RizzmaxClickWorth)**0.5))*(Math.log(RizzmaxClickWorth+1)))+1),
        "LooksmaxxingChallengesUpgradeUnlocked": (Boolean(LooksmaxxingChallengesUpgradeUnlocked) ? -1 : 100),
        "RizzmaxExtraChance": (4*Math.floor(2.3**RizzmaxExtraChance)+(2**RizzmaxExtraChance)),
        "MineOfRizzUnlocked": (Boolean(MineOfRizzUnlocked) ? -1 : 250),
        "RizzalurgyUnlocked": (Boolean(RizzalurgyUnlocked) ? -1 : 1),
        "RizzifactUpgrade1": [50,150,500],
        "RizzifactUpgrade2": [50, 100,150]
    }
    return(allCosts[Item]);
}

function bonusText(Item) {
    var allBonusTexts = {
        "RizzifactUpgrade1": (rizzifactsObtained[0] < 3 ? "Bonus: +"+rizzifactsObtained[0]*5+"% Chance to Upgrade Twice When You Buy Normal Upgrades." : "Bonus: +15% Chance to Upgrade Twice When You Buy Normal Upgrades And +5% Chance To Rizzmax For Twice As Much."),
        "RizzifactUpgrade2": (rizzifactsObtained[1] < 3 ? `Bonus:  -${rizzifactsObtained[1]} Max Minutes to smelt Rizzite.` : "Bonus: -3 Minutes From The Max Smelting Time And +5mL Flat Rizzium Whenever You Smelt Rizzite.")
    }
    return(allBonusTexts[Item])
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
    } else if (Looksmax == 6) {
        return(Math.ceil((1-0.03*LooksmaxxingChallengesCompleted[4]) * (100 + 100*LooksmaxxingChallengesCompleted[5]*(1.5**LooksmaxxingChallengesCompleted[5]))));
    }
}

function grabVisualCost(Item) {
    return(abbrev(grabCost(Item)));
}

function RizzPointgain() {
    if (clicks >= 25000) {
      return(Math.floor(Math.log(clicks/25000)/Math.log(1.05-0.01*LooksmaxxingChallengesCompleted[5])));
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

function abbrevTime(seconds) {
    var mins = Math.floor(Math.floor(seconds) / 60);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    secs = Math.floor(seconds) % 60;
    return((days > 0 ? abbrev(days)+" Days: " : "")+(hrs > 0 ? hrs%24+"h " : "")+((mins > 0 && days < 10) ? mins%60+"m " : "")+(days <= 0 ? secs+"s" : ""));
}

function abbrevLiquid(ml) {
    if (ml == 0) {
        return(ml + "mL");
    }
    var suffixes = ["mL","L","kL","ML","GL"];
    var suffixIndex = Math.floor(Math.log10(ml)/3);
    if (suffixIndex >= suffixes.length) {
        suffixIndex = suffixes.length - 1;
    }
    if (suffixIndex < suffixes.length - 1) {
        return(Math.floor((ml/(10**(3*suffixIndex)))*100)/100).toString() + suffixes[suffixIndex];
    } else {
        return(abbrev(Math.floor(ml/(10**(3*(suffixes.length-1))))) + suffixes[suffixes.length - 1]);
    }
}

function setDisplay(object, value) {
    var finalVal
    if (value == 0) {
        finalVal = "none";
    } else {
        finalVal = "initial";
    }
    try{
        if (object != "newToolbar") {
            document.getElementById(object).style.display = finalVal;
        } else if (finalVal == "initial") {
            document.getElementById(object).style.display = "flex";
        } else {
            document.getElementById(object).style.display = finalVal;
        }
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
    var themeMap;
    if (chosenBackground == 1) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(240, 240, 240), rgb(240, 240, 240))",
            "themed2": "linear-gradient(0deg, rgb(221, 221, 221), rgb(221, 221, 221))",
            "themed3": "linear-gradient(145deg, rgb(158, 42, 42), rgb(124, 31, 31))",
            "themed4": "linear-gradient(45deg, rgb(138, 138, 138), rgb(102, 102, 102))",
            "themedLocked": "linear-gradient(225deg, rgb(48, 48, 48), rgb(65, 65, 65))",
            "themedUnlocked": "linear-gradient(225deg, rgb(189, 189, 189), rgb(211, 211, 211))"
        };
    } else if (chosenBackground == 2) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(64, 66, 71), rgb(64, 66, 71))",
            "themed2": "linear-gradient(0deg, rgb(37, 39, 41), rgb(37, 39, 41))",
            "themed3": "linear-gradient(145deg, rgb(54, 18, 18), rgb(54, 9, 9))",
            "themed4": "linear-gradient(45deg, rgb(27, 29, 31), rgb(19, 20, 22))",
            "themedLocked": "linear-gradient(225deg, rgb(19, 19, 19), rgb(29, 29, 29))",
            "themedUnlocked": "linear-gradient(225deg, rgb(49, 49, 49), rgb(63, 63, 65))"
        };
    } else if (chosenBackground == 3) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(209, 193, 161), rgb(209, 193, 161))",
            "themed2": "linear-gradient(0deg, rgb(216, 199, 165), rgb(216, 199, 165))",
            "themed3": "linear-gradient(145deg, rgb(150, 60, 60), rgb(155, 52, 52))",
            "themed4": "linear-gradient(45deg,rgb(194, 174, 134), rgb(168, 148, 107))",
            "themedLocked": "linear-gradient(225deg, rgb(104, 94, 66), rgb(124, 108, 87))",
            "themedUnlocked": "linear-gradient(225deg, rgb(204, 189, 148), rgb(231, 202, 148))"
        };
    } else if (chosenBackground == 4) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(42, 98, 170), rgb(74, 134, 212))",
            "themed2": "linear-gradient(0deg, rgb(32, 77, 136), rgb(30, 88, 165))",
            "themed3": "linear-gradient(145deg, rgb(57, 50, 112), rgb(66, 58, 126))",
            "themed4": "linear-gradient(45deg, rgb(22, 62, 114), rgb(12, 54, 109))",
            "themedLocked": "linear-gradient(225deg, rgb(40, 42, 102), rgb(41, 29, 112))",
            "themedUnlocked": "linear-gradient(225deg, rgb(93, 91, 175), rgb(55, 106, 199))"
        };
    } else if (chosenBackground == 5) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(184, 72, 72), rgb(228, 95, 72))",
            "themed2": "linear-gradient(0deg, rgb(153, 52, 52), rgb(209, 91, 72))",
            "themed3": "linear-gradient(145deg, rgb(100, 30, 30), rgb(180, 60, 40))",
            "themed4": "linear-gradient(45deg, rgb(112, 31, 31), rgb(163, 57, 41))",
            "themedLocked": "linear-gradient(225deg, rgb(95, 43, 39), rgb(119, 48, 30))",
            "themedUnlocked": "linear-gradient(225deg, rgb(177, 61, 41), rgb(214, 72, 37))"
        }
    } else if (chosenBackground == 6) {
        themeMap = {
            "themed1": "linear-gradient(0deg, rgb(116, 204, 116), rgb(124, 235, 141))",
            "themed2": "linear-gradient(0deg, rgb(89, 168, 89), rgb(93, 202, 108))",
            "themed3": "linear-gradient(145deg, rgb(43, 110, 43), rgb(65, 168, 47))",
            "themed4": "linear-gradient(45deg, rgb(73, 148, 73), rgb(60, 151, 72))",
            "themedLocked": "linear-gradient(225deg, rgb(54, 88, 46), rgb(50, 114, 44))",
            "themedUnlocked": "linear-gradient(225deg, rgb(71, 146, 71), rgb(97, 190, 69))"
        }
    } else if (chosenBackground == 7) {
        themeMap = {
            "themed1": "linear-gradient(175deg, rgb(55, 61, 100), rgb(55, 64, 124))",
            "themed2": "linear-gradient(175deg, rgb(44, 45, 82), rgb(46, 48, 97))",
            "themed3": "linear-gradient(145deg, rgb(40, 32, 64), rgb(45, 35, 78))",
            "themed4": "linear-gradient(95deg, rgb(34, 35, 70), rgb(31, 33, 77))",
            "themedLocked": "linear-gradient(225deg, rgb(27, 24, 46), rgb(34, 21, 59))",
            "themedUnlocked": "linear-gradient(225deg, rgb(45, 36, 83), rgb(49, 35, 112))"
        }
    }
    Object.entries(themeMap).forEach(([className, color]) => {
        const elements = document.getElementsByClassName(className);
        for (const el of elements) {
            if (className === "themed1" && el.id === "leaderboard-table") {
                el.style.background = color.replace("rgb(", "rgba(").replace(")", ", 0.6)");
                continue
            }
            el.style.background = color;
        }
    });
    if (backgroundToggle == 1) {
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
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
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPositionX = "center";
            document.body.style.backgroundPositionY = "center";
            document.body.style.background = "linear-gradient(0deg, rgb(228, 210, 178), rgb(228, 210, 178))";
        }
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPositionX = "center";
        document.body.style.backgroundPositionY = "center";
        if (chosenBackground == 1) {
            document.body.style.background = "linear-gradient(0deg, rgb(255, 255, 255), rgb(255, 255, 255))";
        } else if (chosenBackground == 2) {
            document.body.style.background = "linear-gradient(0deg, rgb(42, 44, 48), rgb(42, 44, 48))";
        } else if (chosenBackground == 3) {
            document.body.style.background = "linear-gradient(0deg, rgb(240, 222, 187), rgb(240, 222, 187))";
        } else if (chosenBackground == 4) {
            document.body.style.background = "linear-gradient(0deg, rgb(50, 83, 194), rgb(39, 138, 204))";
        } else if (chosenBackground == 5) {
            document.body.style.background = "linear-gradient(0deg, rgb(168, 68, 68), rgb(238, 114, 92))";
        } else if (chosenBackground == 6) {
            document.body.style.background = "linear-gradient(0deg, rgb(112, 190, 112), rgb(129, 238, 145))";
        } else if (chosenBackground == 7) {
            document.body.style.background = "linear-gradient(175deg, rgb(47, 47, 82), rgb(51, 51, 93))";
        }
        if (currentRoom == 7) {
            document.body.style.background = "linear-gradient(0deg, rgb(228, 210, 178), rgb(228, 210, 178))";
        }
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
        if (hasSmelted == true) {
            var LooksmaxChallengeText = [""," <b><em>Bye Bye!</em></b>"," <b><em>Edging Maestro</em></b>"," <b><em>Stone-Faced Mogging</em></b>"," <b><em>Rags to Riches</em></b>"," <b><em>Ad Hominem</em></b>", " <b><em>Gods Plan</em></b>"][inLooksmaxxingChallenge];
            
            if (inLooksmaxxingChallenge == 5) {
                document.getElementById('currencyCounter').innerHTML = "<b>???</b> Dilyan Points <b>"+abbrev(RizzPoints)+"</b> Rizz Points <b>"+abbrevLiquid(RizziteNRizzium[2])+"</b> Rizzium"+LooksmaxChallengeText;
            } else {
                document.getElementById('currencyCounter').innerHTML = "<b>"+abbrev(clicks)+"</b> Dilyan Points <b>"+abbrev(RizzPoints)+"</b> Rizz Points <b>"+abbrevLiquid(RizziteNRizzium[2])+"</b> Rizzium"+LooksmaxChallengeText;
            }
            setDisplay('2xRandomAutoUpgradeButton', 1);
            setDisplay('RizzmaxUpgrades', 1);
        } else if (Rizzmaxxes > 0) {
            var LooksmaxChallengeText = [""," <b><em>Bye Bye!</em></b>"," <b><em>Edging Maestro</em></b>"," <b><em>Stone-Faced Mogging</em></b>"," <b><em>Rags to Riches</em></b>"," <b><em>Ad Hominem</em></b>", " <b><em>Gods Plan</em></b>"][inLooksmaxxingChallenge];
            
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
            if ((typeof grabCost("RandomValue5xUpgrades") === "undefined" || isNaN(grabCost("RandomValue5xUpgrades")))) {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = abbrev(5+LooksmaxxingChallengesCompleted[2])+"x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): <b>MAXED</b>";
            } else {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = abbrev(5+LooksmaxxingChallengesCompleted[2])+"x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomValue5xUpgrades')+"</b>";
            }
            if ((typeof grabCost("RandomAuto2xUpgrades") === "undefined" || isNaN(grabCost("RandomAuto2xUpgrades")))) {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = abbrev(2+LooksmaxxingChallengesCompleted[2])+"x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): <b>MAXED</b>";
            } else {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = abbrev(2+LooksmaxxingChallengesCompleted[2])+"x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomAuto2xUpgrades')+"</b>";
            }
        } else {
            if ((typeof grabCost("RandomValue5xUpgrades") === "undefined" || isNaN(grabCost("RandomValue5xUpgrades"))) && inLooksmaxxingChallenge != 5) {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): <b>MAXED</b>";
            } else if (inLooksmaxxingChallenge != 5) {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "5x Random Value Upgrade ("+abbrev(RandomValue5xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomValue5xUpgrades')+"</b>";
            } else {
                document.getElementById('5xRandomValueUpgradeButton').innerHTML = "???x Random Value Upgrade (???): Cost: <b>???</b>";
            }
            if ((typeof grabCost("RandomAuto2xUpgrades") === "undefined" || isNaN(grabCost("RandomAuto2xUpgrades"))) && inLooksmaxxingChallenge != 5) {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): <b>MAXED</b>";
            } else if (inLooksmaxxingChallenge != 5) {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "2x Random Auto Upgrade ("+abbrev(RandomAuto2xUpgrades)+"): Cost: <b>"+grabVisualCost('RandomAuto2xUpgrades')+"</b>";
            } else {
                document.getElementById('2xRandomAutoUpgradeButton').innerHTML = "???x Random Auto Upgrade (???): Cost: <b>???</b>";
            }
        }
        document.getElementById('BackgroundToggleButton').innerHTML = "Toggle Backgrounds: "+["Off","On"][backgroundToggle];
        document.getElementById('ThemeChangeButton').innerHTML = "Toggle Theme ("+["Light","Dark","Cream","Sea","Fire","Green","Midnight"][chosenBackground-1]+")";
        document.getElementById('NewFormatToggleButton').innerHTML = "Toggle Wide Buttons: "+["Off","On"][newFormatToggle];
        document.getElementById('autoSaveIntervalButton').innerHTML = "Autosave Interval: "+abbrevTime(autosaveInterval);
        document.getElementById('achievementDPM').innerHTML = "Dilyan Point Multiplier (From Achievements): +"+abbrev(countUnlockedAchievements())+"%";
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
            document.getElementById('LMC6Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[5],3) ? (isEqual(inLooksmaxxingChallenge,6) ? "End Challenge" : "Cannot Start") : "<b>MAXED</b>");;
        } else {
            document.getElementById('LMC1Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[0],10) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC2Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[1],90) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC3Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[2],5) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC4Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[3],9) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC5Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[4],10) ? "Begin" : "<b>MAXED</b>");
            document.getElementById('LMC6Button').innerHTML = (isLessThan(LooksmaxxingChallengesCompleted[5],3) ? "Begin" : "<b>MAXED</b>");
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
        document.getElementById('LMC6D').innerHTML = "Rizzmax for at least "+abbrev(LooksmaxCosts(6))+" points while consecutively clicking the main button depreciates the value yet Automatic Rizzers are 5x more expensive and the other upgrades are 3x cheaper. The value for clicking can be reset by purchasing an upgrade (besides Automatic Rizzers), and Automatic Rizzers only produce 1 time for each one you own before stopping until you buy another. Offline Progress is enabled at 10% efficiency.";
        document.getElementById('LMC6B').innerHTML = "Current Bonus: -"+0.01*LooksmaxxingChallengesCompleted[5]+" From The Logarithm's Base In The Rizzmax Rizz Point Formula";
        document.getElementById('LMC6C').innerHTML = "Completions: "+abbrev(LooksmaxxingChallengesCompleted[5])+"/3";

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

        // Rizzalurgy
        if (smeltingTime == 0) {
            document.getElementById('smeltRizziteButton').innerHTML = "Smelt 1 Rizzite";
            document.getElementById('foundryTimer').innerHTML = "Not Currently Active";
        } else {
            document.getElementById('smeltRizziteButton').innerHTML = "Cannot Smelt More Rizzite At This Time";
            document.getElementById('foundryTimer').innerHTML = "Time Left: "+abbrevTime(smeltingTime);
        }
        document.getElementById('foundryTotalTime').innerHTML = "Each smelting process takes 5-20 minutes.";
        document.getElementById('foundryTotalProduction').innerHTML = "Produce: 15-25 mL of Rizzium for each Rizzite.";

        // Rizzifacts
        document.getElementById('Rizif1C').innerHTML = (rizzifactsObtained[0] = grabCost('RizzifactUpgrade1').length) ? 'Max Infusions Obtained': `Infusion Cost: ${abbrevLiquid(grabCost('RizzifactUpgrade1')[rizzifactsObtained[0]])} Rizzium`;
        document.getElementById('Rizif1B').innerHTML = bonusText('RizzifactUpgrade1');
        document.getElementById('Rizif1I').innerHTML = "Infusions: "+rizzifactsObtained[0]+"/3"
        document.getElementById('Rizif2C').innerHTML = (rizzifactsObtained[0] = grabCost('RizzifactUpgrade1').length) ? 'Max Infusions Obtained': `Infusion Cost: ${abbrevLiquid(grabCost('RizzifactUpgrade2'))[rizzifactsObtained[1]]} Rizzium`;
        document.getElementById('Rizif2B').innerHTML = bonusText('RizzifactUpgrade2');
        document.getElementById('Rizif2I').innerHTML = `Infusions: ${rizzifactsObtained[1]}/3`

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
        
        var multiplier = (0.1*RandomValue5xUpgrades+0.05*RizzmaxExtraChance)*5+(1-(0.1*RandomValue5xUpgrades+0.05*RizzmaxExtraChance));
        
        clicks += Math.floor((1+(countUnlockedAchievements()/100))* ((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) ));

        sendToast("You gained "+abbrev(Math.floor((1+(countUnlockedAchievements()/100))* ((10+Number(LooksmaxxingChallengesCompleted[1]))/100)*(Math.floor(timeDifferenceSeconds) * (gameTick) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) * (1+(Number(LooksmaxxingChallengesCompleted[0])/10)) )))+" clicks while you were gone!");
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
        
        clicks += Math.floor((1+(countUnlockedAchievements()/100)) * 0.5*Math.floor(timeDifferenceSeconds)*Math.floor((multiplier) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100)));

        sendToast("You gained "+abbrev(Math.floor((1+(countUnlockedAchievements()/100)) * 0.5*Math.floor(timeDifferenceSeconds)*Math.floor((multiplier) * (AutomaticRizzers) * (1+Math.ceil((CountryClubs)**(1+Cars/10))) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted)))/100))))+" clicks while you were gone!");
        updateVisuals(); 
    } else if (inLooksmaxxingChallenge == 6 && OfflineProdHrs > 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference < 1000*10) {return;}
        if (runsIn6 <= OfflineProdHrs*3600) {
            var timeDifferenceSeconds = runsIn6;
            runsIn6 = 0;
        } else if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
            runsIn6 -= timeDifferenceSeconds;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
            runsIn6 -= timeDifferenceSeconds;
        }

        var multiplier = (0.1*RandomValue5xUpgrades+0.05*RizzmaxExtraChance)*5+(1-0.1*RandomValue5xUpgrades-0.05*RizzmaxExtraChance);
        clicks += Math.floor((1+(countUnlockedAchievements()/100)) * 0.1*(Math.floor(timeDifferenceSeconds) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) ));

        sendToast("You gained "+abbrev(Math.floor((1+(countUnlockedAchievements()/100)) * 0.1*(Math.floor(timeDifferenceSeconds) * (multiplier) * (AutomaticRizzers) * (1 + RiceWashers) * (1+(5*Number(listSum(LooksmaxxingChallengesCompleted))/100)) )))+" clicks while you were gone!");
        updateVisuals();
    }

    if (OfflineProdHrs > 0) {
        var currentTime = Date.now();
        var timeDifference = currentTime - lastOfflineTime;
        if (timeDifference < 1000*10) {return;}
        if (timeDifference/3600000 <= OfflineProdHrs) {
            var timeDifferenceSeconds = timeDifference / 1000;
        } else {
            var timeDifferenceSeconds = OfflineProdHrs*360;
        }
        
        if (smeltingTime > 0) {
            if (timeDifferenceSeconds >= smeltingTime) {
                let bonusRizzium = rizzifactsObtained[1] >= 3 ? 5: 0;
                const numToIncreaseBy = 15 + Math.floor(10*Math.random()) + bonusRizzium;
                RizziteNRizzium[2] += numToIncreaseBy;
                sendToast("Rizzalurgy: <b>+"+abbrevLiquid(numToIncreaseBy)+" Rizzium</b>");
                smeltingTime = 0;
                hasSmelted = true;
                updateVisuals();
            } else {
                smeltingTime -= timeDifferenceSeconds;
                updateVisuals();
            }
        }
    }

    lastOfflineTime = 0;
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

                if (key === "rizzifactsObtained") {
                    value = padArrayToLength(
                        value,
                        rizzifactsObtained.length,
                        0
                    )
                }
            
            } catch (e) {
                console.error(e);
            }

            window[key] = value;
            data[key] = value;

            if (
                key === "LooksmaxxingChallengesCompleted" ||
                key === "MoRCellHighlight" ||
                key === "RizziteNRizzium" ||
                key === "rizzifactsObtained" ||
                key === "playerAchievements"
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

    setClickProcessesFirst();
    setClickProcesses0();
    setClickProcesses0andahalf();
    setClickProcesses1();
    setClickProcesses2();
    setClickProcesses3();
    setClickProcesses4();
    setClickProcesses5();

    updateBackgrounds();
    updateVisuals();
}
