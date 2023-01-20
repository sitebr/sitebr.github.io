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
    ['TV 32"', 'Som', 'Ar condicionado', 'Frigobar', 'Hidromassagem Pequena', 'Garagem privativa'],
    ['TV 32"', 'Som individual*', 'Ar condicionado', 'Frigobar', 'Hidromassagem Grande', 'Espelho no teto', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar', 'Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Móveis sado*', 'Poltrona erótica*', 'Sauna seca', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar no quarto', 'Frigobar na piscina', 'Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Decoração temática', 'Piscina', 'Poltrona erótica', 'Jogo de luzes', 'Cadeira do Imperador', 'Sauna a vapor', 'Garagem privativa'],
    ['TV 32"', 'Som individual', 'Ar condicionado', 'Frigobar no quarto', 'Frigobar na piscina', 'Hidromassagem Grande', 'Cama redonda', 'Espelho no teto', 'Pole dance', 'Piscina', 'Jogo de luzes', 'Globo espelhado', 'Sauna a vapor', 'Garagem privativa'],
]
let vantagens = [
    ['bx-car', 'Garagem privativa', 'Deixe seu carro seguro e entre nas nossas suítes com toda a discrição.'],
    ['bx-time', 'Aberto 24hrs', 'Curta seu momento sem se preocupar com o horário.'],
    ['bx-wind', 'Ar condicionado', 'O clima pode esquentar, mas na sua suíte vai estar sempre fresquinho.'],
    ['bx-dish', 'Cozinha', 'Nossa cozinha está preparada 24 horas por dia para atender aos nossos clientes.'],
    ['bx-lock-alt', 'Segurança', 'Além de conforto, você tem tranquilidade de curtir com total segurança nas nossas dependências.'],
    ['bx-phone-call', 'Melhor atendimento', 'Nossos funcionários têm presteza no atendimento e são treinados para atendê-lo com total discrição.']
]
let suitePrice = [
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Luxo Simples",
        "91",
        "suite-simples.html", //usado somente em mobile ("home.html")
        "'Suíte Luxo Simples', 'luxoSimples', 4" // usado somente em desktop (index.html)
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'><i class='bx bxs-star-half'></i></i>",
        "Luxo Stander",
        "102",
        "suite-stander.html", //usado somente em mobile ("home.html")
        "'Suíte Luxo Stander', 'luxoStander', 8" // usado somente em desktop (index.html)
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Glamour",
        "132",
        "suite-glamour.html", //usado somente em mobile ("home.html")
        "'Suíte Glamour', 'glamour', 16" // usado somente em desktop (index.html)
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Executiva",
        "183",
        "suite-executiva.html", //usado somente em mobile ("home.html")
        "'Suíte Executiva', 'executiva', 20" // usado somente em desktop (index.html)
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Pres. Romana",
        "250",
        "suite-romana.html", //usado somente em mobile ("home.html")
        "'Suíte Presidencial Romana', 'presRom', 20" // usado somente em desktop (index.html)
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Pres. Plus",
        "288",
        "suite-plus.html", //usado somente em mobile ("home.html")
        "'Suíte Presidencial Plus', 'presPlus', 24" // usado somente em desktop (index.html)
    ],
]
export { valores, suiteItens, vantagens, suitePrice };