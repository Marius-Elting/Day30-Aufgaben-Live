let arrayOutput = [];
let outputP = document.getElementById("output");
// let outputPOP = ;

function hinzufuegen() {
    let input = document.getElementById("input").value;
    console.log(input);
    arrayOutput.push("<li>" + input + "</li>");
    console.log(arrayOutput);
    // let finaloutput = arrayOutput.replace(",", " ");
    // let arrayLenght = arrayOutput.length;
    // console.log(arrayLenght);
    // let outFinal = arrayOutput[arrayLenght - 1].toString();
    let outputPOP = arrayOutput.join(" ");
    outputP.innerHTML = outputPOP;
    let komma = document.getElementById("text");
    komma.innerHTML = "";

    // let outputPOP = document.getElementById("output").innerHTML;;
    // finalOut = outputPOP.replace(", ", " ");
    // outputP.innerHTML = finalOut;
}


// function hinzufuegen() {
//     let input = document.getElementById("input").value;
//     arrayOutput.push(input);
//     let arrayLenght = arrayOutput.length;
//     outputPOP += "<li>" + arrayOutput[arrayLenght - 1] + "</li>";
//     outputP.innerHTML = outputPOP;
// }

function zurueck() {
    arrayOutput.pop();
    outputP.innerHTML = arrayOutput.join(" ");
}