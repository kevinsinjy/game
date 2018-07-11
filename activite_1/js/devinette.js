/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

/*
switch (solution) {

    case i>solution:
        console.log('le chiffre est trop grand');
        break;

    case i<solution:
        console.log('le chiffre est trop petit');
        break;
    
    case i==solution:
        console.log('BRAVO!');
        break;
}
*/

var numClick = 0;
var essai = 6;

function myFunction() {
    var x, text;

    x = document.getElementById("number").value;

    if (x == solution) {
        text = "BRAVO !";
        console.log('BRAVO!');
    } else if (x < solution) {
        text = "le chiffre est trop petit";
        console.log('le chiffre est trop petit');

    } else if (x > solution) {
        text = "le chiffre est trop grand";
        console.log('le chiffre est trop grand');
    }
    numClick++;
    alert("Il vous reste :" + (essai - numClick) + "essai(s)");

    if (numClick >= 6) {

        alert("Vous avez perdu ! Looser !");

    }

    document.getElementById("answer").innerHTML = text;
};