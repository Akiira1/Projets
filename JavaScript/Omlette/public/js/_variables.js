import {Personne, Lieu, Couteau, Produit, Epicerie, Bol, Poele} from "./_class.js"


let akiira = new Personne("Akiira", [], 500, [], [])
let maison = new Lieu("Maison", [])
let couteau = new Couteau("Couteau", []);
let oeufs = new Produit("oeufs", ["cru"], 3)
let beurre = new Produit("beurre", [], 4)
let champignon = new Produit("champignon", ["entier"], 5)
let poivre = new Produit("poivre", ["moulu"], 2)
let ciboullette = new Produit("ciboullette", ["entier"], 3)
let epicerie = new Epicerie("Epicerie", [], [])
let poele = new Poele("poele", [], [])
let bol = new Bol("bol", [], [])



export {akiira, maison, couteau, oeufs, beurre, champignon, poivre, ciboullette, epicerie, poele, bol}


