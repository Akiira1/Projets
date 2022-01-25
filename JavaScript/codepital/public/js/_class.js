import {ctrl, saveOn, checkLink, ventoline, f12, cimetiere} from "./_variables.js"

// Patients
class Patients {
    constructor(nom, maladie, argent, poche, etatSante, traitement) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
        this.goTo = (depart, arrive) => {
            arrive.personnes.push(this)
            depart.personnes.splice(this)
        }
        this.takeCare = () => {
            this.poche.pop()
        }
    }
}

// Lieux
class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}


class Pharmacie extends Lieu {
    constructor(nom, personnes, medoc) {
        super(nom, personnes)
        this.nom = nom;
        this.personnes = personnes;
        this.medoc = medoc;
        this.traitement = (perso) => {
            if (perso.traitement === "ctrl+maj+f" && perso.argent >= ctrl.prix) {
                perso.poche.push(ctrl)
                perso.argent -= 60
            }
            else if (perso.traitement === "saveOnFocusChange" && perso.argent >= saveOn.prix) {
                perso.poche.push(saveOn)
                perso.argent -= 100
            }
            else if (perso.traitement === "CheckLinkRelation" && perso.argent >= checkLink.prix) {
                perso.poche.push(checkLink)
                perso.argent -= 35
            }
            else if (perso.traitement === "Ventoline" && perso.argent >= ventoline.prix) {
                perso.poche.push(ventoline)
                perso.argent -= 40
            }
            else if (perso.traitement === "f12+doc" && perso.argent >= f12.prix) {
                perso.poche.push(f12)
                perso.argent -= 20
            }
            else {
                cimetiere.personnes.push(perso)
            }
        }
    }
}

class Doctor extends Lieu {
    constructor(nom, argent, cabinet, salleAttente, personnes) {
        super()
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet;
        this.salleAttente = salleAttente;
        this.personnes = personnes;
        this.diagnostique = () => {
            if (this.cabinet[0].maladie == "mal indenté") {
                this.cabinet[0].traitement = "ctrl+maj+f"
            }
            else if (this.cabinet[0].maladie == "unsave") {
                this.cabinet[0].traitement = "saveOnFocusChange"
            }
            else if (this.cabinet[0].maladie == "404") {
                this.cabinet[0].traitement = "CheckLinkRelation"
            }
            else if (this.cabinet[0].maladie == "azmatique") {
                this.cabinet[0].traitement = "Ventoline"
            }
            else if (this.cabinet[0].maladie == "syntaxError") {
                this.cabinet[0].traitement = "f12+doc"
            }
        }
        this.patientIn = () => {
            this.cabinet.push(this.salleAttente[0])
            this.salleAttente.shift()
        }
        this.patientOut = () => {
            this.cabinet[0].etatSante = "en traitement"
            this.personnes.push(this.cabinet[0])
            this.cabinet.splice([0], 1)
        }
        this.payerconsult = () => {
            this.cabinet[0].argent -= 50
            this.argent += 50
        }
    }
}

class Traitement {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}


export {Patients, Lieu, Pharmacie, Doctor, Traitement}