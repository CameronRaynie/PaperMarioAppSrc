//Run functions to set up page
function loadEnemyList() {
    initializeEnemy();
    createEnemyList();
}
//Create list of enemies
function createEnemyList() {
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    for (var i = 0; i < enemyList.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + enemyList[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + enemyList[i].image + "'></span><br><span> " + enemyList[i].number + ". " + enemyList[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Show first enemy on page on reload
function initializeEnemy() {
    document.getElementById("enemyTitle").innerHTML = enemyList[0].name;
    document.getElementById("enemyPic").innerHTML = "<img src='/img/enemies/" + enemyList[0].image + "'></img>";
    document.getElementById("enemyHP").innerHTML = "<span>HP: " + enemyList[0].maxHP + "</span>";
    document.getElementById("enemyDef").innerHTML = "<span>Defense: " + enemyList[0].defense + "</span>";
    document.getElementById("enemyJournal").innerHTML = "-Journal Entry-<br><span class='readableFont'>" + enemyList[0].journal + "</span>";
    document.getElementById("enemyTattle").innerHTML = "-Goombella's Tattle Info-<br><span class='readableFont'>" + enemyList[0].tattle + "</span>";
}
//Update enemy shown on page
function changeEnemy(enemyToShow) {
    document.getElementById("enemyTitle").innerHTML = enemyToShow.name;
    document.getElementById("enemyPic").innerHTML = "<img src='/img/enemies/" + enemyToShow.image + "'></img>";
    document.getElementById("enemyHP").innerHTML = "<span>HP: " + enemyToShow.maxHP + "</span>";
    document.getElementById("enemyDef").innerHTML = "<span>Defense: " + enemyToShow.defense + "</span>";
    document.getElementById("enemyJournal").innerHTML = "-Journal Entry-<br><span class='readableFont'>" + enemyToShow.journal + "</span>";
    document.getElementById("enemyTattle").innerHTML = "-Goombella's Tattle Info-<br><span class='readableFont'>" + enemyToShow.tattle + "</span>";
}
//Sort list by enemy HP from low to high
function sortEnemyHP() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;

    sortedEnemies.sort(function (a, b) {
        return (parseInt(a.maxHP) - parseInt(b.maxHP));
    });

    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Sort list by enemy HP from high to low
function sortEnemyHPreverse() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;

    sortedEnemies.sort(function (a, b) {
        return (parseInt(b.maxHP) - parseInt(a.maxHP));
    });

    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Sort list by low defense to high defense
function sortEnemyDef() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;

    sortedEnemies.sort(function (a, b) {
        return (parseInt(a.defense) - parseInt(b.defense));
    });

    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Sort list by high defense to low defense
function sortEnemyDefreverse() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;

    sortedEnemies.sort(function (a, b) {
        return (parseInt(b.defense) - parseInt(a.defense));
    });

    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Show enemeis with spikes
function sortEnemySpikes() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;
    sortedEnemies.sort(function (a, b) {
        return (b.spiked - a.spiked);
    });
    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Show flying enemies
function sortEnemyFlying() {
    clearEnemyList();
    sortEnemyNumber();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = [];
    sortedEnemies = enemyList;
    sortedEnemies.sort(function (a, b) {
        return (b.flying - a.flying);
    });
    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Show enemies in numeric order from the bestiary
function sortEnemyNumber() {
    clearEnemyList();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = enemyList;
    sortedEnemies.sort(function (a, b) {
        return (parseInt(a.number) - parseInt(b.number));
    });
    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//Show enemies in Reverse numeric order from the bestiary
function sortEnemyNumberReverse() {
    clearEnemyList();
    var htmlEnemyList = "<ul id='fullEnemyList'>";
    var sortedEnemies = enemyList;
    sortedEnemies.sort(function (a, b) {
        return (parseInt(b.number) - parseInt(a.number));
    });
    for (var i = 0; i < sortedEnemies.length; i++) {
        htmlEnemyList += "<li><button type='button' class='enemySelector' title='" + sortedEnemies[i].name + "'onclick='changeEnemy(enemyList[" + i + "])'>" + "<span><img class='enemyListPic' src='/img/enemies/" + sortedEnemies[i].image + "'></span><br><span> " + sortedEnemies[i].number + ". " + sortedEnemies[i].name + "</span>" + "</button></li>";
    }
    htmlEnemyList += "</ul>";
    document.getElementById("enemyListDiv").innerHTML = htmlEnemyList;
}
//clear out the enemy div
function clearEnemyList() {
    document.getElementById("enemyListDiv").innerHTML = "";
}