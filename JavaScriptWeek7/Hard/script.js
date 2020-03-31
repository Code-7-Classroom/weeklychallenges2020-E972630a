var tomMass = 8;
var tomHeight = 9;
var jerryMass = 0.1;
var jerryHeight = 3.93;

var tomBMI = calcBMI(tomMass, tomHeight);
var jerryBMI = calcBMI(jerryMass, jerryHeight);
var comparison = (tomBMI > jerryBMI);

function calcBMI(mass, height){
    return mass / (height * height);
}
console.log(tomBMI);
console.log(jerryBMI);
console.log( "Is Tom's BMI higher than Jerry's?" + ' ' + comparison);