/*Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for in tutte le
proprietà.*/
var studente = {
    "nome": "alessandro",
    "cognome": "rossi",
    "età": 25
}

for (var datistudente in studente) {
    console.log(studente[datistudente]);
}

/* Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
var arrstudenti = [
    marco = {
        "nome": "marco",
        "cognome": "frigerio",
    },

    davide = {
        "nome": "davide",
        "cognome": "poppa",
    },

    simone = {
        "nome": "simone",
        "cognome": "pica",
    }
];

for (var datistudenti in arrstudenti) {
    console.log(arrstudenti[datistudenti]);
}

/*Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo nell’ordine:
nome, cognome e età.*/

listastudenti = [];

var name = prompt("Inserisci il nome dello studente che vuoi aggiungere.");
var surname = prompt("Inserisci il cognome dello studente che vuoi aggiungere.");
var age = prompt("Inserisci l'èta dello studente che vuoi aggiungere.");

listastudenti.nome = name;
listastudenti.cognome = surname;
listastudenti.età = age;

console.log(listastudenti);