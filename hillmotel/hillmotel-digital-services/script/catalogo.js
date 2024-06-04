var sexShop = {
    0: {
        produto: "Fantasia Piriguete Sexy",
        valor: "R$ 72,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/piriguete-sexy.webp"
    },
    1: {
        produto: "Anel Retardador Liso M/G",
        valor: "R$ 8,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/anel-retardador.webp"
    },
    2: {
        produto: "Plug Anal Pequeno",
        valor: "R$ 30,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/plug-anal.webp"
    },
    3: {
        produto: "Lubrificante Aquagel 60g",
        valor: "R$ 44,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/lubrificante-aquagel.webp"
    },
    4: {
        produto: "Gel Dessensibilizante Neutro Analle 15g",
        valor: "R$ 30,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/analle.webp"
    },
    5: {
        produto: "Anel Mega Strech",
        valor: "R$ 14,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/anel-mega-stretch.webp"
    },
    6: {
        produto: "Baralho Erótico",
        valor: "R$ 15,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/baralho.jpg"
    },
    7: {
        produto: "Capa para Dedos com Círculos",
        valor: "R$ 13,90",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/capa-para-os-dedos.webp"
    },
    8: {
        produto: "Chaveirinho Pênis",
        valor: "R$ 12,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/chaveiro.jpg"
    },
    9: {
        produto: "Dados/Jogo do Prazer",
        valor: "R$ 5,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/dados.webp"
    },
    10: {
        produto: "Sete Sensações 25g (Gel Anestésico) ",
        valor: "R$ 72,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/sete-sensacoes.jpg"
    },
    11: {
        produto: "Jeffão s/ Vibro",
        valor: "R$ 89,90",
        descricao: "",
        url: "./midias/jpg/imagem-indisponivel.jpg"
    },
    12: {
        produto: "Meia Capa Peniana c/ Vibrador",
        valor: "R$ 20,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/meia-capa-peniana-com-vibrador.webp"
    },
    13: {
        produto: "Mordaça Bastão Simples",
        valor: "R$ 41,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/mordaca.webp"
    },
    14: {
        produto: "Pênis Realístico 15,3x4cm",
        valor: "R$ 66,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/penis-realistico-macico-15-3x4-5cm.webp"
    },
    15: {
        produto: "Pênis Realístico c/ Vibrador e Escroto 16x3cm",
        valor: "R$ 168,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/penis-realistico-vibrador-escroto-16x3cm.webp"
    },
    16: {
        produto: "Pênis Realístico c/ Ventosa e Escroto 18x5cm",
        valor: "R$ 108,00",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/penis-realistico-ventosa-escroto-18x5cm.jpg"
    },
    17: {
        produto: "Raspadinhas Eróticas",
        valor: "R$ 2,50",
        descricao: "",
        url: "./midias/jpg/catalogo-sex-shop/raspadinha-erotica.webp"
    },
    18: {
        produto: "Tanga Time",
        valor: "R$ 5,00",
        descricao: "",
        url: "./midias/jpg/imagem-indisponivel.jpg"
    },
}

for (var i = 0; i < Object.keys(sexShop).length; i++) {
    var element = document.querySelector(".catalogo-box-itens")
    element.innerHTML += `<li class="item">
    <figure>
        <img src="${sexShop[i].url}" alt="">
    </figure>
    <div class="description">
        <p class="titulo">${sexShop[i].produto}</p>
        <p class="valor">${sexShop[i].valor}</p>
        <button class="button-details" onclick="activeDescription(${i})">+ detalhes</button>
        <p class="details">${sexShop[i].descricao}</p>
    </div>
    </li>`
}

function activeDescription(i) {
    var tempDetalhes = document.querySelectorAll(".details")
    var tempValor = document.querySelectorAll(".button-details")
    tempDetalhes[i].classList.toggle("on")
    if (tempValor[i].innerText == "+ detalhes") {
        tempValor[i].innerText = "- detalhes"
    } else {
        tempValor[i].innerText = "+ detalhes"
    }
}