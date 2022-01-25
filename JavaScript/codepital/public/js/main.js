import {marcus, optimus, songoku, darthvader, semicolon, maison, pharmacie, ctrl, saveOn, checkLink, ventoline, f12, doc, cimetiere} from "./_variables.js"



// pharmacie : rentrer de marchandise
pharmacie.medoc.push(ctrl, saveOn, checkLink, ventoline, f12)


// maison
console.log(`##### MAISON #####`)
console.log(maison)

marcus.goTo(maison, doc)
optimus.goTo(maison, doc)
songoku.goTo(maison, doc)
darthvader.goTo(maison, doc)
semicolon.goTo(maison, doc)



// docteur / MARCUS
doc.salleAttente.push(marcus, optimus, songoku, darthvader, semicolon)


console.log("##### Salle d'attente #####");
console.log(doc);
doc.patientIn()
doc.personnes.shift()
console.log(`##### ${doc.cabinet[0].nom} entre dans le cabinet du ${doc.nom} #####`)
console.log(doc)
doc.payerconsult()
console.log(`${doc.cabinet[0].nom} paye 50€ de consultation au ${doc.nom}`);
console.log(`le ${doc.nom} à ${doc.argent}€ et il reste ${doc.cabinet[0].argent}€ à ${doc.cabinet[0].nom}`)
doc.diagnostique()
console.log(`le ${doc.nom} diagnostique ${doc.cabinet[0].maladie} à ${doc.cabinet[0].nom}`)
doc.patientOut()

console.log(doc.salleAttente)

console.log(`##### marcus s'en vas à la pharmacie #####`)
marcus.goTo(doc, pharmacie)
console.log(pharmacie)
pharmacie.traitement(marcus)
pharmacie.personnes.shift()
console.log(marcus)

console.log(`${marcus.nom} n'as pas assez pour acheter son traitement, il meurt lamentablement et est envoyé au cimetière`);



// OPTIMUS
console.log("##### Salle d'attente #####");
console.log(doc.salleAttente);
doc.patientIn()
doc.personnes.shift()
console.log(`##### ${doc.cabinet[0].nom} entre dans le cabinet du ${doc.nom} #####`)
console.log(doc.cabinet)
doc.payerconsult()
console.log(`${doc.cabinet[0].nom} paye 50€ de consultation au ${doc.nom}`);
doc.diagnostique()
console.log(`le ${doc.nom} diagnostique ${doc.cabinet[0].maladie} à ${doc.cabinet[0].nom}`)
doc.patientOut()

console.log(doc.salleAttente)

console.log(`##### optimus s'en vas à la pharmacie #####`)
optimus.goTo(doc, pharmacie)
console.log(pharmacie)
pharmacie.traitement(optimus)
pharmacie.personnes.shift()
console.log(optimus)

console.log(`${optimus.nom} utilise ${optimus.poche[0].nom} et ce soigne instantanement.`);



// SONGOKU
console.log("##### Salle d'attente #####");
console.log(doc.salleAttente);
doc.patientIn()
doc.personnes.shift()
console.log(`##### ${doc.cabinet[0].nom} entre dans le cabinet du ${doc.nom} #####`)
console.log(doc.cabinet)
doc.payerconsult()
console.log(`${doc.cabinet[0].nom} paye 50€ de consultation au ${doc.nom}`);
doc.diagnostique()
console.log(`le ${doc.nom} diagnostique ${doc.cabinet[0].maladie} à ${doc.cabinet[0].nom}`)
doc.patientOut()

console.log(doc.salleAttente)

console.log(`##### songoku s'en vas à la pharmacie #####`)
songoku.goTo(doc, pharmacie)
console.log(pharmacie)
pharmacie.traitement(songoku)
pharmacie.personnes.shift()
console.log(songoku)

console.log(`${songoku.nom} n'as pas assez pour acheter son traitement, il meurt lamentablement et est envoyé au cimetière`);



// DARTHVADER
console.log("##### Salle d'attente #####");
console.log(doc.salleAttente);
doc.patientIn()
doc.personnes.shift()
console.log(`##### ${doc.cabinet[0].nom} entre dans le cabinet du ${doc.nom} #####`)
console.log(doc.cabinet)
doc.payerconsult()
console.log(`${doc.cabinet[0].nom} paye 50€ de consultation au ${doc.nom}`);
doc.diagnostique()
console.log(`le ${doc.nom} diagnostique ${doc.cabinet[0].maladie} à ${doc.cabinet[0].nom}`)
doc.patientOut()

console.log(doc.salleAttente)
console.log(darthvader)

darthvader.goTo(doc, pharmacie)
console.log(`##### DarthVader s'en vas vers le pharmacie #####`);
console.log(pharmacie)
pharmacie.traitement(darthvader)
pharmacie.personnes.shift()
console.log(pharmacie)

console.log(`${darthvader.nom} utilise ${darthvader.poche[0].nom} et ce soigne instantanement.`);




// SEMICOLON
console.log("##### Salle d'attente #####");
console.log(doc.salleAttente);
doc.patientIn()
doc.personnes.shift()
console.log(`##### ${doc.cabinet[0].nom} entre dans le cabinet du ${doc.nom} #####`)
console.log(doc.cabinet)
doc.payerconsult()
console.log(`${doc.cabinet[0].nom} paye 50€ de consultation au ${doc.nom}`);
doc.diagnostique()
console.log(`le ${doc.nom} diagnostique ${doc.cabinet[0].maladie} à ${doc.cabinet[0].nom}`)
doc.patientOut()

console.log(doc.salleAttente)

console.log(`##### Semicolon s'en vas à la pharmacie #####`)
semicolon.goTo(doc, pharmacie)
console.log(pharmacie)
pharmacie.traitement(semicolon)
pharmacie.personnes.shift()
console.log(semicolon)

console.log(`${semicolon.nom} n'as pas assez pour acheter son traitement, il meurt lamentablement et est envoyé au cimetière`);




// CIMETIERE
console.log(`##### le cimetière #####`);
console.log(cimetiere);

