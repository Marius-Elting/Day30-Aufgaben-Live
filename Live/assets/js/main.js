// Wie wird ein Array definiert

// const variablenName =["Wert1", "Wert2", "Wert3"]
const cars = ["Saab", "Volvo", "BWM", "Audi"];

console.log(cars);

console.log(cars[2]);


const BMW = cars[2];

console.log(cars[1]);

const volvo = cars[1];
//Länge wird von 1 gezählt
console.log(cars.length);


const first = cars[0];
const last = cars[cars.length - 1];

//Erfahren wo im Array ein Wort/Buchstabe liegt
console.log(cars.indexOf("Volvo"));

// einen Wert im Array ersetzen
cars[3] = "Fiat";

// löscht Fiat aus dem Array und speichert es in einer neuen Variable
// Bezieht sich nur auf das letzte element
const fiat = cars.pop();

console.log(fiat);

//Fügt hinten einen neuen Array hinzu
cars.push("VW");

console.log(cars);

// legt den Index von dem neu hinzugefügten Array in eine Variable
const carsLength = cars.push("Merces");
console.log(cars);
console.log(carsLength);//5
console.log(cars.length);//5

//Löscht das Element am Anfag 
cars.shift();
console.log(cars);

//Fügt vorne einen neuen Index Hinzu
cars.unshift("Ford");
console.log(cars);

//Man kann verschiedene Typen in ein Array Packen
const mixed = [1, "one", 2, "two", 3, "three"];
