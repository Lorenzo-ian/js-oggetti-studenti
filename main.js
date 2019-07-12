/*Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for in tutte le
proprietà.*/
var studente = {
    "nome": "alessandro",
    "cognome": "rossi",
    "età": "25"
}

for (var datistudente in studente) {
    console.log(datistudente + " = " + studente[datistudente]);
}

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
var arrstudenti = [
    {
        "nome": "marco",
        "cognome": "frigerio",
        "età": "22"
    },

    {
        "nome": "davide",
        "cognome": "poppa",
        "età": "28"
    },

    {
        "nome": "simone",
        "cognome": "pica",
        "età": "32"
    }
];

for (var i = 0; i < arrstudenti.length; i++) {
    console.log(arrstudenti[i].nome, arrstudenti[i].cognome, arrstudenti[i].età);
}
/*Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo nell’ordine:
nome, cognome e età.*/

var name = prompt("Inserisci il nome dello studente che vuoi aggiungere.");
var surname = prompt("Inserisci il cognome dello studente che vuoi aggiungere.");
var age = prompt("Inserisci l'èta dello studente che vuoi aggiungere.");

arrstudenti.push({"nome": name,"cognome": surname, "età" : age});

console.log("L'array studenti contiene = ", arrstudenti);