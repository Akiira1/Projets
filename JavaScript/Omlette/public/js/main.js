import { akiira, maison, oeufs, beurre, couteau, champignon, poivre, epicerie, ciboullette, poele, bol } from "./_variables.js"


/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/

/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */


// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.

epicerie.stock.push(oeufs, beurre, champignon, poivre, ciboullette)

//  * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
//  */




// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]

/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
akiira.seDeplacer(maison, maison)

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie
akiira.seDeplacer(maison, epicerie)

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
akiira.mainDroite.push(epicerie.paniers[0])
epicerie.paniers.shift()
// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type :
// console.log(`${personnage.nom} a pris un ${type du panier}`);
console.log(`${akiira.nom} prend un ${akiira.mainDroite[0].nom}`)

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris
epicerie.stock.forEach(element => {
    akiira.mainDroite[0].contenu.push(element)
    console.log(`${akiira.nom} met ${element.nom} dans son ${akiira.mainDroite[0].nom}`)
});
console.log(akiira)

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
akiira.mainDroite[0].contenu.forEach(element => {
    akiira.payerArticle(element)
})
// Afficher un message de ce qu'il reste d'argent sur le personnage.
console.log(`il reste à ${akiira.nom} : ${akiira.argent}€`)
// rentrer à la maison (comme ça on pourra cuisiner)
akiira.seDeplacer(epicerie, maison)
// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)
while(akiira.mainDroite[0].contenu.length > 0){
    bol.contenu.unshift(akiira.mainDroite[0].contenu.shift());
    console.log(`${akiira.nom} a ajouté ${bol.contenu[0].nom} dans le bol!`);
}
// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)
// Afficher un petit message de chaque ingrédient qu'on met dans le bol.
console.log(akiira.mainDroite[0])

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)
akiira.seDeplacer(maison, epicerie)
epicerie.paniers.unshift(akiira.mainDroite[0])
akiira.mainDroite.splice(0, 1)

// Afficher un petit message
console.log(`${akiira.nom} rends le panier oublié`);

// Retourner à la maison pour continuer l'omelette
akiira.seDeplacer(epicerie, maison)
// Afficher un petit message
console.log(`${akiira.nom} continues la preparation de l'omellette`)
// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage
for (let i = 0; i < bol.contenu.length; i++) {
    const element = bol.contenu[i];
    if (element.etat == "entier") {
        console.log(`${akiira.nom} découpe ${element.nom} avec ${couteau.nom}`)
        akiira.couper(element, couteau)
    } else {
        console.log(`le ${element.nom} ne ce coupe pas`)
    }
}

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).
bol.melanger("omelette")
// Afficher un message avec le nouveau mélange
console.log(bol.contenu[0])
// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.
poele.contenu.push(bol.contenu[0])
console.log(`${akiira.nom} verse ${bol.contenu[0].nom} dans ${poele.nom}`)
bol.contenu.splice(0, 1)

// Cuire l'omelette avec la méthode de la poele
poele.cuir(poele.contenu[0])
// Afficher un message final, notre omelette est cuite :)

