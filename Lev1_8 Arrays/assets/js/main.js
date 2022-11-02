const deutscheGerichte = ["Speckkuchen", "Thüringer", "Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];

deutscheGerichte.unshift("Döner", "Sülze", "Sauerbraten", "Currywurst", "Brezen");
console.log(deutscheGerichte);

deutscheGerichte.shift();
deutscheGerichte.shift();
deutscheGerichte.shift();
const nichtgut = deutscheGerichte;


console.log(nichtgut)

