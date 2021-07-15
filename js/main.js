// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//-  il prezzo del biglietto è definito in base ai km (0.21 € al km)
//-  va applicato uno sconto del 20% per i minorenni
//-  va applicato uno sconto del 40% per gli over 65.


var km_utente = parseInt(prompt("Quanti chilometri percorrerai ? "));

var eta_utente = parseInt(prompt("Quanti hanni hai ? "));

console.log(km_utente);
console.log(eta_utente);

if (eta_utente < 18) {
    prezzo_biglietto = (km_utente * 0.21) * 0.8;
}
else if (eta_utente > 65) {
    prezzo_biglietto = (km_utente * 0.21) * 0.6;
}
else {
    prezzo_biglietto = (km_utente * 0.21);
}

console.log("il costo del biglietto è " + prezzo_biglietto)

