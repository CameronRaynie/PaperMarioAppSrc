var marioLevel = 0;
var marioHP = 0;
var marioFP = 0;
var marioBP = 0;
var availBP = 0;
var eqShoes = "Normal";
var eqHammer = "Normal";
var pHamAtk = 0;
var aHamAtk = 0;
var pJumpAtk = 0;
var aJumpAtk = 0;
var pDef = 0;
var aDef = 0;
var equippedBadgeList = []

//Function to initialize Attack and Defense
function setAtkDefVals() {
    aHamAtk = 2;
    pHamAtk = 1;
    aJumpAtk = 2;
    pJumpAtk = 1;
    aDef = 1;
    pDef = 0;
}
//Adjust Passive Badge Values
function checkPassiveBadges() {
    //set values to base
    setAtkDefVals();
    //check equipped badges for standard adjustments
    for (var i = 0; i < equippedBadgeList.length; i++) {
        if (equippedBadgeList[i].name == "Damage Dodge") {
            aDef++;
        } else if (equippedBadgeList[i].name == "Defend Plus") {
            aDef++;
            pDef++;
        } else if (equippedBadgeList[i].name == "FP Drain") {
            aHamAtk--;
            pHamAtk--;
            aJumpAtk--;
            pJumpAtk--;
        }
        else if (equippedBadgeList[i].name == "HP Drain") {
            aHamAtk--;
            pHamAtk--;
            aJumpAtk--;
            pJumpAtk--;
        } else if (equippedBadgeList[i].name == "P-Down, D-Up") {
            aHamAtk--;
            pHamAtk--;
            aJumpAtk--;
            pJumpAtk--;
            aDef++;
            pDef++;
        } else if (equippedBadgeList[i].name == "P-Up, D-Down") {
            aHamAtk++;
            pHamAtk++;
            aJumpAtk++;
            pJumpAtk++;
            aDef--;
            pDef--;
        } else if (equippedBadgeList[i].name == "Power Plus") {
            aHamAtk++;
            pHamAtk++;
            aJumpAtk++;
            pJumpAtk++;
        }
    }
    //Check Shoes and Hammer
    if (eqShoes == "Ultra") {
        aJumpAtk+=4;
        pJumpAtk+=2;
    } else if (eqShoes == "Super") {
        aJumpAtk+=2;
        pJumpAtk+=1;
    }
    if (eqHammer == "Ultra") {
        aHamAtk+=4;
        pHamAtk+=2;
    } else if (eqHammer == "Super") {
        aHamAtk+=2;
        pHamAtk+=1;
    }
    //Check equipped badges for special adjustments
    for (var i = 0; i < equippedBadgeList.length; i++) {
        //Add bonus to active attack for AoN
        if (equippedBadgeList[i].name == "All or Nothing") {
            aHamAtk++;
            aJumpAtk++;
        }
    }
    for (var i = 0; i < equippedBadgeList.length; i++) {
        //Add bonus for Hammerman
        if (equippedBadgeList[i].name == "Hammerman") {
            aHamAtk++;
            pHamAtk++;
        }
    }
    for (var i = 0; i < equippedBadgeList.length; i++) {
        //Add bonus for Jumpman
        if (equippedBadgeList[i].name == "Jumpman") {
            aJumpAtk++;
            pJumpAtk++;
        }
    }
    //Set values to minimum if below minimum
    if (pHamAtk < 1) {
        pHamAtk = 1;
    }
    if (aHamAtk < 2) {
        aHamAtk = 2;
    }
    if (pJumpAtk < 1) {
        pJumpAtk = 1;
    }
    if (aJumpAtk < 2) {
        aJumpAtk = 2;
    }
    //Check for applicable Zero Values
    for (var i = 0; i < equippedBadgeList.length; i++) {
        //Zero out passives if AoN is equipped
        if (equippedBadgeList[i].name == "All or Nothing") {
            pHamAtk = 0;
            pJumpAtk = 0;
            //Zero out jump if hammerman is equipped
        } else if (equippedBadgeList[i].name == "Hammerman") {
            aJumpAtk = 0;
            pJumpAtk = 0;
            //Zero out hammer if jumpman is equipped
        } else if (equippedBadgeList[i].name == "Jumpman") {
            aHamAtk = 0;
            pHamAtk = 0;
        }
    }
    //Show on screen
    renderAtkDef();
}

function setNormalJump() {
    eqShoes = 0;
    checkPassiveBadges();
    document.getElementById("normalJumpButton").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("superJumpButton").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraJumpButton").style = "background-color: lightgray; border: default;";
}
function setSuperJump() {
    eqShoes = "Super";
    checkPassiveBadges();
    document.getElementById("normalJumpButton").style = "background-color: lightgray; border: default;";
    document.getElementById("superJumpButton").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("ultraJumpButton").style = "background-color: lightgray; border: default;";
}
function setUltraJump() {
    eqShoes = "Ultra";
    checkPassiveBadges();
    document.getElementById("normalJumpButton").style = "background-color: lightgray; border: default;";
    document.getElementById("superJumpButton").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraJumpButton").style = "background-color: goldenrod; border: 2px solid black;";
}
function setNormalHammer() {
    eqHammer = "Normal";
    checkPassiveBadges();
    document.getElementById("normalHammerButton").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("superHammerButton").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraHammerButton").style = "background-color: lightgray; border:default;";
}
function setSuperHammer() {
    eqHammer = "Super";
    checkPassiveBadges();
    document.getElementById("normalHammerButton").style = "background-color: lightgray; border: default;";
    document.getElementById("superHammerButton").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("ultraHammerButton").style = "background-color: lightgray; border: default;";
}
function setUltraHammer() {
    eqHammer = "Ultra";
    checkPassiveBadges();
    document.getElementById("normalHammerButton").style = "background-color: lightgray; border: default;";
    document.getElementById("superHammerButton").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraHammerButton").style = "background-color: goldenrod; border: 2px solid black;";
}

function renderAtkDef() {
    document.getElementById("marioActiveHamDam").value = aHamAtk;
    document.getElementById("marioPassiveHamDam").value = pHamAtk;
    document.getElementById("marioActiveJumpDam").value = aJumpAtk;
    document.getElementById("marioPassiveJumpDam").value = pJumpAtk;
    document.getElementById("marioActiveDefense").value = aDef;
    document.getElementById("marioPassiveDefense").value = pDef;
}

//Set Global Vars to initial document values
function setGlobals() {
    marioLevel = parseInt(document.getElementById("marioLvl").value);
    marioHP = parseInt(document.getElementById("marioHP").value);
    marioFP = parseInt(document.getElementById("marioFP").value);
    marioBP = parseInt(document.getElementById("marioBP").value);
    availBP = parseInt(document.getElementById("marioBP").value);
}
//Function to Manage Mario's Level
function levelUpScreen() {
    // If Mario under Max level, show level up buttons
    if (marioLevel < 27) {
        //Increase level by 1
        marioLevel++;
        document.getElementById("marioLvl").value = marioLevel;
        //disable levelup button and enable hp/fp/bp level buttons
        document.getElementById("levelUpButton").disabled = true;
        document.getElementById("levelHPButton").style.display = "inline-block"
        document.getElementById("levelFPButton").style.display = "inline-block"
        document.getElementById("levelBPButton").style.display = "inline-block"
    } else {
        alert("Max Level!");
    }
}
//Function to Increase Mario's HP
function levelHP() {
    //If Mario max HP under 50, allow user to level up HP
    if (marioHP < 50) {
        //Increase Max HP
        marioHP += 5;
        document.getElementById("marioHP").value = marioHP;
        //Disable Level Up buttons after leveling up and reenable levelup button
        document.getElementById("levelHPButton").style.display = "none"
        document.getElementById("levelFPButton").style.display = "none"
        document.getElementById("levelBPButton").style.display = "none"
        document.getElementById("levelUpButton").disabled = false;
    } else {
        alert("Maximum HP!")
    }
}
//Function to increase Mario's Flower Points
function levelFP() {
    //If Mario max FP under 50, allow user to level up FP
    if (marioFP < 50) {
        //Increase Max FP
        marioFP += 5;
        document.getElementById("marioFP").value = marioFP;
        //Disable Level Up buttons after leveling up and reenable levelup button
        document.getElementById("levelHPButton").style.display = "none"
        document.getElementById("levelFPButton").style.display = "none"
        document.getElementById("levelBPButton").style.display = "none"
        document.getElementById("levelUpButton").disabled = false;
    } else {
        alert("Maximum Flower Points!")
    }
}
//Function to increase Mario's Badge Points
function levelBP() {
    //If Mario max BP under 30, allow user to level up BP
    if (marioBP < 30) {
        //Increment Total and available BP
        marioBP += 3;
        availBP += 3;
        document.getElementById("marioBP").value = marioBP;
        document.getElementById("availBP").value = availBP;
        //Disable Level Up buttons after leveling up and reenable levelup button
        document.getElementById("levelHPButton").style.display = "none"
        document.getElementById("levelFPButton").style.display = "none"
        document.getElementById("levelBPButton").style.display = "none"
        document.getElementById("levelUpButton").disabled = false;
    } else {
        alert("Maximum BP!")
    }
}
//Reset mario HP/FP/BP values to level 1 defaults
function resetMarioValues() {
    //Reset Vars
    marioLevel = 1;
    marioHP = 10;
    marioFP = 5;
    marioBP = 3;
    availBP = 3;
    //insert vars into page
    document.getElementById("marioLvl").value = marioLevel;
    document.getElementById("marioHP").value = marioHP;
    document.getElementById("marioFP").value = marioFP;
    document.getElementById("marioBP").value = marioBP;
    document.getElementById("availBP").value = availBP;
    //Disable LevelUp Buttons if enabled
    document.getElementById("levelHPButton").style.display = "none"
    document.getElementById("levelFPButton").style.display = "none"
    document.getElementById("levelBPButton").style.display = "none"
    //Enable Level button if disabled
    document.getElementById("levelUpButton").disabled = false;
    //Clear Equipped and reset BP
    clearEquipped();
}


//Load Badge List
function loadBadgeList() {
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    htmlBadgeList += "<li class='pmFont textCenter'>Badge Library<br><br></li>"
    for (var i = 0; i < bigListOfBadges.length; i++) {
        htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
    }
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
    //document.getElementById("badgeListDiv").insertAdjacentHTML("beforeend",htmlBadgeList);
    setGlobals();
    setAtkDefVals();
    renderAtkDef();
}

//Equip Badge
function addBadge(badgeToEquip) {
    if (badgeToEquip.equipCost <= availBP) {
        equippedBadgeList.push(badgeToEquip);
        availBP = (availBP - badgeToEquip.equipCost);
        document.getElementById("availBP").value = availBP;
        showEquippedBadges();
    } else {
        alert("Not Enough Badge Points!");
    };
}
//Remove Badge
function removeBadge(badgeToDelete) {
    var tempArray = [];
    for (var i = 0; i < equippedBadgeList.length; i++) {
        if (equippedBadgeList[i] != badgeToDelete) {
            tempArray.push(equippedBadgeList[i]);
        } else {
            availBP = availBP + (parseInt(badgeToDelete.equipCost));
            document.getElementById("availBP").value = availBP;
        }
    }
    equippedBadgeList = tempArray;
    showEquippedBadges();
}
//Show Equipped Badge
function showEquippedBadges() {
    var htmlEquipList = "";
    document.getElementById("equippedBadgeList").innerHTML = ""
    for (var i = 0; i < equippedBadgeList.length; i++) {
        htmlEquipList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + equippedBadgeList[i].fpUsed + '\n' + "Description: " + equippedBadgeList[i].description + "\" onclick='removeBadge(equippedBadgeList[" + i + "])'>" + "<span><img src='/img/badges/" + equippedBadgeList[i].image + "'></span><span> " + equippedBadgeList[i].name + ", BP Cost: " + equippedBadgeList[i].equipCost + "</span>" + "</button></li>";
        document.getElementById("equippedBadgeList").innerHTML = htmlEquipList;
    }
    checkPassiveBadges();
}
//Clear Equipped Badges
function clearEquipped() {
    equippedBadgeList.length = 0;
    document.getElementById("equippedBadgeList").innerHTML = "";
    checkPassiveBadges();
}
//function to call reset for HP/FP/BP Values and reset selected badges
function resetBuild() {
    resetMarioValues();
    resetMarioBadges();
}

function resetMarioBadges() {
    equippedBadgeList = [];
    document.getElementById("equippedBadgeList").innerHTML = "";
    showAllBadges();
}

function clearBadgeLibrary() {
    document.getElementById("badgeListDiv").innerHTML = ""
}
function showAllBadges() {
    clearBadgeLibrary();
    loadBadgeList();
}

function showHammerBadges() {
    clearBadgeLibrary();
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    for (var i = 0; i < bigListOfBadges.length; i++) {
        if (bigListOfBadges[i].type == "Hammer") {
            htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
        };
    };
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
}

function showJumpBadges() {
    clearBadgeLibrary();
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    for (var i = 0; i < bigListOfBadges.length; i++) {
        if (bigListOfBadges[i].type == "Jump") {
            htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
        };
    };
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
}
function showBoostBadges() {
    clearBadgeLibrary();
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    for (var i = 0; i < bigListOfBadges.length; i++) {
        if (bigListOfBadges[i].type == "Buff") {
            htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
        };
    };
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
}
function showPartnerBadges() {
    clearBadgeLibrary();
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    for (var i = 0; i < bigListOfBadges.length; i++) {
        if (bigListOfBadges[i].type == "Partner") {
            htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
        };
    };
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
}
function showOtherBadges() {
    clearBadgeLibrary();
    var htmlBadgeList = "<ul id='fullBadgeList'>";
    for (var i = 0; i < bigListOfBadges.length; i++) {
        if (bigListOfBadges[i].type == "Other") {
            htmlBadgeList += "<li><button type='button' class='badgeButton' title=\"FP Used: " + bigListOfBadges[i].fpUsed + '\n' + "Description: " + bigListOfBadges[i].description + "\" onclick='addBadge(bigListOfBadges[" + i + "])'>" + "<span><img src='/img/badges/" + bigListOfBadges[i].image + "'></span><span> " + bigListOfBadges[i].name + ", BP Cost: " + bigListOfBadges[i].equipCost + "</span>" + "</button></li>";
        };
    };
    htmlBadgeList += "</ul>";
    document.getElementById("badgeListDiv").innerHTML = htmlBadgeList;
}
function removeAllEquipped() {
    for (var i = 0; i < equippedBadgeList.length; i++) {
        availBP += parseInt(equippedBadgeList[i].equipCost);
    }
    equippedBadgeList = [];
    document.getElementById("equippedBadgeList").innerHTML = "";
    updateAvailBP();
}
function updateAvailBP() {
    document.getElementById("availBP").value = availBP;
}


//save badges
function saveBadges() {
    //set and clear initial vars
    document.getElementById("saveLoadBox").value = "";
    var outputString = "";
    //save lvl hp fp bp
    outputString += (document.getElementById("marioLvl").value + ",")
    outputString += (document.getElementById("marioHP").value + ",")
    outputString += (document.getElementById("marioFP").value + ",")
    outputString += (document.getElementById("marioBP").value + ",")
    //add badges
    for (var i = 0; i < equippedBadgeList.length; i++) {
        if (i == (equippedBadgeList.length - 1)) {
            outputString += equippedBadgeList[i].number;
        } else {


            outputString += (equippedBadgeList[i].number + ",");
        }
    }
    document.getElementById("saveLoadBox").value = outputString;
}
//load badges
function loadSavedBadges() {
    //set and clear initial vars
    var savedBadgeString = "";
    savedBadgeString = document.getElementById("saveLoadBox").value;
    //split string into two
    var splitFullList = savedBadgeString.split(",");
    var splitHPList = splitFullList.slice(0, 4)
    var splitBadgeList = splitFullList.slice(4)
    console.log(splitHPList)
    console.log(splitBadgeList)
    //Set HP/FP/BP Values
    marioLevel = splitHPList[0];
    marioHP = parseInt(splitHPList[1]);
    marioFP = parseInt(splitHPList[2]);
    marioBP = parseInt(splitHPList[3]);
    availBP = parseInt(splitHPList[3]);
    //insert vars into page
    document.getElementById("marioLvl").value = marioLevel;
    document.getElementById("marioHP").value = marioHP;
    document.getElementById("marioFP").value = marioFP;
    document.getElementById("marioBP").value = marioBP;
    document.getElementById("availBP").value = availBP;
    //load badges into list
    for (var i = 0; i < splitBadgeList.length; i++) {
        addBadge(bigListOfBadges[parseInt(splitBadgeList[i])]);
    }
}