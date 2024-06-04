// import { b } from "./variables.js";
var cardapio = {
    frigobar: {
        0: { item: 'Água sem Gás', valor: 'R$ 4,00' },
        1: { item: 'Amendoim', valor: 'R$ 3,60' },
        2: { item: "Balla Hall's", valor: 'R$ 3,60' },
        3: { item: "Antárctica Latão", valor: 'R$ 10,00' },
        4: { item: "Brahma Latão", valor: 'R$ 10,00' },
        5: { item: "Itaipava Latão", valor: 'R$ 7,00' },
        6: { item: "Heineken Longneck/Latão", valor: 'R$ 13,00' },
        7: { item: "Chocolate", valor: 'R$ 5,00' },
        8: { item: "Ice", valor: 'R$ 13,00' },
        9: { item: "Energético", valor: 'R$ 16,00' },
        10: { item: "Refrigerante Lata", valor: 'R$ 7,00' },
        11: { item: "Trident", valor: 'R$ 5,00' },
        classe: [".frigobar"],
        categoria: ["Frigobar"]
    },
    artigosPessoais: {
        0: { item: "Fósforo", valor: 'R$ 1,00' },
        1: { item: "Preservativo (Unidade)", valor: 'R$ 2,00' },
        2: { item: "Shampoo/Condicionador", valor: 'R$ 2,00' },
        3: { item: "Banho de espuma", valor: 'R$ 2,00' },
        4: { item: "Quebra Taça", valor: 'R$ 10,00' },
        classe: [".artigos-pessoais"],
        categoria: ["Artigos Pessoais"]
    },
    coqueteis: {
        0: { item: "Caipifrutas de Morango", valor: 'R$ 15,00' },
        1: { item: "Caipifrutas de Abacaxi", valor: 'R$ 15,00' },
        classe: [".coqueteis"],
        categoria: ["Coquetéis"]
    },
    carnes: {
        0: { item: "Picanha na Chapa (2 pessoas)", valor: "R$ 100,00", descricao: "(Picanha bovina, fritas, arroz, farofa, molho à campanha e salada.)"},
        1: { item: "Churrasco Misto (2 pessoas)", valor: "R$ 100,00", descricao: "(Contra filé, frango, lombo suíno, linguiça, fritas, arroz, farofa, molho à campanha e salada.)"},
        2: { item: "Strogonoff de Filé (2 pessoas)", valor: "R$ 90,00", descricao: "(Contra filé, creme de leite, champignon, fritas e arroz.)"},
        3: { item: "Contra Filé à Gaúcha (2 pessoas)", valor: "R$ 99,00", descricao: "(Contra filé, linguiça, fritas, arroz, farofa, molho à campanha e salada.)"},
        4: { item: "Lombo Suíno à Cravo e Canela (2 pessoas)", valor: "R$ 69,90", descricao: "(Lombo suíno, fritas, arroz, farofa e salada.)"},
        5: { item: "Contra Filé à Cavalo", valor: "R$ 34,99", descricao: "(Contra filé, feijão, arroz, ovo frito, fritas, farofa e salada.)"},
        6: { item: "Contra Filé com Fritas", valor: "R$ 32,50", descricao: "(Contra filé, feijão, arroz, fritas, farofa e salada.)"},
        7: { item: "Lombo Suíno com Arroz Colorido", valor: "R$ 29,99", descricao: "(Lombo suíno, feijão, arroz com ervilha e cenoura, fritas, farofa e salada.)"},
        8: { item: "Lombo Suíno com Fritas", valor: "R$ 29,99", descricao: "(Lombo suíno, feijão, arroz, fritas, farofa e salada.)"},
        classe: [".carnes"],
        categoria: ["Carnes"]
    },
    frango: {
        0: { item: "Frango à Brasileira (2 pessoas)", valor: "R$ 88,00", descricao: "(Frango grelhado, fritas, arroz, farofa e salada.)"},
        1: { item: "Strogonoff de Frango (2 pessoas)", valor: "R$ 86,00", descricao: "(Frango, creme de leite, champignon, fritas e salada.)"},
        2: { item: "Filé de Frango com Arroz Colorido", valor: "R$ 29,99", descricao: "(Filé de frango grelhado, feijão, arroz com ervilhas e cenoura, fritas, farofa e salada.)"},
        3: { item: "Filé de Frango com Fritas", valor: "R$ 29,99", descricao: "(Filé de frango grelhado, feijão, arroz, fritas, farofa e salada.)"},
        classe: [".frango"],
        categoria: ["Frango"]
    },
    drinks: {
        0: { item: "Vodka Smirnoff", valor: "R$ 14,00"},
        1: { item: "Vodka Leonoff", valor: "R$ 10,00"},
        2: { item: "Domecq", valor: "R$ 15,00"},
        3: { item: "Dreher", valor: "R$ 9,50"},
        4: { item: "Campari", valor: "R$ 14,00"},
        5: { item: "Tequila", valor: "R$ 13,00"},
        6: { item: "Arak", valor: "R$ 18,00"},
        7: { item: "Rum Bacardi", valor: "R$ 10,00"},
        8: { item: "Rum Big Apple", valor: "R$ 14,00"},
        9: { item: "Bols Blue", valor: "R$ 12,00"},
        10: { item: "Cuba Libre", valor: "R$ 14,00"},
        11: { item: "Gin", valor: "R$ 9,00"},
        12: { item: "Sake", valor: "R$ 13,00"},
        13: { item: "Steinhager", valor: "R$ 12,00"},
        14: { item: "Underberg", valor: "R$ 12,00"},
        15: { item: "Caipirinha", valor: "R$ 14,00"},
        16: { item: "Caipivodka", valor: "R$ 17,00"},
        17: { item: "Cravo e Canela", valor: "R$ 15,00"},
        18: { item: "Amarula", valor: "R$ 12,00"},
        19: { item: "Malibu", valor: "R$ 15,00"},
        classe: [".drinks"],
        categoria: ["Drinks"]
    },
    // licores: {
    //     0: {item: "Amarula", valor: "R$ 12,00"},
    //     1: {item: "Frangelico", valor: "R$ 15,00"},
    //     2: {item: "Cointreau", valor: "R$ 15,00"},
    //     3: {item: "Licor de Menta", valor: "R$ 10,00"},
    //     4: {item: "Licor de Cacau", valor: "R$ 10,00"},
    //     5: {item: "Malibu", valor: "R$ 15,00"},
    //     classe: [".licores"],
    //     categoria: ["Licores"]
    // },
    peixe: {
        0: {item: "Filé de Peixe ao Molho de Camarão", valor: "R$ 97,50", descricao: "(Peixe frito, purê de batata, arroz, molho de camarão e salada.)"},
        classe: [".peixe"],
        categoria: ["Peixe"]
    },
    porcoes: {
        0: {item: "Aipim Frito", valor: "R$ 17,00"},
        1: {item: "Azeitonas", valor: "R$ 13,00"},
        2: {item: "Batata Frita", valor: "R$ 20,00"},
        3: {item: "Batata Combo", valor: "R$ 49,99"},
        4: {item: "Camarão ao Alho e Óleo", valor: "R$ 46,00"},
        5: {item: "Carne Seca com Aipim", valor: "R$ 57,00"},
        6: {item: "Carne Seca com Fritas", valor: "R$ 57,00"},
        7: {item: "Isca de Peixe", valor: "R$ 39,00"},
        8: {item: "Linguiça Calabresa", valor: "R$ 25,00"},
        9: {item: "Linguiça Calabresa Combo", valor: "R$ 54,99"},
        10: {item: "Nuggets com Molho Rosé", valor: "R$ 25,00"},
        11: {item: "Arroz", valor: "R$ 12,00"},
        12: {item: "Salaminho", valor: "R$ 25,00"},
        13: {item: "Frango a Passarinho", valor: "R$ 35,00"},
        14: {item: "Frango a Passarinho Combo", valor: "R$ 64,99"},
        15: {item: "Filé Aperitivo", valor: "R$ 49,00"},
        classe: [".porcoes"],
        categoria: ["Porções"]
    },
    pizza: {
        0: {item: "Sabores", valor: "R$ 40,00", descricao: "(Consulte os sabores disponíveis com a recepção!)"},
        classe: [".pizza"],
        categoria: ["Pizza"]
    },
    sucos: {
        0: {item: "Suco de Abacaxi", valor: "R$ 10,00"},
        1: {item: "Suco de Laranja", valor: "R$ 10,00"},
        2: {item: "Suco de Morango", valor: "R$ 10,00"},
        3: {item: "Suco de Morango ao Leite", valor: "R$ 10,00"},
        classe: [".sucos"],
        categoria: ["Sucos Naturais"]
    },
    sanduiches: {
        0: {item: "Bauru de Carne ou Frango", valor: "R$ 36,00", descricao: "(Contra filé ou frango, fritas, ovo, bacon, queijo, presunto, pão e salada.)"},
        1: {item: "Cravo e Canela", valor: "R$ 19,00", descricao: "(Frango desfiado, queijo, picles e salada.)"},
        2: {item: "Hambúrguer c/ Coca-Cola", valor: "R$ 31,00", descricao: "(Carne de hambúrguer, queijo, alface, tomate e fritas.)"},
        3: {item: "Hambúrguer c/ Guaraná", valor: "R$ 31,00", descricao: "(Carne de hambúrguer, queijo, alface, tomate e fritas.)"},
        4: {item: "Misto Quente", valor: "R$ 11,00"},
        5: {item: "Queijo Quente", valor: "R$ 10,00"},
        classe: [".sanduiches"],
        categoria: ["Sanduíches"]
    },
    champanhe: {
        0: {item: "Espumante Chuva de Prata", valor: "R$ 43,00"},
        classe: [".champanhe"],
        categoria: ["Champanhe"]
    },
    // vinhosImportados: {
    //     0: {item: "Toro Chardonnay, Branco, Seco", valor: "R$ 49,90"},
    //     1: {item: "Toro Malbec, Tinto, Seco", valor: "R$ 49,90"},
    //     2: {item: "Toro Tempranillo, Tinto, Seco", valor: "R$ 49,90"},
    //     classe: [".vinhosImportados"],
    //     categoria: ["Vinhos Importados"]
    // },
    vinhosNacionais: {
        0: {item: "Caneca de Vinho", valor: "R$ 12,00"},
        1: {item: "Chalise Tinto, Suave", valor: "R$ 42,00"},
        classe: [".vinhosNacionais"],
        categoria: ["Vinhos Nacionais"]
    },
    whisky: {
        0: {item: "Ballantine's (8 anos)", valor: "R$ 16,00"},
        1: {item: "Black Label", valor: "R$ 25,00"},
        2: {item: "Red Label", valor: "R$ 19,00"},
        3: {item: "White Horse (8 anos)", valor: "R$ 14,00"},
        classe: [".whisky"],
        categoria: ["Whisky"]
    },
    matinal: {
        0: {item: "Café Completo", valor: "R$ 38,00", descricao: "(Café, leite, frutas, mixto, suco, ovos mexidos, biscoitos e manteiga.)"},
        classe: [".matinal"],
        categoria: ["Matinal"]
    },
    salada: {
        0: {item: "Salada de Alface", valor: "R$ 11,50", descricao: "(Alface, tomate, cebola e azeitonas.)"},
        classe: [".salada"],
        categoria: ["Salada"]
    },
    // massas: {
    //     0: {item: "Espaguete a Bolonhesa", valor: "R$ 54,00"},
    //     1: {item: "Espaguete ao Molho de Frango Gratinado", valor: "R$ 55,00"},
    //     classe: [".massas"],
    //     categoria: ["Massas"]
    // },
    enxovalPecasDanificadas: {
        0: {item: "Lençol Comum", valor: "R$ 60,00"},
        1: {item: "Lençol King", valor: "R$ 65,00"},
        2: {item: "Toalha de Banho", valor: "R$ 45,00"},
        3: {item: "Fronha", valor: "R$ 10,00"},
        4: {item: "Piso", valor: "R$ 15,00"},
        5: {item: "Toalha de Rosto", valor: "R$ 15,00"},
        classe: [".enxovalPecasDanificadas"],
        categoria: ["Enxoval - Peças Danificadas"]
    },
    enxovalPecasExtras: {
        0: {item: "Edredom", valor: "R$ 22,80"},
        1: {item: "Fronha", valor: "R$ 4,00"},
        2: {item: "Lençol", valor: "R$ 10,00"},
        3: {item: "Piso", valor: "R$ 5,00"},
        4: {item: "Toalha de Banho", valor: "R$ 7,00"},
        classe: [".enxovalPecasExtras"],
        categoria: ["Enxoval - Peças Extras"]
    },
    // enxovalCortesias: {
    //     0: {item: "Edredon", valor: "", descricao: "( Período mínimo de 8 horas. )"},
    //     1: {item: "Lençol", valor: "", descricao: "( Período mínimo de 4 horas. )"},
    //     classe: [".enxovalCortesias"],
    //     categoria: ["Enxoval - Cortesias"]
    // },
    gelo: {
        0: {item: "Balde Pequeno (filtrado)", valor: "R$ 8,00"},
        1: {item: "Balde Grande", valor: "R$ 10,00"},
        classe: [".gelo"],
        categoria: ["Gelo"]
    }
}


// Aqui inicia a animação da caixa destaques
m = 0
animationDestaques(setInterval(animationDestaques, 8000))
// setInterval(animationDestaques, 8000)
function animationDestaques() {
    var fotosCardapioA = ["porcoes.jpg", "drinks.jpg", "frango.jpg"]
    var fotosCardapioB = ["matinais.jpg", "peixe.jpg", "carnes.jpg"]
    var fotoDestaque = document.querySelectorAll(".foto-destaque")
    fotoDestaque[1].style.opacity = 0
    setTimeout(function() {
        fotoDestaque[1].setAttribute("src", "./midias/jpg/cardapio/" + fotosCardapioA[m])
        fotoDestaque[1].style.opacity = 1
    }, 4000)
    setTimeout(function() {
        fotoDestaque[0].setAttribute("src", "./midias/jpg/cardapio/" + fotosCardapioB[m])
        m++
        if (m == 3) {
            m = 0
        }
    }, 8000)
}
// Aqui encerra animação da caixa destaques

// Aqui inicia função que monsta itens do cardapio
for (var i = 0; i < Object.keys(cardapio).length; i++) {
    var tempKeys = Object.keys(cardapio)[i]; // equivale a [frigobar, artigos pessoais, coqueteis, etc]
    var tempValues = Object.values(cardapio)[i]; //equivale a valores dentro de frigobar
    var tempBox = document.querySelector(tempValues.classe); //captura endereço da tag.
    tempBox.innerHTML = `<li><h3>${tempValues.categoria}</h3></li>`; //escreve o título e preenche com frigobar.categorias
    var tempLength = Object.entries(cardapio)[i][1]; // retorna objeto composto coo objeto simples
    tempLength = Object.keys(tempLength).length - 2 // retorna quantidade de chaves em frigobar
    for (var n = 0; n < tempLength; n++) {
        var item = tempValues[n].item; //equivale a frigobar[$n].item
        var valor = tempValues[n].valor; //equivale a frigobar[$n].valor
        tempBox.innerHTML += `<li>
        <div class="itemValue">
            <p class="item">${item}</p>
            <p class="value">${valor}</p>
        </div>${verify(n)}`
        function verify(n) { //verifica se existe item descricao em cada objeto
            if (tempValues[n].descricao != null) {
                descricao = tempValues[n].descricao;
                return `<div class="itemDescription">
                <p class="description">${descricao}</p>
                </div>
                </li>` 
            } else {
                return '</li>'
            }
        }
    }
}
// Aqui encerra função que mostra itens do cardapio

// Aqui inicia função que abre filtro
function openFilter(value) { //abrir e fefchar filtro de categorias
    var tempBox = document.getElementById("boxFilter");
    var tempButton = document.getElementById("buttonFilter");
    if (value == '_open') {
        tempBox.style.maxHeight = '1000px';
        tempBox.style.transition = '1s';
        tempButton.setAttribute("onclick", `openFilter('_close')`);
        tempButton.setAttribute("class", `bx bx-x`);
        scroll(0, 0);
    } else {
        tempBox.style.maxHeight = '0px';
        tempBox.style.transition = '0.2s';
        tempButton.setAttribute("class", `bx bx-menu`);
        tempButton.setAttribute("onclick", `openFilter('_open')`);
    }
}
// Aqui encerra função que abre filtro

// aqui inicia função para navegar até item desejado através do filtro
function navForItem(value) {
    var tempItem = document.getElementById(value)
    var tempTop = tempItem.offsetTop -60
    scroll(0, tempTop)
    openFilter('_close')
}
