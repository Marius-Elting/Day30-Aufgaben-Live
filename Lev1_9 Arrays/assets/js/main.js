/*
Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
Push und Pop verschieben das Array NICHT seitlich (weil sie am Ende Elemente hinzufügen und entfernen).
In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere Wort das Array länger.
*/

const zahlen = [23, 54, 75];
console.log(zahlen);
zahlen.push(2, 3, 4, 5, 6);
console.log(zahlen);
zahlen.unshift(7, 8, 9, 10, 11);
console.log(zahlen);
zahlen.pop();
zahlen.pop();
console.log(zahlen);
zahlen.shift();
zahlen.shift();
console.log(zahlen);