// ========================================
// LEZIONE 33 - ESERCIZI
// Metodi delle stringhe, Math, Date, Funzioni
// ========================================

// ==================
// ESERCIZIO 1: RICERCA SEMPLICE
// ==================
// Crea una variabile "frase" con il testo "JavaScript è fantastico"
// Crea una variabile "parola" con il testo "fantastico"
// Usa il metodo indexOf() per trovare la posizione di "parola" dentro "frase"
// Stampa il risultato in console
    let frase = "Javascript è fantastico";
    let parola = "fantastico";
    console.log(frase.indexOf(parola));
// ==================
// ESERCIZIO 2: VERIFICA PRESENZA
// ==================
// Crea una variabile "email" con un indirizzo email a tua scelta
// Usa il metodo includes() per verificare se l'email contiene il simbolo "@"
// Stampa il risultato (true/false) in console
    let email = "francescocardullo86@gmail.com";
    console.log(email.includes("@"));
// ==================
// ESERCIZIO 3: MAIUSCOLE E MINUSCOLE
// ==================
// Crea una variabile "nome" con il testo "mario rossi"
// Usa il metodo toUpperCase() per convertire tutto in maiuscolo e salvalo in una variabile "nomeMaiuscolo"
// Usa il metodo toLowerCase() per convertire in minuscolo e salvalo in "nomeMinuscolo"
// Stampa entrambe le variabili in console
    let nome = "mario rossi";
    let nomeMaiuscolo = nome.toUpperCase();
    let nomeMinuscolo = nome.toLowerCase();
    console.log(nomeMaiuscolo, nomeMinuscolo);
// ==================
// ESERCIZIO 4: DADO
// ==================
// Crea una variabile "dado" che contenga un numero casuale da 1 a 6 (inclusi)
// Usa Math.random() e Math.floor() per generare il numero
// Stampa il risultato in console
    let dado = Math.floor(Math.random()* 6 + 1);
    console.log(dado);
// ==================
// ESERCIZIO 5: PESCA DA ARRAY
// ==================
// Crea un array "colori" con almeno 4 colori
// Genera un indice casuale tra 0 e la lunghezza dell'array - 1
// Usa quell'indice per pescare un colore casuale dall'array
// Stampa il colore pescato in console
    let colori = ["giallo", "rosso", "blu", "verde"];
    function estraiColore(){
    let coloreCasuale = Math.floor(Math.random()* colori.length)
    return colori[coloreCasuale];
    }
    console.log(estraiColore());
// ==================
// ESERCIZIO 6: DATA CORRENTE
// ==================
// Crea una variabile "oggi" con un nuovo oggetto Date (new Date())
// Usa il metodo getDate() per ottenere il giorno del mese e salvalo in "giorno"
// Usa il metodo getMonth() per ottenere il mese (ricorda: parte da 0!) e salvalo in "mese"
// Usa il metodo getFullYear() per ottenere l'anno e salvalo in "anno"
// Stampa in console: "Oggi è il giorno [giorno] del mese [mese] dell'anno [anno]"
    let oggi = new Date();
    let giorno = oggi.getDate();
    let mese = oggi.getMonth();
    let anno = oggi.getFullYear();
    console.log("Oggi è il giorno " + giorno + " del mese " + mese + " dell'anno " + anno);
// ==================
// ESERCIZIO 7: GIORNO DELLA SETTIMANA
// ==================
// Crea un array "giorniSettimana" con i nomi dei giorni (da Domenica a Sabato)
// Usa new Date() e il metodo getDay() per ottenere il nome del giorno corrente dall'array
// Stampa il nome del giorno in console
    let giorniSettimana = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
    let now = new Date();
    let giornoCorrente = now.getDay();
    console.log(giorniSettimana[giornoCorrente])
// ==================
// ESERCIZIO 8: FUNZIONE CERCA PAROLA
// ==================
// Crea una funzione chiamata "cercaParola" che prende due parametri: "testo" e "parola"
// La funzione deve restituire true se "parola" è presente in "testo", false altrimenti
// Usa il metodo includes()
// Testa la funzione con: cercaParola("JavaScript è divertente", "divertente")
    function cercaParola(testo, parola){
        return testo.includes(parola);
    }
    console.log(cercaParola("JavaScript è divertente", "divertente"));

// ==================
// ESERCIZIO 9: FUNZIONE LANCIO DADI
// ==================
// Crea una funzione chiamata "lanciaDueDadi" che non prende parametri
// La funzione deve lanciare due dadi (numeri casuali da 1 a 6) e restituire la loro somma
// Testa la funzione chiamandola e stampando il risultato
    function lanciaDueDadi(){
        let dado1 = Math.floor(Math.random()* 6 + 1);
        let dado2 = Math.floor(Math.random()* 6 + 1);
        return dado1 + dado2;
    }
    console.log(lanciaDueDadi());
// ==================
// ESERCIZIO 10: FUNZIONE ETÀ DA ANNO
// ==================
// Crea una funzione chiamata "calcolaEta" che prende un parametro "annoNascita"
// La funzione deve calcolare e restituire l'età della persona
// Usa new Date().getFullYear() per ottenere l'anno corrente
// Testa la funzione con: calcolaEta(2000)
    function calcolaEta(annoNascita){
        let annoInCorso = new Date().getFullYear();
        return annoInCorso - annoNascita;
    }
    console.log(calcolaEta(1957));