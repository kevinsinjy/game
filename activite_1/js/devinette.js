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

var essai = 6;
//var reload = window.location.reload(true); 
function myFunction() {

    var x, text;
    x = document.getElementById("number").value;

    if (x == solution) {
        alert("GG !");
        window.location.reload(true);

    } else if (x < solution) {
        text = x + " is too small";

    } else if (x > solution) {
        text = x + " is too great";
    }
    essai--;

    var text2 = essai + " try left";

    if (essai < 0) {

        alert("You loose ! Try again !");
        window.location.reload(true);
    }

    document.getElementById("answer").innerHTML = text + "\n" + text2;
}