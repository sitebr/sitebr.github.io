// import { b } from "./variables.js";
var cardapio = {
    frigobar: {
        0: { item: 'Água sem gás', valor: 'R$ 4,00' },
        1: { item: 'Água com gás', valor: 'R$ 4,00' },
        2: { item: 'Amendoim', valor: 'R$ 3,60' },
        2: { item: 'Amendoim', valor: 'R$ 3,60' },
        3: { item: "Balla Hall's", valor: 'R$ 3,60' },
        4: { item: "Antárctica latão", valor: 'R$ 10,00' },
        5: { item: "Brahma latão", valor: 'R$ 10,00' },
        6: { item: "Amstel latão", valor: 'R$ 10,00' },
        7: { item: "Heineken longneck/latão", valor: 'R$ 10,00' },
        8: { item: "Chocolate", valor: 'R$ 5,00' },
        9: { item: "Smirnoff ice", valor: 'R$ 13,00' },
        10: { item: "Red Bull", valor: 'R$ 16,00' },
        11: { item: "Refrigerante lata", valor: 'R$ 7,00' },
        12: { item: "Trident", valor: 'R$ 5,00' },
        classe: [".frigobar"],
        categoria: ["Frigobar"]
    },
    artigosPessoais: {
        0: { item: "Fósforo", valor: 'R$ 1,00' },
        1: { item: "Preservativo (Unidade)", valor: 'R$ 2,00' },
        2: { item: "Banho de espuma", valor: 'R$ 2,00' },
        3: { item: "Shampoo/Condicionador", valor: 'R$ 2,00' },
        classe: [".artigos-pessoais"],
        categoria: ["Artigos Pessoais"]
    },
    coqueteis: {
        0: { item: "Cravo e Canela", valor: 'R$ 15,00' },
        1: { item: "Caipifrutas de Morango", valor: 'R$ 15,00' },
        2: { item: "Caipifrutas de Abacaxi", valor: 'R$ 15,00' },
        classe: [".coqueteis"],
        categoria: ["Coqueteis"]
    },
    carnes: {
        0: { item: "Picanha na Chapa", valor: "R$ 100,00", descricao: "( Picanha bovina, Fritas, Arroz, Farofa, Molho à campanha e Salada. )"},
        1: { item: "Contra Filé à Gaúcha", valor: "R$ 99,00", descricao: "( Contra filé, Linguiça, Fritas, Arroz, Farofa, Molho à campanha e Salada. )"},
        2: { item: "Churrasco Misto", valor: "R$ 100,00", descricao: "( Contra filé, frango, Lombo suíno, Linguiça, Fritas, Arroz, Farofa, Molho à campanha e Salada."},
        3: { item: "Lombo Suíno à Cravo e Canela", valor: "R$ 69,90", descricao: "( Lombo suíno, Fritas, Arroz, Farofa e Salada."},
        4: { item: "Strogonoff de Filé", valor: "R$ 90,00", descricao: "( Contra filé, Creme de leite, Champignon, Fritas e Arroz. )"},
        classe: [".carnes"],
        categoria: ["Carnes"]
    },
    frango: {
        0: { item: "Frango à Brasileira", valor: "R$ 88,00", descricao: "( Frango grelhado, Fritas, Arroz, Farofa e Salada. )"},
        1: { item: "Strogonoff de Frango", valor: "R$ 86,00", descricao: "( Frango, Creme de leite, Champignon, Fritas e Salada. )"},
        classe: [".frango"],
        categoria: ["Frango"]
    },
    drinks: {
        0: { item: "Vodka Smirnoff", valor: "R$ 14,00"},
        1: { item: "Vodka Absolut", valor: "R$ 17,00"},
        2: { item: "Domecq", valor: "R$ 15,00"},
        3: { item: "Dreher", valor: "R$ 9,50"},
        4: { item: "Campari", valor: "R$ 14,00"},
        5: { item: "Big Apple", valor: "R$ 14,00"},
        6: { item: "Tequila", valor: "R$ 13,00"},
        7: { item: "Arak", valor: "R$ 18,00"},
        8: { item: "Bacardi", valor: "R$ 10,00"},
        9: { item: "Bols Blue", valor: "R$ 12,00"},
        10: { item: "Cuba Libre", valor: "R$ 14,00"},
        11: { item: "Gin", valor: "R$ 9,00"},
        12: { item: "Sake", valor: "R$ 13,00"},
        13: { item: "Steinhager", valor: "R$ 12,00"},
        14: { item: "Underberg", valor: "R$ 12,00"},
        15: { item: "Caipirinha", valor: "R$ 14,00"},
        16: { item: "Caipivodka", valor: "R$ 17,00"},
        classe: [".drinks"],
        categoria: ["Drinks"]
    },
    licores: {
        0: {item: "Amarula", valor: "R$ 12,00"},
        1: {item: "Frangelico", valor: "R$ 15,00"},
        2: {item: "Cointreau", valor: "R$ 15,00"},
        3: {item: "Licor de Menta", valor: "R$ 10,00"},
        4: {item: "Licor de Cacau", valor: "R$ 10,00"},
        5: {item: "Malibu", valor: "R$ 15,00"},
        classe: [".licores"],
        categoria: ["Licores"]
    },
    peixe: {
        0: {item: "Filé de Peixe ao Molho de Camarão", valor: "R$ 97,50", descricao: "( Peixe frito, Purê de batata, Arroz, Molho de Camarão e Salada. )"},
        classe: [".peixe"],
        categoria: ["Peixe"]
    },
    porcoes: {
        0: {item: "Aipim frito", valor: "R$ 17,00"},
        1: {item: "Azeitonas", valor: "R$ 13,00"},
        2: {item: "Batata frita", valor: "R$ 20,00"},
        3: {item: "Camarão ao alho e óleo", valor: "R$ 46,00"},
        4: {item: "Carne seca com aipim", valor: "R$ 57,00"},
        5: {item: "Carne seca com fritas", valor: "R$ 57,00"},
        6: {item: "Isca de peixe", valor: "R$ 39,00"},
        7: {item: "Linguiça calabresa", valor: "R$ 25,00"},
        8: {item: "Nuggets com molho rosé", valor: "R$ 25,00"},
        9: {item: "Arroz", valor: "R$ 12,00"},
        10: {item: "Salaminho", valor: "R$ 25,00"},
        11: {item: "Frango a passarinho", valor: "R$ 35,00"},
        12: {item: "Filé aperitivo", valor: "R$ 49,00"},
        classe: [".porcoes"],
        categoria: ["Porções"]
    },
    pizza: {
        0: {item: "Sabores", valor: "R$ 40,00", descricao: "( Consultar Recepção! )"},
        classe: [".pizza"],
        categoria: ["Pizza"]
    },
    sucos: {
        0: {item: "Suco de Morango", valor: "R$ 10,00"},
        1: {item: "Suco de Morango ao Leite", valor: "R$ 10,00"},
        2: {item: "Suco de Mamão", valor: "R$ 10,00"},
        3: {item: "Suco de Mamão ao Leite", valor: "R$ 10,00"},
        4: {item: "Suco de Mamão com Laranja", valor: "R$ 10,00"},
        5: {item: "Suco de Melão", valor: "R$ 10,00"},
        6: {item: "Suco de Abacaxi", valor: "R$ 10,00"},
        7: {item: "Suco de Laranja", valor: "R$ 10,00"},
        classe: [".sucos"],
        categoria: ["Sucos Naturais"]
    },
    sanduiches: {
        0: {item: "Bauru de Carne ou Frango", valor: "R$ 36,00", descricao: "( Contra filé ou frango, Fritas, Ovo, Bacon, Queijo, Presunto, Pão e Salada. )"},
        1: {item: "Cravo e Canela", valor: "R$ 19,00", descricao: "( Frango desfiado, Queijo, Picles e Salado. )"},
        2: {item: "Misto Quente", valor: "R$ 11,00"},
        3: {item: "Queijo Quente", valor: "R$ 10,00"},
        classe: [".sanduiches"],
        categoria: ["Sanduíches"]
    },
    champanhe: {
        0: {item: "Chandon Brut", valor: "R$ 150,00"},
        1: {item: "Chandon Rosé", valor: "R$ 160,00"},
        classe: [".champanhe"],
        categoria: ["Champanhe"]
    },
    vinhosImportados: {
        0: {item: "Toro Chardonnay, Branco, Seco", valor: "R$ 49,90"},
        1: {item: "Toro Malbec, Tinto, Seco", valor: "R$ 49,90"},
        2: {item: "Toro Tempranillo, Tinto, Seco", valor: "R$ 49,90"},
        classe: [".vinhosImportados"],
        categoria: ["Vinhos Importados"]
    },
    vinhosNacionais: {
        0: {item: "Country Wine, Tinto, Suave", valor: "R$ 49,90"},
        1: {item: "Chalise, Tinto, Suave", valor: "R$ 49,90"},
        2: {item: "Caneca de Vinho", valor: "R$ 12,00"},
        classe: [".vinhosNacionais"],
        categoria: ["Vinhos Nacionais"]
    },
    whisky: {
        0: {item: "White Horse (8 anos)", valor: "R$ 14,00"},
        1: {item: "Ballantine's (12 anos)", valor: "R$ 20,00"},
        2: {item: "Ballantine's (8 anos)", valor: "R$ 16,00"},
        3: {item: "Red Label", valor: "R$ 19,00"},
        4: {item: "Black Label", valor: "R$ 25,00"},
        5: {item: "Grant's", valor: "R$ 14,90"},
        classe: [".whisky"],
        categoria: ["Whisky"]
    },
    matinal: {
        0: {item: "Café Completo", valor: "R$ 38,00", descricao: "( Café, Leite, Frutas, Mixto, Suco, Ovos mexidos, Biscoitos e Manteiga. )"},
        classe: [".matinal"],
        categoria: ["Matinal"]
    },
    salada: {
        0: {item: "Salada de Alface", valor: "R$ 11,50", descricao: "( Alface, Tomate, Cebola e Azeitonas. )"},
        classe: [".salada"],
        categoria: ["Salada"]
    },
    massas: {
        0: {item: "Espaguete a Bolonhesa", valor: "R$ 54,00"},
        1: {item: "Espaguete ao Molho de Frango Gratinado", valor: "R$ 55,00"},
        classe: [".massas"],
        categoria: ["Massas"]
    },
    enxovalPecasDanificadas: {
        0: {item: "Lençol comum", valor: "R$ 60,00"},
        1: {item: "Lençol King", valor: "R$ 65,00"},
        2: {item: "Toalha de banho", valor: "R$ 45,00"},
        3: {item: "Fronha", valor: "R$ 10,00"},
        4: {item: "Piso", valor: "R$ 15,00"},
        classe: [".enxovalPecasDanificadas"],
        categoria: ["Enxoval - Peças Danificadas"]
    },
    enxovalPecasExtras: {
        0: {item: "Edredon", valor: "R$ 22,90"},
        1: {item: "Fronha", valor: "R$ 4,00"},
        2: {item: "Lençol", valor: "R$ 10,00"},
        3: {item: "Piso", valor: "R$ 5,00"},
        4: {item: "Toalha de banho", valor: "R$ 7,00"},
        classe: [".enxovalPecasExtras"],
        categoria: ["Enxoval - Peças Extras"]
    },
    enxovalCortesias: {
        0: {item: "Edredon", valor: "", descricao: "( Período mínimo de 8 horas. )"},
        1: {item: "Lençol", valor: "", descricao: "( Período mínimo de 4 horas. )"},
        classe: [".enxovalCortesias"],
        categoria: ["Enxoval - Cortesias"]
    },
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
