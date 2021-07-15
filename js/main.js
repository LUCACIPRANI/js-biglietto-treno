// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//-  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//-  va applicato uno sconto del 20% per i minorenni
//-  va applicato uno sconto del 40% per gli over 65.


var km_utente = parseInt(prompt("Quanti chilometri percorrerai ? "));

document.getElementById("km").innerHTML = km_utente;

var eta_utente = parseInt(prompt("Quanti hanni hai ? "));

document.getElementById("age").innerHTML = eta_utente;

// defining variables 

var scontoUnderDiciotto = 0.8;
var scontoOverSessantacinque = 0.6;
var prezzo_biglietto = 0.21;


if (eta_utente < 18) {
    prezzo_biglietto = (km_utente * prezzo_biglietto) * scontoUnderDiciotto;
}
else if (eta_utente > 65) {
    prezzo_biglietto = (km_utente * prezzo_biglietto) * scontoOverSessantacinque;
}
else {
    prezzo_biglietto = (km_utente * prezzo_biglietto);
}

prezzo_biglietto = (prezzo_biglietto.toFixed(2));

document.getElementById("ticket_cost").innerHTML = "Total cost " + prezzo_biglietto + " €";


// Console 
console.log(km_utente);
console.log(eta_utente);
console.log("il costo del biglietto è " + prezzo_biglietto)


