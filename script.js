/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 640; // x-positie van speler
var spelerY = 670; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 35;   // y-positie van vijand
var vijandXTwee = 100; 
var vijandYTwee = 35; 

var score = 0; // aantal behaalde punten


var lastPressedW = false; // bijhouden of W toets tussendoor is losgelaten
var lastPressedS = false; // bijhouden of S toets tussendoor is losgelaten
var lastPressedA = false; // bijhouden of A toets tussendoor is losgelaten
var lastPressedD = false; // bijhouden of D toets tussendoor is losgelaten
var lastPressedSPACE = false; // bijhouden of de ' ' toets tussendoor is losgelaten




/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(179, 232, 228);
  rect(0, 0, width , height );
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y){
fill (65, 139, 196);
    while (y < 600) {
        ellipse(x, y, 50, 50);
    y += 90;
    } 
}

var tekenVijandTwee = function(x, y){
fill (65, 139, 196);
    while (y < 600) {
        ellipse(x, y, 50, 50);
    y += 150;
    } 
}

/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill(224, 122, 255);
  ellipse(x, y, 50, 50);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    vijandX = vijandX + 5
    
    if (vijandX > 1260) {
        vijandX = 0
    }
};

var beweegVijandTwee = function () {
    vijandXTwee= vijandXTwee + 5

    if (vijandXTwee > 1260) {
        vijandXTwee = 0 
    }
};

/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
    if (lastPressedW === false && keyIsDown(87) === true) { // W toets is net ingedrukt
        spelerY -= 50;
    }  
   
   // bewaar of de W toets is ingedrukt of niet, 
   // voor de volgende keer dat deze functie wordt uitgevoerd
        if (keyIsDown(87)) {
            lastPressedW = true;
        } else {
            lastPressedW = false;
        }


    if (lastPressedS === false && keyIsDown(83) === true) { // S toets is net ingedrukt
        spelerY += 50;
    }

    // bewaar of de S toets is ingedrukt of niet,
    // voor de volgende keer dat deze functie wordt uitgevoerd
        if(keyIsDown(83)) {
            lastPressedS = true;
        } else {
            lastPressedS = false;
        }


    if (lastPressedA === false && keyIsDown(65) === true) { // A toets is net ingedrukt
        spelerX -= 50;
    }

    // bewaar of de A toets is ingedrukt of niet,
    // voor de volgende keer dat deze functie wordt uitgevoerd
        if(keyIsDown(65)) {
            lastPressedA = true;
        } else {
            lastPressedA = false;
        }



    if (lastPressedD === false && keyIsDown(68) === true) { // D toets is net ingedrukt
        spelerX += 50;
    }

    // bewaar of de D toets is ingedrukt of niet,
    // voor de volgende keer dat deze functie wordt uitgevoerd
        if(keyIsDown(68)) {
            lastPressedD = true;
        } else {
            lastPressedD = false;
        }
};

var resetGame = function() {
    spelerX = 640; // x-positie van speler
    spelerY = 670; // y-positie van speler
    kogelX = 0;    // x-positie van kogel
    kogelY = 0;    // y-positie van kogel
    vijandX = 0;   // x-positie van vijand
    vijandY = 35;   // y-positie van vijand
    vijandXTwee = 100; 
    vijandYTwee = 35; 
}

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    if ((abs(spelerX - vijandX) < 50)  &&  // x van vijand en speler in elkaars buurt
        (abs(spelerY - vijandY) < 50)) {   // y van vijand en speler in elkaars buurt
        console.log("checkGameOver: geraakt"); 
        return true;   
        resetGame();
    } else {
        return false;
    }
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * tekent het rode game over veld
 */
var tekenGameOverVeld = function() {
    fill(255,0,0);
    rect(0, 0, width, height);
}

/**
 * tekent de 'GAME OVER' tekst
 */
var tekenGameOverTekst = function() {
    textSize(150);
    fill(255,255,255);
    text('GAME OVER', 200, 200);
}

/**
 * checkt of de spatiebalk is ingedrukt
 * @returns {boolean} true als het spel weer begint
 */
var checkSpelen = function() {
    if (lastPressedSPACE === false && keyIsDown(32) === true) { // ' ' toets is net ingedrukt
        return true;
    } else {
        return false;
    }

    // bewaar of de ' ' toets is ingedrukt of niet,
    // voor de volgende keer dat deze functie wordt uitgevoerd
        if(keyIsDown(32)) {
            lastPressedSPACE = true;
        } else {
            lastPressedSPACE = false;
        }
}

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegVijandTwee();
      beweegKogel();
      beweegSpeler();

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenVijandTwee (vijandXTwee, vijandYTwee);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
    case GAMEOVER:
      tekenGameOverVeld();
      tekenGameOverTekst();

      if (checkSpelen()) {
        spelStatus = SPELEN;
      }
      break;
  }
}
