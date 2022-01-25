// 1
let button = document.getElementsByTagName("button")[0]
let counter = document.getElementsByTagName("span")[0]

button.addEventListener("click", () => {
    counter.innerText++
})

// 2
let carre1 = document.getElementById('square')
let p1 = document.createElement("p")
p1.textContent = "on"
let p2 = document.createElement("p")
p2.textContent = "off"
p1.style.display = "none"
carre1.appendChild(p1)
carre1.appendChild(p2)
carre1.style.display = "flex"
carre1.style.justifyContent = "center"
carre1.style.alignItems = "center"
p2.style.margin = "0"
p1.style.margin = "0"


console.log(counter)
carre1.addEventListener("click", () => {
    carre1.classList.toggle("on")
    carre1.classList.toggle("off")
    if (carre1.classList.contains("on")) {
        p2.style.display = "none"
        p1.style.display = "block"
    }
    if (carre1.classList.contains("off")) {
        p1.style.display = "none"
        p2.style.display = "block"
    }

})

// 3
let h2 = document.getElementsByTagName('h2')

h2 = [...h2]
console.log(h2);

addEventListener("keydown", (event) => {
    let i = 1
    let j = 0
    if (event.code === "Digit6") {
        if (h2[0].textContent == "Exo Counter") {

            h2.forEach(element => {
                element.innerText = i + "." + element.innerText
                i++
                console.log(element.innerText);
            });
        }
        else {
            h2.forEach(element => {
                element.innerText = element.innerText.slice(2, element.innerText.length)
                j++
            })
        }
    }
})

// 4
let carre = document.getElementById("multi-click")
carre.style.backgroundColor = "white"
carre.style.borderRadius = "0%"

carre.addEventListener("click", () => {
    if (carre.style.borderRadius === "0%" && carre.style.backgroundColor === "white") {
        carre.style.borderRadius = "50%"
    }
    else if (carre.style.borderRadius === "50%" && carre.style.backgroundColor === "white") {
        carre.style.backgroundColor = "red"
    }
    else if (carre.style.borderRadius === "50%" && carre.style.backgroundColor === "red") {
        carre.style.borderRadius = "0%"
        carre.style.backgroundColor = "white"
    }
})
console.log();

// 5
let color = document.getElementById("pick-color")
let para = document.getElementById("para")

color.addEventListener("change", () => {
    para.style.color = color.value
})
