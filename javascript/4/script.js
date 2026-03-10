// ========================================
// LEZIONE 35 - ESERCIZI
// Ciclo For e Iterazioni
// ========================================

// ==================
// ESERCIZIO 1: FOR BASE - CONTARE DA 1 A 10
// ==================
// Usa un ciclo for per stampare in console i numeri da 1 a 10
// Ogni numero deve essere stampato su una riga separata
    for(let i=1; i < 11; i++){
        console.log(i);
    }
// ==================
// ESERCIZIO 2: FOR ALL'INDIETRO
// ==================
// Usa un ciclo for per stampare in console i numeri da 10 a 1 (al contrario)
// Ogni numero deve essere stampato su una riga separata
for(let i=10; i>0; i-- ){
    console.log(i)
}
// ==================
// ESERCIZIO 3: SOMMA CON FOR
// ==================
// Crea una variabile "somma" inizializzata a 0
// Usa un ciclo for per sommare tutti i numeri da 1 a 100
// Stampa il risultato finale in console
let somma = 0;
for(let i=1; i<101; i++){
   somma += i;   
}
console.log(somma);
// ==================
// ESERCIZIO 4: STAMPARE ELEMENTI ARRAY
// ==================
// Usa questo array (NON modificarlo):
let frutti = ["mela", "banana", "arancia", "pera", "kiwi"];
// Usa un ciclo for per stampare in console ogni frutto dell'array
for(let i=0; i<frutti.length;i++){
    console.log(frutti[i])
}
// ==================
// ESERCIZIO 5: TROVARE IL MASSIMO
// ==================
// Usa questo array (NON modificarlo):
let numeri = [23, 67, 12, 89, 34, 56, 90, 45];
// Usa un ciclo for per trovare il numero più grande dell'array
// NON usare Math.max() - fai l'operazione manualmente con il for
// Stampa il risultato in console
let max = numeri[0];
for(let i=1; i<numeri.length; i++){
    if (numeri[i] > max){
        max = numeri[i]}
}
console.log(max);
// ==================
// ESERCIZIO 6: SOMMARE ELEMENTI ARRAY
// ==================
// Usa questo array (NON modificarlo):
let prezzi = [12.50, 8.00, 15.75, 22.00, 9.99];
// Usa un ciclo for per calcolare la somma totale di tutti i prezzi
// Stampa il totale in console
let sommaPrezzi=0;
for(let i=0;i<prezzi.length;i++){
    sommaPrezzi += prezzi[i];
}
console.log(sommaPrezzi)
// ==================
// ESERCIZIO 7: CREARE NUOVO ARRAY - DOPPI (logica map)
// ==================
// Usa questo array (NON modificarlo):
let numeriOriginali = [5, 10, 15, 20, 25];
// Crea un array vuoto "numeriDoppi"
// Usa un ciclo for per riempire "numeriDoppi" con il doppio di ogni numero di "numeriOriginali"
// Stampa entrambi gli array in console
let numeriDoppi=[];
for(let i=0;i<numeriOriginali.length;i++){
    numeriDoppi.push(numeriOriginali[i]*2)
}
console.log(numeriDoppi);
// ==================
// ESERCIZIO 8: CERCARE ELEMENTO
// ==================
// Usa questo array (NON modificarlo):
let nomi = ["Mario", "Lucia", "Paolo", "Anna", "Giorgio", "Francesca"];
// Crea una variabile "nomeDaCercare" con un nome presente nell'array
// Usa un ciclo for per cercare il nome e stampare la sua posizione (indice)
// Se lo trovi, stampa "Trovato alla posizione X", altrimenti "Non trovato"
let nomeDaCercare = "Paolo";
trovato=false;
for(let i=0;i<nomi.length;i++){
    if(nomi[i]===nomeDaCercare){//si può pensare a un confronto .toLowerCase per non avere problemi
        console.log("Trovato alla posizione "+ i)
        trovato=true;
        break;
    }
}

// ==================
// ESERCIZIO 9: CONTARE OCCORRENZE
// ==================
// Usa questo array (NON modificarlo):
let voti = [6, 7, 5, 8, 6, 9, 6, 7, 6, 10];
// Usa un ciclo for per contare quante volte appare il numero 6
// Stampa il risultato in console
let count = 0;
for(let i=0;i<voti.length;i++){
    if(voti[i] === 6) count++ //istruzione unica, niente graffe e unica riga
}
console.log(count)
// ==================
// ESERCIZIO 10: INVERTIRE UN ARRAY
// ==================
// Usa questo array (NON modificarlo):
let lettere = ["a", "b", "c", "d", "e"];
// Crea un array vuoto "lettereInverse"
// Usa un ciclo for per riempire "lettereInverse" con gli elementi in ordine inverso
// NON usare il metodo reverse() - fai l'operazione manualmente
// Stampa entrambi gli array in console
let lettereInverse = [];
for(let i=0;i<lettere.length;i++){
    lettereInverse.unshift(lettere[i])
}
console.log(lettereInverse);
// ==================
// ESERCIZIO 11: FOR CON STRINGHE - CONTARE VOCALI
// ==================
// Usa questa variabile (NON modificarla):
let frase = "JavaScript è un linguaggio di programmazione";
// Usa un ciclo for per contare quante vocali (a, e, i, o, u) ci sono nella frase
// Suggerimento: puoi usare charAt() o accedere ai caratteri come array
// Stampa il numero di vocali in console
let countV = 0;
let vocali = "aeiouèéòù";
for(let i=0;i<frase.length;i++){
    if(vocali.includes(frase[i].toLowerCase())){
        countV++
    }
}  
console.log(countV)
// ==================
// ESERCIZIO 12: CREARE STRINGA DA ARRAY
// ==================
// Usa questo array (NON modificarlo):
let parole = ["JavaScript", "è", "molto", "interessante"];
// Crea una variabile "fraseFinale" inizializzata come stringa vuota ""
// Usa un ciclo for per concatenare tutte le parole in "fraseFinale" separate da uno spazio
// NON usare join() - fai l'operazione manualmente
// Stampa la frase finale in console
let fraseFinale = "";
for(i=0; i<parole.length; i++){
    fraseFinale += parole[i] +" "
}
console.log(fraseFinale)
// ==================
// ESERCIZIO 13: FILTRARE STRINGHE LUNGHE  // logica filter
// ==================
// Usa questo array (NON modificarlo):
let citta = ["Roma", "Milano", "Napoli", "Torino", "Palermo", "Genova", "Bologna"];  
// Crea un array vuoto "cittaLunghe"
// Usa un ciclo for per riempire "cittaLunghe" solo con le città che hanno più di 6 caratteri
// Suggerimento: usa la proprietà length sulle stringhe
// Stampa l'array "cittaLunghe" in console
let cittaLunghe = [];
for(i=0;i<citta.length;i++){
    if(citta[i].length > 6)cittaLunghe.push(citta[i])
}
console.log(cittaLunghe)
// ==================
// ESERCIZIO 14: TROVARE MINIMO E MASSIMO
// ==================
// Usa questo array (NON modificarlo):
let temperature = [18, 22, 15, 27, 20, 12, 25, 19];
// Usa un ciclo for per trovare sia la temperatura minima che quella massima
// Crea due variabili "tempMin" e "tempMax" prima del ciclo
// Stampa entrambi i risultati in console
let tempMax = temperature[0];
let tempMin = temperature[0];
for(i=0;i<temperature.length;i++){
    if(temperature[i]>tempMax){
        tempMax = temperature[i]
    }if(temperature[i]<tempMin){
        tempMin = temperature[i]
    }
}
console.log(tempMax, tempMin)
// ==================
// ESERCIZIO 15: TRASFORMAZIONE COMPLESSA
// ==================
// Usa questo array (NON modificarlo):
let studenti = ["mario", "lucia", "paolo", "anna"];
// Crea un array vuoto "studentiMaiuscolo"
// Usa un ciclo for per:
//   1. Prendere ogni nome
//   2. Convertirlo in maiuscolo
//   3. Aggiungere "- Studente" alla fine
//   Esempio: "mario" diventa "MARIO - Studente"
// Riempi "studentiMaiuscolo" con i nomi trasformati
// Stampa l'array finale in console
let studentiMaiuscolo = [];
    for(i=0;i<studenti.length;i++){
        studentiMaiuscolo.push(studenti[i].toUpperCase())
    }
    console.log(studentiMaiuscolo)
// ==================
// ESERCIZIO 16: FILTRARE ARRAY - NUMERI PARI (logica filter)
// ==================
// Usa questo array (NON modificarlo):
let numeriTutti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Crea un array vuoto "numeriPari"
// Usa un ciclo for per riempire "numeriPari" solo con i numeri pari
// Stampa l'array "numeriPari" in console
let numeriPari = [];
for(i=0;i<numeriTutti.length;i++){
    if(numeriTutti[i]%2===0) numeriPari.push(numeriTutti[i])
}
console.log(numeriPari)