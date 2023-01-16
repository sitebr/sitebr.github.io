var sexShop = {
    0: {
        produto: "Bolinha Dragão Chinês",
        valor: "R$ 4,90",
        descricao: "O Dragão Chinês agora veio na versão bolinha para te deixar ainda mais doida (o), a bolinha possui ingredientes que deixarão as suas noites bem mais quentes, pois a sua principal função é esquentar e excita",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/bolinha-dragao-chines-super-quente-1-un1-45e9c619c0f5ff8d0016269738825529-1024-1024.jpg"
    },
    1: {
        produto: "Calcinha Fio Dental",
        valor: "R$ 12,90",
        descricao: "Fio Dental Apressadinha Pimenta Sexy confeccionado em tully com estampa variadas. Fabricante: Pimenta Sexy",
        url:"https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/calcinha-fio-dental-apressadinha1-36945b4a53b5b325af16396867383062-480-0.jpeg"
    },
    2: {
        produto: "Capa Peniana 21x5cm",
        valor: "R$ 74,90",
        descricao: "Capa Peniana em Borracha - 21x5cm. Capa oca para o pênis, acompanha cinta elástica para possibilitar e facilitar a utilização em ambos os sexos. Garante um clímax vibrante e intenso durante a relação, garantindo uma extrema excitação.",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/capa-peniana-em-borracha-21-x-5-cm1-632928bad7b6735c9b16268114241139-480-0.jpg"
    },
    3: {
        produto: "Sete Sensações",
        valor: "R$ 49,90",
        descricao: "Sete Sensações - Gel Anestésico - 25 gr. Sete Sensações, produto único no Mundo! Fantástico, com sete atributos que traz uma experiência única para o sexo anal, tendo em sua formulação componentes que são capazes de inibir a dor sem retirar o prazer. Desenvolvido com ingredientes naturais, tem ação bactericida e germicida, proporciona segurança, confiança e mais satisfação! 7 Atributos: 1 - Hidrata 2 - Tonifica 3 - Cicatriza 4 - Dilata 5 - Tira o desconforto anal 6 - Lubrifica 7 - Estimula. Contém: 25gr. (sensação anestésico). Fabricante: Hot Flowers",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/sete-sensacoes-anestesico1-31e0e03cedb2e4b91716262937826737-1024-1024.jpg"
    },
    4: {
        produto: "Lubrificante D4",
        valor: "R$ 24,90",
        descricao: "Além de proporcionar uma lubrificação extra, o lubrificante D4 neutro - 60g, assim como todos os lubrificantes da linha D4, apresentam em suas composições ativos e ingredientes que atuam diretamente na saúde sexual. Mais do que extremo prazer, uma dose de bem-estar e segurança para tornar qualquer momento inesquecível!",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/lubrificante-d4-neutro-60g1-2c93b73a8ad32472f016484867972760-1024-1024.jpg"
    },
    5: {
        produto: "Cinto Peniano 15,3x4,5cm",
        valor: "R$ 99,80",
        descricao: "Cinto Peniano Regulável c/ Pênis 15,3x4,5cm. A cinta peniana é um brinquedo sexual para penetração vaginal e anal.",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/673/759/products/10122021165105_cinto-peniano-c-penis-14-x-37-cm1-6014-u-4778495006a7bc345116306081747642-640-0-368c92778f638500c916391659700885-480-0.jpg"
    }
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