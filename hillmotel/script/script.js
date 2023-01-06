function theme() {
    let icon = document.querySelector('.btn-theme')
    let body = document.querySelector('body')
    icon.classList.toggle('bxs-moon')
    icon.classList.toggle('bxs-sun')
    body.classList.toggle('light-theme')
    // body.classList.toggle('dark-theme')
}

let imgs = []

function activeViewer(suite, folder, n) {
    imgs = []
    let viewer = document.getElementById('viewer')
    viewer.classList.replace('viewer-off', 'viewer-on')
    viewer.innerHTML = ``
    viewer.innerHTML += `
    <div class="photo-box">
        <p class="titulo">${suite}</p>
        <div class="photo">
            <img src="./midias/jpg/galeria/${folder}/1.jpg" alt="">
        </div>
        <div class="thumb">
        </div>
        <span class="btn-left" onclick="leftImage()"><i class='bx bx-chevron-left'></i></span>
        <span class="btn-right" onclick="rightImage()"><i class='bx bx-chevron-right'></i></span>
        <span class="btn-close" onclick="closeViewer()"><i class='bx bx-x'></i></span>
    </div>`
    let thumb = document.querySelector('.thumb')
    for (let i = 1; i <= n; i++) {
        thumb.innerHTML += `<img src="./midias/jpg/galeria/${folder}/thumb/${i}.jpg" onclick="openImage(${i})" alt="">`
        imgs.push(`./midias/jpg/galeria/${folder}/${i}.jpg`)
    }
}

let valores = [
    ['Suíte Luxo Simples', 'R$ 91,00', 'R$ 128,00', 'R$ 165,00', 'R$ 201,00', 'R$ 238,00'],
    ['Suíte Luxo Stander', 'R$ 102,00', 'R$ 158,00', 'R$ 214,00', 'R$ 270,00', 'R$ 326,00'],
    ['Suíte Glamour', 'R$ 132,00', 'R$ 204,00', 'R$ 277,00', 'R$ 350,00', 'R$ 422,00'],
    ['Suíte Executiva', 'R$ 183,00', 'R$ 284,00', 'R$ 384,00', 'R$ 485,00', 'R$ 585,00'],
    ['Suíte Presidencial Romana', 'R$ 250,00', 'R$ 375,00', 'R$ 500,00', 'R$ 624,00', 'R$ 749,00'],
    ['Suíte Presidencial Plus', 'R$ 288,00', 'R$ 431,00', 'R$ 575,00', 'R$ 719,00', 'R$ 863,00']
]
let suiteItens = [
    ['TV 32"', 'Som', 'Ar condicionado', 'Frigobar', 'Garagem privativa'],
    ['TV 32"', 'Som', 'Ar condicionado', 'Frigobar', 'Hidromassagem P', 'Garagem privativa'],
    ['TV 32"', 'Som individual*', 'Ar condicionado', 'Frigobar', 'Hidromassagem Grande', 'Espelho no teto', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar', 'Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Móveis sado*', 'Poltrona erótica*', 'Sauna seca', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar no quarto', 'Frigobar na piscina', 'Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Decoração temática', 'Piscina', 'Poltrona erótica', 'Jogo de luzes', 'Cadeira do Sultão', 'Sauna a vapor', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar no quarto', 'Frigobar na piscina','Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Pole dance', 'Piscina', 'Jogo de luzes', 'Globo espelhado', 'Sauna a vapor', 'Garagem privativa'],
]

// open prices, start
function activePrice(nArray) {
    let viewer = document.getElementById('viewer')
    viewer.classList.replace('viewer-off', 'viewer-on')
    viewer.innerHTML = ``
    viewer.innerHTML += `<div class="price-box">
    <h2>${valores[nArray][0]}</h2>
    <table>
        <tr>
            <th>Período</th>
            <th>Valor</th>
        </tr>
        <tr>
            <td>2 horas</td>
            <td>${valores[nArray][1]}</td>
        </tr>
        <tr>
            <td>4 horas</td>
            <td>${valores[nArray][2]}</td>
        </tr>
        <tr>
            <td>6 horas</td>
            <td>${valores[nArray][3]}</td>
        </tr>
        <tr>
            <td>8 horas</td>
            <td>${valores[nArray][4]}</td>
        </tr>
        <tr>
            <td>12 horas</td>
            <td>${valores[nArray][5]}</td>
        </tr>
    </table>
    <div class="description"></div>
    <span class="btn-close" onclick="closeViewer()"><i class='bx bx-x'></i></span>
    <p class="verify"></p>
</div>`
    if (nArray == 2 || nArray == 3) {
        let verify = document.querySelector('.verify')
        verify.innerText = '*Verificar disponibilidade!'
    }
    for (i = 0; i < suiteItens[nArray].length; i++) {
        let description = document.querySelector('.description')
        description.innerHTML += `<p><i class='bx bx-check-square'></i>${suiteItens[nArray][i]}</p>`
    }
}
// open prices, end

function closeViewer() {
    viewer.classList.replace('viewer-on', 'viewer-off')
}

let nImage = 0
function rightImage() {
    if (nImage == imgs.length - 1) {
        nImage = -1
    }
    nImage++
    let photo = document.querySelector('.photo img')
    photo.setAttribute('src', imgs[nImage])
}
function leftImage() {
    if (nImage == 0) {
        nImage = imgs.length - 1
    }
    nImage--
    let photo = document.querySelector('.photo img')
    photo.setAttribute('src', imgs[nImage])
}
function openImage(n) {
    let photo = document.querySelector('.photo img')
    photo.setAttribute('src', imgs[n - 1])
}


// animation scroll on button click, start
let id = ''
function goTo(element) {
    clearInterval(id)
    let tempElement = document.getElementById(element) // recebe id do elemento
    let valueTop = tempElement.offsetTop - 70 // recebe distância entre elemento e o topo do documento
    let windowTop = window.scrollY // recebe distância de scroll vertical
    let bodyHeight = document.querySelector('body').offsetHeight // recebe tamanho do documento
    let windowHeight = window.innerHeight // recebe tamanho da janela do navegador
    if (windowTop > valueTop) {
        id = setInterval(function() {
            window.scrollBy(0, -30)
            if (window.scrollY <= valueTop) {
                clearInterval(id)
            }
        })
    } else if (windowTop < valueTop) {
        id = setInterval(function() {
            window.scrollBy(0, 30)
            if (window.scrollY >= valueTop || window.scrollY >= (bodyHeight - windowHeight)) {
                clearInterval(id)
            }
        })
    }
}
// animation scroll on button click, end