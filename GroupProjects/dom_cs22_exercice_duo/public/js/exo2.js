// 1
let btn = document.getElementsByTagName("button")[0]
let img = document.getElementsByTagName("img")[0]
let div = document.getElementById("mignon-container")
div.childNodes[2].remove()

btn.addEventListener("click", () => {
    let img2 = img.cloneNode()
    div.appendChild(img2)
})


// 2
let imgs = document.querySelectorAll("#mignon2-container > img")
imgs = [...imgs]
console.log(imgs);
let i = 5
imgs.forEach(element => {
    element.addEventListener("click", () => {
        element.remove()
        i--

        if (i == 0) {
            setTimeout(create, 1000)
            function create() {
                document.getElementById("mignon2-container").prepend(imgs[0])
                document.getElementById("mignon2-container").prepend(imgs[1])
                document.getElementById("mignon2-container").prepend(imgs[2])
                document.getElementById("mignon2-container").prepend(imgs[3])
                document.getElementById("mignon2-container").prepend(imgs[4])
                i = 5
            }
        }
    })
})


// 3
let texte = document.createElement("li")
texte.innerText = "Aleks_Louis"
let li1 = document.getElementsByTagName('li')[1]
li1.before(texte)


// 4  //5
let bouton1 = document.getElementsByTagName('button')[1]
let bouton2 = document.getElementsByTagName('button')[2]
let input1 = document.getElementsByTagName('input')[0]
let ul = document.getElementsByTagName('ul')[1]
let li3 = document.getElementsByTagName("ul")[1].children
let temp
let compteur = 0
let texte3
let index
li3 = [...li3]

bouton1.addEventListener('click', () => {
    let li2 = document.createElement('li')
    li2.innerText = input1.value
    ul.prepend(li2)
    input1.value = ""
    li3.unshift(li2)
    li2.addEventListener("click", (e) => {
        if (bouton2.style.backgroundColor == "green") {

            if (isEven(compteur) != true) {
                temp = e.target.innerText
                e.target.innerText = texte3
                li3[index].innerText = temp
                compteur++
            }
            else {
                texte3 = e.target.textContent
                index = li3.indexOf(e.target)
                compteur++
            }
        }
    })
})

li3.forEach(element => {
    element.addEventListener('click', (e) => {
        if (bouton2.style.backgroundColor == "green") {

            if (isEven(compteur) != true) {
                temp = e.target.innerText
                e.target.innerText = texte3
                li3[index].innerText = temp
                compteur++
            }
            else {
                texte3 = e.target.textContent
                index = li3.indexOf(e.target)
                compteur++
            }
        }
    })
});

bouton2.addEventListener('click', () => {
    if (bouton2.style.backgroundColor != 'green') {
        bouton2.style.backgroundColor = 'green'

    }
    else {
        bouton2.style.backgroundColor = '#f8f9fa'
    }
})

function isEven(value) {
    if (value % 2 == 0)
        return true;
    else
        return false;
}

