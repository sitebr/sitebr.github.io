import { valores, suiteItens } from "./module-list.js"

window.fotos = []

function mount(n1, n2, folderName) {
    let pricesElement = document.querySelector('.prices')
    pricesElement.innerHTML += `
        <p>2 horas <span>${valores[n1][1]}</span></p>
        <p>4 horas <span>${valores[n1][2]}</span></p>
        <p>6 horas <span>${valores[n1][3]}</span></p>
        <p>8 horas <span>${valores[n1][4]}</span></p>
        <p>12 horas <span>${valores[n1][5]}</span></p>
    `

    let flexElement = document.querySelector('.flex')
    for (let i = 0; i < suiteItens[n1].length; i++) {
        flexElement.innerHTML += `
            <p><i class='bx bx-check-square'></i>${suiteItens[n1][i]}</p>
        `
    }

    for (let i = 1; i <= n2; i++) {
        fotos.push(`./midias/jpg/galeria/${folderName}/${i}.jpg`)
    }

    let galeriaElement = document.querySelector('.imagens')
    for (let i = 0; i < n2; i++) {
        galeriaElement.innerHTML += `
            <img onclick="openViewer(${i})" src="${fotos[i]}">
        `
    }
}

if (document.location.href.match('suite-simples.html')) {
    mount(0, 4, 'luxoSimples')
} else if (document.location.href.match('suite-stander.html')) {
    mount(1, 8, 'luxoStander')
} else if (document.location.href.match('suite-glamour.html')) {
    mount(2, 16, 'glamour')
} else if (document.location.href.match('suite-executiva.html')) {
    mount(3, 20, 'executiva')
} else if (document.location.href.match('suite-romana.html')) {
    mount(4, 20, 'presRom')
} else if (document.location.href.match('suite-plus.html')) {
    mount(5, 24, 'presPlus')
}

window.closeViewer = function () {
    let viewerElement = document.getElementById("viewer")
    viewerElement.classList.replace('visible', 'invisible')

    let pageElement = document.getElementById("page")
    pageElement.classList.replace('invisible', 'visible')
}

window.openViewer = function (nImg) { //nImg = numero da foto;
    let viewerElement = document.getElementById("viewer")
    viewerElement.classList.replace('invisible', 'visible')

    let pageElement = document.getElementById("page")
    pageElement.classList.add('invisible')

    let divElement = document.querySelector('#viewer div')
    divElement.innerHTML = `
        <span class="btn-left" onclick="leftImage(${nImg})"><i class='bx bx-chevron-left'></i></span>
        <span class="btn-right" onclick="rightImage(${nImg})"><i class='bx bx-chevron-right'></i></span>
        <span class="btn-close" onclick="closeViewer()"><i class='bx bx-x'></i></span>
        <img src="${fotos[nImg]}">
    `
}

window.leftImage = function (n) {
    if(n == 0) {
        n = fotos.length - 1
    } else {
        n--
    }

    let imgElement = document.querySelector("#viewer div img")
    imgElement.setAttribute('src', fotos[n])

    let btnLeft = document.querySelector(".btn-left")
    btnLeft.setAttribute("onclick", `leftImage(${n})`)

    let btnRight = document.querySelector(".btn-right")
    btnRight.setAttribute("onclick", `rightImage(${n})`)
}

window.rightImage = function (n) {
    if(n == fotos.length - 1) {
        n = 0
    } else {
        n++
    }

    let imgElement = document.querySelector("#viewer div img")
    imgElement.setAttribute('src', fotos[n])

    let btnLeft = document.querySelector(".btn-left")
    btnLeft.setAttribute("onclick", `leftImage(${n})`)

    let btnRight = document.querySelector(".btn-right")
    btnRight.setAttribute("onclick", `rightImage(${n})`)
}