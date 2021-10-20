//inserisci none, cognome, colore preferito
//output nome, cognome, colore preferito

/*
1 inizializzazione variabili 
2 inserimento dati
3 stampa a video risultati 
*/

const firstname = prompt ("Inserisci il nome");
const lastname = prompt ("Inserisci il cognome");
const color = prompt ("Inserisci il colore");


console.log(firstname);
console.log(lastname);
console.log(color);


const textToPrint =
`
Nome: ${firstname};<br>
Cognome: ${lastname};<br>
Colore preferito: ${color};<br>

`;
console.log(textToPrint);
document.getElementById('utente').innerHTML = textToPrint;