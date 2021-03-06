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

var vijandX =[0, 0, 0, 0, 
               100, 100,  
                200, 200, 200, 
                 300, 350, 300, 350, 
                  400, 400, 400, 400, 400,
                   500, 500,
                    600, 622, 600, 650, 600,
                     700, 
                      800, 800, 800,
                       950, 900, 950,  
                        1000, 1000, 1000, 1000, 1000, 
                         1100, 1100, 1100, 1100,
                          1200, 1200, 1200,
                           1300, 1300, 1300];  // x-positie van vijanden
var vijandY = [0, 35+150, 35+2*150, 35+3*150,
               50, 450,
                90,  500, 600,
                  0, 35+150, 35+2*150, 550, 
                   50, 175, 275, 425, 650,
                    69, 425, 
                    20, 290, 500, 600, 375,
                     69,
                      0, 35+150, 35+3*150,
                       175, 300, 550,
                        90, 290, 500, 600, 375,
                         69, 150, 425, 610,
                          35+150, 35+3*150, 450,
                           50, 175, 550]; // y-positie van vijanden

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
 */
var tekenVijand = function(){
  fill (65, 139, 196);
  for (var i=0; i < vijandY.length; i = i + 1) {
    ellipse(vijandX[i], vijandY[i], 50, 50);
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
    for (var i = 0; i < vijandX.length; i = i + 1) {
      vijandX[i]= vijandX[i] + 1,5

      if (vijandX[i] > 1260) {
          vijandX[i] = 0 
      }
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
    
    // zorgt ervoor dat de speler weer beneden te recht komt als die helemaal bovenaan is
    if (spelerY < 0) {
        spelerY = 670;
    }
};

var resetGame = function() {
    spelerX = 640; // x-positie van speler
    spelerY = 670; // y-positie van speler
    kogelX = 0;    // x-positie van kogel
    kogelY = 0;    // y-positie van kogel
    vijandX =[0, 0, 0, 0, 
               100, 100,  
                200, 200, 200, 
                 300, 350, 300, 350, 
                  400, 400, 400, 400, 400,
                   500, 500,
                    600, 622, 600, 650, 600,
                     700, 
                      800, 800, 800,
                       950, 900, 950,  
                        1000, 1000, 1000, 1000, 1000, 
                         1100, 1100, 1100, 1100,
                          1200, 1200, 1200,
                           1300, 1300, 1300];  // x-positie van vijanden
    vijandY = [0, 35+150, 35+2*150, 35+3*150,
               50, 450,
                90,  500, 600,
                  0, 35+150, 35+2*150, 550, 
                   50, 175, 275, 425, 650,
                    69, 425, 
                    20, 290, 500, 600, 375,
                     69,
                      0, 35+150, 35+3*150,
                       175, 300, 550,
                        90, 290, 500, 600, 375,
                         69, 150, 425, 610,
                          35+150, 35+3*150, 450,
                           50, 175, 550];               // y-positie van vijanden
    score = 0; // aantal behaalde punten
    lastPressedW = false; // bijhouden of W toets tussendoor is losgelaten
    lastPressedS = false; // bijhouden of S toets tussendoor is losgelaten
    lastPressedA = false; // bijhouden of A toets tussendoor is losgelaten
    lastPressedD = false; // bijhouden of D toets tussendoor is losgelaten
    lastPressedSPACE = false; // bijhouden of de ' ' toets tussendoor is losgelaten
}

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    for (var i = 0; i < vijandY.length; i = i + 1) {
      if ((abs(spelerX - vijandX[i]) < 50)  &&  // x van vijand en speler in elkaars buurt
        (abs(spelerY - vijandY[i]) < 50)) {   // y van vijand en speler in elkaars buurt
        console.log("checkGameOver: geraakt"); 
        resetGame();
        return true;   
      } 
    }
    return false;
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
 * tekent de 'druk de spatie balk om opnieuw te beginnen' tekst
 */
var tekenGameOverTekst = function() {
    textSize(150);
    fill(255,255,255);
    text('GAME OVER', 200, 200);
    textSize(60);
    text('druk de spatie balk om opnieuw te beginnen', 50, 400);
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
      beweegKogel();
      beweegSpeler();

      tekenVeld();
      tekenVijand();
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
