/////////////////////CAMPO MINATO//////////////////////////

// DICHIARO le variabili globali:
// Griglia
const grid = document.querySelector(".grid");
// Modalità di gioco selezionata (da cui dipende numero di quadratini)
let difficulty = document.getElementById("mode-selector");
// Bottone che caricherà la griglia, qualsiasi essa sia
const start = document.getElementById("start"); 
// Numero dei riquadri, parto da zero, saranno 49, 81 e 100
let numberSquares = 100;
// Griglia già generata o meno
// let gridGenerated = false; 

/* console.log(difficulty.value); */

// FUNZIONI:

// Questa funzione crea gli elementi all'interno della griglia:
function gridGenerated(numberSquares) {
    let currentElement ="";
    let lastClass = difficulty.value; // inserisco difficoltà scelta
    /* grid.innerHTML = ""; */ // appunti solo perchè mi da errore
    for (let i = 1; i <= numberSquares; i++) {
        currentElement = document.createElement("div"); // creo un div nel DOM
        currentElement.classList.add("grid-element", lastClass) // gli aggiungo le classi che mi interessano
        currentElement.innerText = i; // inserisco il numero nella casella
        currentElement.addEventListener("click", itemClick); 
        grid.appendChild(currentElement); // aggiungo questo elemento alla griglia
    }
    return currentElement;
}

// Questa funzione è una lista randomica di numeri Bomba 
function getNewRandomBombsArray (bombsNumber, min, max){
    let blackList = [];
    console.log(blackList);
    let arrayBombs = [];
    for (let i = 0; i < bombsNumber; i++ ){
        let newBomb = generateUniqueRandomNumber(blackList, min, max);
        arrayBombs.push(newBomb);
    }
    return arrayBombs;
}


// Questa funzione fa cambiare quanto la griglia è grande in base alla scelta della difficoltà
function regulationGrid (modeUser) {
    if (modeUser === "easy"){
        numberSquares = 100;
    } else if (modeUser === "medium"){
        numberSquares = 81;
    } else if (modeUser === "hard"){
        numberSquares = 49;
    }
    return numberSquares;
}

// Questa funzione fa cambiar colore alla casella con un click
function itemClick() {
    console.log(this.innerText);    
    this.classList.add("click-blu");    
}

// Questa funzione 
start.addEventListener('click', function() {
    const mode = difficulty.value; // modalita scelta dal menu a tendina
    console.log(mode);
    const numberSquares = regulationGrid(mode); //richiamo funzione per dare il numero di elementi della grid
    console.log(numberSquares);
    const lastNumberGrid = gridGenerated(numberSquares); 
    grid.append(lastNumberGrid);  
    console.log(lastNumberGrid);     
});

// aggiungere bombe durante la creazione della griglia
