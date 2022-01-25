import {listeTache,input, btnAdd, btnDone, btnToDo, btnAll} from './_variables.js'
import {run} from './_functions.js'

//lancement au click
btnAdd.addEventListener("click", (run) )

// lancement à la touche "Enter"
input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        run()
    }
})

// TRI PAR CATEGORIE
// taches finies
btnDone.addEventListener('click', () =>{
    for (const element of listeTache.children) {
        if (element.classList.contains('bg-primary') === true && element.classList.contains('d-none')) {
            element.classList.remove('d-none')
        } else if (element.classList.contains('bg-primary') === false){
            element.classList.add("d-none")
        }
    }
})

// toutes les taches
btnAll.addEventListener('click', () =>{
    for (const element of listeTache.children) {
        element.classList.remove('d-none')
    }
})

// taches à faire
btnToDo.addEventListener('click', () =>{
    for (const element of listeTache.children) {
        if (element.classList.contains('bg-primary') === false && element.classList.contains('d-none')) {
            element.classList.remove("d-none")
        } else if (element.classList.contains('bg-primary') === true){
            element.classList.add("d-none")
        }
    }
})
