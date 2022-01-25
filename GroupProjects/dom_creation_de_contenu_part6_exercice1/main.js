let div = document.getElementById("content")
let h2 = document.createElement("h2")
h2.textContent = "Part 6 - Exercice 1"

div.appendChild(h2)

// 2

let p = document.createElement("p")
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod aliquid corrupti iure deleniti quis, expedita nostrum repellat mollitia maxime."
div.prepend(p)

// 3
let h1 = document.createElement("h1")
h1.textContent = "Le DOM - Création de HTML"
div.insertBefore(h1, div.firstChild)

// 4
let second = document.getElementById("secondaire")
second.innerHTML = div.innerHTML

let replaceText = document.getElementsByTagName("h2")[1].textContent = "Part 6 - Exercice 2"

// 5
let matiere = document.createElement("div")
matiere.setAttribute("id", "matiere")

let newM = document.createElement("ol")
let elem1 = document.createElement("li")
let elem2 = document.createElement("li")
let elem3 = document.createElement("li")
let body = document.body
elem1.textContent = "createElement"
elem2.textContent = "foreach"
elem3.textContent = "eventListener"

newM.appendChild(elem1)
newM.appendChild(elem2)
newM.appendChild(elem3)

body.appendChild(newM)