var currPartner = 0;

function initPartner() {
    buildPartnerTable();
    buildPartnerBase(partnerList[0]);
}

function buildPartnerBase(partnerToShow) {
    document.getElementById("partnerName").innerHTML = partnerToShow.name;
    document.getElementById("partnerPic").innerHTML = "<img class='partPic' src='/img/partners/" + partnerToShow.image + "' title='" + partnerToShow.name + "'>";
    document.getElementById("partnerHP").innerHTML = "HP: " + partnerToShow.hitpoints.baseHP;
    document.getElementById("partnerDef").innerHTML = "Defense: " + partnerToShow.defense;
    document.getElementById("partnerDesc").innerHTML = "-Description-<br><span class='readableFont'>"+partnerToShow.description+"</span>";
    //
    setBaseAbilities(partnerToShow);
    setBaseRank();
    //
    setPartnerHighlight(partnerToShow);
}
function setPartnerHighlight(partnerToShow){
    //Clear Highlighting
    document.getElementById("GoombellaButton").style = "background-color: lightgray; border: default;";
    document.getElementById("KoopsButton").style = "background-color: lightgray; border: default;";
    document.getElementById("FlurrieButton").style = "background-color: lightgray; border: default;";
    document.getElementById("YoshiButton").style = "background-color: lightgray; border: default;";
    document.getElementById("VivianButton").style = "background-color: lightgray; border: default;";
    document.getElementById("Admiral BobberyButton").style = "background-color: lightgray; border: default;";
    document.getElementById("Ms. MowzButton").style = "background-color: lightgray; border: default;";
    //Highlight Current Party Member
    document.getElementById(partnerToShow.name+"Button").style = "background-color: goldenrod; border: 2px solid black;";
}
function buildPartnerTable() {
    var htmlPartnerTable = "<table id='partnerTable'>";
    htmlPartnerTable += "<tr>";
    for (i = 0; i < 4; i++) {
        htmlPartnerTable += "<th><button id='"+partnerList[i].name+"Button' type='button' class='partnerButton' onclick='buildPartnerBase(partnerList[" + i + "])'><span><img class='tablePic' src='/img/partners/" + partnerList[i].image + "' title='" + partnerList[i].name + "'><br>" + partnerList[i].name + "</span></button></th>";
    };
    htmlPartnerTable += "</tr><tr>";
    for (i = 4; i < 7; i++) {
        htmlPartnerTable += "<th><button id='"+partnerList[i].name+"Button' type='button' class='partnerButton' onclick='buildPartnerBase(partnerList[" + i + "])'><span><img class='tablePic' src='/img/partners/" + partnerList[i].image + "' title='" + partnerList[i].name + "'><br>" + partnerList[i].name + "</span></button></th>";
    };
    htmlPartnerTable += "</tr></table>";
    document.getElementById("partnerSpan").innerHTML = htmlPartnerTable;
}

function setBaseAbilities(partnerToShow) {
    currPartner = partnerToShow.party;
    //set attack1
    var htmlAbilityString = "";
    htmlAbilityString += "<td>" + partnerToShow.attacks[0].name + "</td><td>FP Used: " + partnerToShow.attacks[0].fpUsed + "</td><td>Damage: " + partnerToShow.attacks[0].damage.baseDamage + "</td><td>" + partnerToShow.attacks[0].description + "</td>";
    document.getElementById("ability1").innerHTML = htmlAbilityString;
    //set attack2
    htmlAbilityString = ""
    htmlAbilityString += "<td>" + partnerToShow.attacks[1].name + "</td><td>FP Used: " + partnerToShow.attacks[1].fpUsed + "</td><td>Damage: " + partnerToShow.attacks[1].damage.baseDamage + "</td><td>" + partnerToShow.attacks[1].description + "</td>";
    document.getElementById("ability2").innerHTML = htmlAbilityString;
    //set attack3
    var htmlAbilityString = "";
    htmlAbilityString += "<td>" + partnerToShow.attacks[2].name + "</td><td>FP Used: " + partnerToShow.attacks[2].fpUsed + "</td><td>Damage: " + partnerToShow.attacks[2].damage.baseDamage + "</td><td>" + partnerToShow.attacks[2].description + "</td>";
    document.getElementById("ability3").innerHTML = htmlAbilityString;
    //set attack4
    var htmlAbilityString = "";
    htmlAbilityString += "<td>" + partnerToShow.attacks[3].name + "</td><td>FP Used: " + partnerToShow.attacks[3].fpUsed + "</td><td>Damage: " + partnerToShow.attacks[3].damage.baseDamage + "</td><td>" + partnerToShow.attacks[3].description + "</td>";
    document.getElementById("ability4").innerHTML = htmlAbilityString;
}

function setBaseRank() {
    //set HP base
    document.getElementById("partnerHP").innerHTML = "HP: " + partnerList[currPartner].hitpoints.baseHP;
    //set attack1 BASE
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[0].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[0].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[0].damage.baseDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[0].description + "</td>";
    document.getElementById("ability1").innerHTML = htmlAbilityString;
    //set attack2 BASE
    htmlAbilityString = ""
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[1].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[1].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[1].damage.baseDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[1].description + "</td>";
    document.getElementById("ability2").innerHTML = htmlAbilityString;
    //Change Visibility
    document.getElementById("ability3").style.visibility = "hidden"
    document.getElementById("ability4").style.visibility = "hidden"

    //Highlight buttons
    document.getElementById("baseRank").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("superRank").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraRank").style = "background-color: lightgray; border: default;";
}

function setSuperRank() {
    //set HP super
    document.getElementById("partnerHP").innerHTML = "HP: " + partnerList[currPartner].hitpoints.superHP;
    //set attack1 SUPER
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[0].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[0].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[0].damage.superDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[0].description + "</td>";
    document.getElementById("ability1").innerHTML = htmlAbilityString;
    //set attack2 SUPER
    htmlAbilityString = ""
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[1].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[1].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[1].damage.superDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[1].description + "</td>";
    document.getElementById("ability2").innerHTML = htmlAbilityString;
    //set attack3 SUPER
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[2].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[2].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[2].damage.superDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[2].description + "</td>";
    document.getElementById("ability3").innerHTML = htmlAbilityString;
    //Change Visibility
    document.getElementById("ability3").style.visibility = "visible"
    document.getElementById("ability4").style.visibility = "hidden"

    //Highlight buttons
    document.getElementById("baseRank").style = "background-color: lightgray; border: default;";
    document.getElementById("superRank").style = "background-color: goldenrod; border: 2px solid black;";
    document.getElementById("ultraRank").style = "background-color: lightgray; border: default;";
}

function setUltraRank() {
    //set HP ultra
    document.getElementById("partnerHP").innerHTML = "HP: " + partnerList[currPartner].hitpoints.ultraHP;
    //set attack1 ULTRA
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[0].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[0].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[0].damage.ultraDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[0].description + "</td>";
    document.getElementById("ability1").innerHTML = htmlAbilityString;
    //set attack2 ULTRA
    htmlAbilityString = ""
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[1].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[1].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[1].damage.ultraDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[1].description + "</td>";
    document.getElementById("ability2").innerHTML = htmlAbilityString;
    //set attack3 ULTRA
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[2].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[2].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[2].damage.ultraDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[2].description + "</td>";
    document.getElementById("ability3").innerHTML = htmlAbilityString;
    //set attack4 ULTRA
    var htmlAbilityString = "";
    htmlAbilityString += "<td class='abTable'>" + partnerList[currPartner].attacks[3].name + "</td><td class='abTable'>FP Used: " + partnerList[currPartner].attacks[3].fpUsed + "</td><td class='abTable'>Damage: " + partnerList[currPartner].attacks[3].damage.ultraDamage + "</td><td class='abTableDes'>" + partnerList[currPartner].attacks[3].description + "</td>";
    document.getElementById("ability4").innerHTML = htmlAbilityString;
    //Change Visibility
    document.getElementById("ability3").style.visibility = "visible"
    document.getElementById("ability4").style.visibility = "visible"

    //Highlight buttons
    document.getElementById("baseRank").style = "background-color: lightgray; border: default;";
    document.getElementById("superRank").style = "background-color: lightgray; border: default;";
    document.getElementById("ultraRank").style = "background-color: goldenrod; border: 2px solid black;";
}