import { listeTache, input, btnClear } from './_variables.js'

// LANCEMENT EVENEMENT DE BASE ! CREATION DE TACHES
export function run() {
    // Creation de tous les éléments
    let divTache = document.createElement("div")
    let divLeft = document.createElement("div")
    let divRight = document.createElement("div")
    let tacheTitre = document.createElement("h2")
    let btnCheck = document.createElement("button")
    let iconCheck = document.createElement("i")
    let iconDel = document.createElement("i")
    let btnDel = document.createElement("button")
    let iconModif = document.createElement("i")
    let btnModif = document.createElement("button")
    let h2Modif = document.createElement("input")

    // appliquation des styles des elements créer
    divTache.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'bg-light', 'mb-2')
    divLeft.classList.add('d-flex', 'align-items-start')
    divRight.classList.add('d-flex', 'align-items-end')
    btnCheck.classList.add('btn', 'btn-primary', 'ms-3')
    iconCheck.classList.add('fas', 'fa-check-square')
    btnModif.classList.add('btn', 'btn-success', 'ms-3')
    iconModif.classList.add('fas', 'fa-pen-square')
    btnDel.classList.add('btn', 'btn-danger', 'ms-3')
    iconDel.classList.add('fas', 'fa-minus-square')
    h2Modif.classList.add('d-none')
    
    
    // placement des éléments créer au bon emplacement
    listeTache.appendChild(divTache)
    divTache.appendChild(divLeft)
    divTache.appendChild(divRight)
    divLeft.appendChild(tacheTitre)
    divRight.appendChild(btnCheck)
    btnCheck.appendChild(iconCheck)
    divRight.appendChild(btnModif)
    btnModif.appendChild(iconModif)
    divRight.appendChild(btnDel)
    btnDel.appendChild(iconDel)
    divLeft.appendChild(h2Modif)
    tacheTitre.textContent = input.value
    
    
    // ajout fonction "check"
    btnCheck.addEventListener('click', () => {
        if (divTache.classList.contains('bg-light')) {
            divTache.classList.remove("bg-light")
            divTache.classList.add("bg-primary")
        } else {
            divTache.classList.add("bg-light")
            divTache.classList.remove("bg-primary")
        }
    })
    
    
    function changeText() {
        if (divTache.classList.contains('bg-primary') === false) {
            tacheTitre.style.display = "none"
            h2Modif.classList.remove("d-none")
        }
        document.addEventListener("keypress", (e) => {
            if (e.key == "Enter") {
                tacheTitre.style.display = "block"
                tacheTitre.textContent = h2Modif.value
                h2Modif.classList.add("d-none")
            }
        })
    }
    
    btnModif.addEventListener('click', () => {
        changeText()
    })
    tacheTitre.addEventListener('dblclick', () => {
        changeText()
    })
    
    // ajout fonction supr au button
    btnDel.addEventListener("click", () => {
        listeTache.removeChild(divTache)
    })
    
    // ajout fonction clear all au button
    btnClear.addEventListener("click", () => {
        listeTache.innerHTML = ""
    })
    

}
