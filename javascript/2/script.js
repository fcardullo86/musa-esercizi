// ========================================
// LEZIONE 31 - ESERCIZI
// Array, Oggetti e Funzioni
// ========================================

// ==================
// ESERCIZIO 1: FUNZIONE SEMPLICE
// ==================
// Crea una funzione chiamata "saluta" che non prende parametri
// La funzione deve stampare "Ciao a tutti!" in console
// Chiama la funzione per testarla
function saluta() {
    console.log("Ciao a tutti!");
}
saluta();
// ==================
// ESERCIZIO 2: FUNZIONE CON PARAMETRO
// ==================
// Crea una funzione chiamata "salutaPersona" che prende un parametro "nome"
// La funzione deve stampare "Ciao [nome]!" (es: "Ciao Mario!")
// Chiama la funzione con almeno 2 nomi diversi
function salutaPersona(nome) {
    console.log("Ciao " + nome);
}
salutaPersona("Francesco");
// ==================
// ESERCIZIO 3: FUNZIONE CON RETURN
// ==================
// Crea una funzione chiamata "somma" che prende due parametri "a" e "b"
// La funzione deve RESTITUIRE la somma di a e b
// Chiama la funzione e salva il risultato in una variabile, poi stampala
function somma(a, b) {
    return a + b;
}
let varSomma = somma(3, 5);
console.log(varSomma);
// ==================
// ESERCIZIO 4: ARRAY - PUSH E POP
// ==================
// Crea un array vuoto chiamato "colori"
// Usa push() per aggiungere 3 colori all'array
// Stampa l'array
// Usa pop() per rimuovere l'ultimo colore
// Stampa di nuovo l'array
let colori = [];
colori.push("giallo", "rosso", "blu");
console.log(colori);
colori.pop(colori.length - 1);
console.log(colori);
// ==================
// ESERCIZIO 5: ARRAY - SHIFT E UNSHIFT
// ==================
// Crea un array "numeri" con i valori [10, 20, 30]
// Usa unshift() per aggiungere il numero 5 all'inizio
// Usa shift() per rimuovere il primo elemento
// Stampa l'array dopo ogni operazione
let numeri = [10, 20, 30];
numeri.unshift(5);
console.log(numeri);
numeri.shift(0);
console.log(numeri);
// ==================
// ESERCIZIO 6: ARRAY - SLICE
// ==================
// Crea un array "animali" con almeno 5 animali
// Usa slice() per creare un nuovo array con solo i primi 3 animali
// Stampa entrambi gli array (l'originale e quello nuovo)
let animali = ["lupo", "lepre", "cane", "narvalo", "marmotta"];
animali.slice(0, 3);
console.log(animali.slice(0, 3));
console.log(animali);
// ==================
// ESERCIZIO 7: ARRAY - JOIN
// ==================
// Crea un array "parole" con le parole ["JavaScript", "è", "fantastico"]
// Usa join() con uno spazio come separatore per creare una frase
// Stampa la frase risultante
let parole = ["Javascript", "è", "fantastico"];
console.log(parole.join(" "));
// ==================
// ESERCIZIO 8: ARRAY - CONCAT
// ==================
// Crea due array: "frutta1" con ["mela", "pera"] e "frutta2" con ["banana", "arancia"]
// Usa concat() per unire i due array in un nuovo array "tuttaLaFrutta"
// Stampa il risultato
let frutta1 = ["mela", "pera"];
let frutta2 = ["banana", "arancia"];
const frutta3 = frutta1.concat(frutta2);
console.log(frutta3);
// ==================
// ESERCIZIO 9: ARRAY - INCLUDES
// ==================
// Crea un array "citta" con almeno 4 città
// Usa includes() per verificare se "Roma" è nell'array
// Usa includes() per verificare se "Parigi" è nell'array
// Stampa i risultati (true/false)
let citta = ["Palermo", "Roma", "Milano", "Bologna"];
console.log(citta.includes("Roma"));
console.log(citta.includes("Parigi"));
// ==================
// ESERCIZIO 10: ARRAY - INDEXOF
// ==================
// Crea un array "lettere" con ["a", "b", "c", "d", "e"]
// Usa indexOf() per trovare la posizione di "c"
// Usa indexOf() per cercare "z" (che non c'è)
// Stampa i risultati
let lettere = ["a", "b", "c", "d", "e"];
console.log(lettere.indexOf("c"));
console.log(lettere.indexOf("z"));
// ==================
// ESERCIZIO 11: OGGETTO SEMPLICE
// ==================
// Crea un oggetto "persona" con le proprietà:
// - nome: il tuo nome
// - eta: la tua età
// - citta: la tua città
// Stampa l'intero oggetto
// Stampa solo la proprietà "nome" usando la dot notation
let persona = {
    nome: "Francesco",
    eta: 39,
    citta: "Palermo",
}
console.log(persona);

console.log(persona.nome);
// ==================
// ESERCIZIO 12: OGGETTO CON METODO
// ==================
// Crea un oggetto "calcolatrice" con:
// - una proprietà "marca" (es: "Casio")
// - un metodo "somma" che prende due parametri e restituisce la loro somma
// Chiama il metodo somma e stampa il risultato
let calcolatrice = {
    marca: "Casio",
    somma(a, b) {
        return a + b;
    }
}
console.log(calcolatrice.somma(2, 4));
// ==================
// ESERCIZIO 13: OGGETTO CON THIS
// ==================
// Crea un oggetto "studente" con:
// - proprietà: nome, voto
// - metodo "stampaInfo" che usa "this" per stampare "Nome: [nome], Voto: [voto]"
// Chiama il metodo stampaInfo
let studente = {
    nome: "Francesco",
    voto: 10,
    stampaInfo() {
        console.log("Nome: " + this.nome + ", Voto: " + this.voto)
    }
}
studente.stampaInfo();
// ==================
// ESERCIZIO 14: ARRAY DI OGGETTI
// ==================
// Crea un array "libri" con 3 oggetti libro, ogni libro ha:
// - titolo (stringa)
// - autore (stringa)
// - pagine (numero)
// Stampa l'intero array
// Stampa solo il titolo del secondo libro
let libri = [
    {
        titolo: "Il conte di Montecristo",
        autore: "Dumas",
        pagine: 234
    },
    {
        titolo: "Moby Dick",
        autore: "Melville",
        pagine: 342
    },
    {
        titolo: "Il vecchio e il mare",
        autore: "Hemingway",
        pagine: 145
    }
]
console.log(libri);
console.log(libri[1].titolo);
// ==================
// ESERCIZIO 15: FUNZIONE CHE RESTITUISCE OGGETTO
// ==================
// Crea una funzione "creaPersona" che prende due parametri: nome ed età
// La funzione deve restituire un oggetto con le proprietà nome ed età
// Chiama la funzione e salva il risultato in una variabile
// Stampa l'oggetto creato
function creaPersona(nome, eta) {
    return {
        nome: nome,
        eta: eta
    }
}
let Persona = creaPersona("Gino", 34)
console.log(Persona)
// ==================
// ESERCIZIO 16: OGGETTO CON METODO CHE USA ARRAY
// ==================
// Crea un oggetto "classe" con:
// - proprietà "studenti" (array di nomi)
// - metodo "aggiungiStudente" che prende un nome e lo aggiunge all'array
// - metodo "contaStudenti" che restituisce il numero di studenti
// Aggiungi alcuni studenti e stampa il conteggio
let classe = {
    studenti: ["Michele", "Giorgio", "Anna", "Simona"],
    aggiungiStudente(nome) { this.studenti.push(nome) },
    contaStudenti() {
        return this.studenti.length;
    }
}
classe.aggiungiStudente("Mario");
classe.aggiungiStudente("Guarino");
console.log(classe.studenti);
console.log(classe.contaStudenti());
// ==================
// ESERCIZIO 17: OGGETTO CON PIÙ METODI
// ==================
// Crea un oggetto "contoBancario" con:
// - proprietà "saldo" inizializzata a 1000
// - metodo "deposita" che prende un importo e lo aggiunge al saldo
// - metodo "preleva" che prende un importo e lo sottrae dal saldo
// - metodo "mostraSaldo" che stampa il saldo attuale
// Fai alcune operazioni e mostra il saldo finale
let contoBancario = {
    saldo: 1000,
    deposita(importo){
        return this.saldo += importo;
    },
    preleva(importo){
        return this.saldo -= importo;
    },
    mostraSaldo(){
        console.log("Il saldo corrisponde a € " + this.saldo);
    }
}
contoBancario.deposita(2350);
contoBancario.mostraSaldo();
contoBancario.preleva(100);
contoBancario.mostraSaldo();


