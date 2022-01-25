class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (depart, arrive) => {
            depart.personnes.pop();
            arrive.personnes.push(this);
            this.lieu.push(arrive.nom)
            console.log(`${this.nom} est à ${arrive.nom}`);
        };
        this.payerArticle = (article) => {
            this.argent = this.argent - article.prix
            console.log(`${this.nom} achète ${article.nom} pour ${article.prix}€`);
        }
        this.couper = (ingredient, outil) => {
            outil.couper(ingredient)
        }
    }
}

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}
console.log();
class Outil {
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}
class Couteau extends Outil {
    constructor(nom, action) {
        super(nom, action)
        this.couper = (produit) => {
            produit.etat = "coupé"
        }
    }
}

class Produit {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

class Epicerie extends Lieu {
    constructor(nom, personnes, stock, paniers) {
        super(nom, personnes,);
        this.stock = stock;
        this.paniers = [
            {
                nom: "Panier 1",
                contenu: []
            },
            {
                nom: "Panier 2",
                contenu: []
            },
            {
                nom: "Panier 3",
                contenu: []
            }
        ]
    };
}

class Bol extends Outil {
    constructor(nom, action, contenu) {
        super(nom, action)
        this.contenu = contenu;
        this.melanger = (nomMelange) => {
            let newMelange = {
                nom: nomMelange,
                etat: "pas cuit",
            }
            this.contenu = [newMelange]
        }
    }
}

class Poele extends Outil {
    constructor(nom, action, contenu) {
        super(nom, action)
        this.contenu = contenu;
        this.cuir = () => {
            setTimeout(() => {
                this.contenu[0].etat = "cuit"
                console.log(`${this.contenu[0].nom} est parfaitement cuit !`)
            }, 4000)
        }
    }
}

export {Personne, Lieu, Outil, Couteau, Produit, Epicerie, Bol, Poele}