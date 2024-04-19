// VARIABLES //

// Magnification 
var ocularImp = document.getElementById("ocularImp");
let objectiveImp = document.getElementById("objectiveImp");
var calcMagBtn = document.getElementById("calcMag");
let clearMagBtn = document.getElementById("clearMag");

// Size of object
var fovImp = document.getElementById("fovImp");
let fitImp = document.getElementById("fitImp");
var calcSooBtn = document.getElementById("calcSoo");
let clearSooBtn = document.getElementById("clearSoo");

// Scale
var sodImp = document.getElementById("sodImp");
let sooImp = document.getElementById("sooImp");
var calcSclBtn = document.getElementById("calcScl");
let clearSclBtn = document.getElementById("clearScl");

// OTHA STUFF //

// Magnification 
calcMagBtn.addEventListener("click", calculateMagnification);
function calculateMagnification () {
    var MagOut = ocularImp * objectiveImp;
    console.log("mag = " + MagOut);
}

// Size of object


// Scale

