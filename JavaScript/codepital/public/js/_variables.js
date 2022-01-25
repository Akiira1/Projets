import {Patients, Lieu, Pharmacie, Doctor, Traitement} from "./_class.js"


// PATIENTS
let marcus = new Patients("Marcus", "mal indenté", 100, [], "malade", "")
let optimus = new Patients("Optimus", "unsave", 200, [], "malade", "")
let songoku = new Patients("Songoku", "404", 80, [], "malade", "")
let darthvader = new Patients("DarthVader", "azmatique", 110, [], "malade", "")
let semicolon = new Patients("Semicolon", "syntaxError", 60, [], "malade", "")


// LIEUX
let maison = new Lieu("maison", [marcus, optimus, songoku, darthvader, semicolon])
let pharmacie = new Pharmacie("pharmacie", [], [])
let doc = new Doctor("Prof Chen", 0, [], [], [])
let cimetiere = new Lieu("cimetière", [])


// TRAITEMENT
let ctrl = new Traitement("crtl+mak+f", 60)
let saveOn = new Traitement("saveOnFocusChange", 100)
let checkLink = new Traitement("CheckLinkRelation", 35)
let ventoline = new Traitement("Ventoline", 40)
let f12 = new Traitement("f12+doc", 20)


export {marcus, optimus, songoku, darthvader, semicolon, maison, pharmacie, ctrl, saveOn, checkLink, ventoline, f12, doc, cimetiere}