// ========================================
// LEZIONE 29 - ESERCIZI
// ========================================

// ==================
// ESERCIZIO 1: VARIABILI
// ==================
// Crea una variabile chiamata "nome" e assegnale il tuo nome
// Crea una variabile chiamata "eta" e assegnale la tua età
// Crea una variabile chiamata "studente" e assegnale il valore true
// Stampa in console tutte e tre le variabili
let nome = "Francesco";
let eta = 39;
let studente = true
console.log(nome, eta, studente);
// ==================
// ESERCIZIO 2: OPERAZIONI CON VARIABILI
// ==================
// Crea due variabili numeriche: "numero1" con valore 10 e "numero2" con valore 5
// Crea una variabile "somma" che contenga la somma dei due numeri
// Crea una variabile "prodotto" che contenga il prodotto dei due numeri
// Stampa in console somma e prodotto
let numero1 = 10;
let numero2 = 5;
let somma = (numero1 + numero2);
let prodotto = (numero1 * numero2);
console.log(somma, prodotto);
// ==================
// ESERCIZIO 3: CONCATENAMENTO DI STRINGHE
// ==================
// Crea una variabile "nome" con il tuo nome
// Crea una variabile "cognome" con il tuo cognome
// Crea una variabile "nomeCompleto" che concateni nome e cognome con uno spazio in mezzo
// Stampa in console il nomeCompleto
let cognome = "Cardullo";
let nomeCompleto = nome + " " + cognome;
console.log(nomeCompleto);
// ==================
// ESERCIZIO 4: CONCATENAMENTO CON OPERATORE +
// ==================
// Crea una variabile "città" con il nome di una città
// Crea una variabile "paese" con il nome di un paese
// Crea una variabile "messaggio" che dica dove vivi unendo città e paese (es: "Vivo a Roma, Italia")
// Stampa il messaggio in console
let citta = "Palermo";
let paese = "Italia";
let messaggio = "Vivo a " + citta + "," + " " + paese;
console.log(messaggio)
// ==================
// ESERCIZIO 5: CONCATENAMENTO CON NUMERI E STRINGHE
// ==================
// Crea una variabile "annoNascita" con un anno (es: 2000)
// Crea una variabile "etaCalcolata" con il numero 26
// Crea un messaggio che dica l'anno di nascita e l'età (es: "Sono nato nel 2000 e ho 26 anni")
// Stampa il messaggio in console
let annoNascita = 1986;
let etaCalcolata = 39;
console.log("Sono nato nel ", annoNascita, " e ho ", etaCalcolata, " anni" );
// ==================
// ESERCIZIO 6: OPERATORI DI CONFRONTO
// ==================
// Crea una variabile "altezza" con valore 175
// Verifica se altezza è maggiore di 160 e stampa il risultato (true/false)
// Verifica se altezza è uguale a 180 e stampa il risultato
// Verifica se altezza è diversa da 175 e stampa il risultato
let altezza = 175;
console.log(altezza > 160, altezza == 180, altezza != 175);
// ==================
// ESERCIZIO 7: OPERATORI LOGICI
// ==================
// Crea una variabile "temperatura" con valore 25
// Crea una variabile "piove" con valore false
// Verifica se la temperatura è maggiore di 20 E non piove (usa l'operatore &&)
// Verifica se la temperatura è minore di 10 O piove (usa l'operatore ||)
// Stampa i risultati in console
let temperatura = 25;
let piove = false;
console.log(temperatura > 20 && piove == false);
console.log(temperatura < 10 || piove == true);
// ==================
// ESERCIZIO 8: IF SEMPLICE
// ==================
// Crea una variabile "voto" con un valore numerico (es: 7)
// Usa un if per verificare se il voto è maggiore o uguale a 6
// Se è vero, stampa "Promosso!"
let voto = 7;
if(voto >= 6){
    console.log("Promosso!");
}
// ==================
// ESERCIZIO 9: IF...ELSE
// ==================
// Crea una variabile "password" con una stringa a tua scelta
// Usa if...else per verificare se la password è uguale a "12345"
// Se è corretta stampa "Accesso consentito", altrimenti "Accesso negato"
let password = "1234"
if(password == "12345"){
    console.log("Accesso consentito");
}else {
    console.log("Accesso negato!");
}
// ==================
// ESERCIZIO 10: IF...ELSE IF...ELSE
// ==================
// Crea una variabile "punteggio" con un valore numerico (da 0 a 100)
// Usa if...else if...else per assegnare un giudizio:
// - Se punteggio >= 90: stampa "Eccellente"
// - Se punteggio >= 70: stampa "Buono"
// - Se punteggio >= 60: stampa "Sufficiente"
// - Altrimenti: stampa "Insufficiente"
let punteggio = 22;
if (punteggio >= 90){
    console.log("Eccellente");
}else if (punteggio >= 70){
    console.log("Buono");
}else if (punteggio >= 60){
    console.log("Sufficiente");
}else {
    console.log("Insufficiente");
}
// ==================
// ESERCIZIO 11: CREARE UN ARRAY
// ==================
// Crea un array chiamato "frutta" con 4 nomi di frutta
// Stampa in console l'intero array
// Stampa in console il primo elemento dell'array
// Stampa in console l'ultimo elemento dell'array
let frutta = ["Ananas", "Mela", "Banana", "Pera"];
console.log(frutta);
console.log(frutta[0]);
console.log(frutta[3]);
// ==================
// ESERCIZIO 12: LUNGHEZZA DI UN ARRAY
// ==================
// Usa questo array (NON modificarlo a mano):
let colori = ["rosso", "blu", "verde", "giallo", "arancione"];
// Stampa in console quanti elementi ci sono nell'array
// Stampa in console il terzo colore dell'array
console.log(colori.length);
console.log(colori[2]);
// ==================
// ESERCIZIO 13: MODIFICARE ELEMENTI DI UN ARRAY
// ==================
// Usa questo array (NON modificarlo a mano):
let numeri = [10, 20, 30, 40];
// Cambia il secondo elemento (20) con il valore 25 usando il codice
// Stampa in console l'array modificato
numeri.splice(1, 1, 25);
console.log(numeri);
