let suites = [
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Luxo Simples",
        "91",
        "suite-simples.html"
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'><i class='bx bxs-star-half'></i></i>",
        "Luxo Stander",
        "102",
        "suite-stander.html"
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Glamour",
        "132",
        "suite-glamour.html"
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Executiva",
        "183",
        "suite-executiva.html"
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Pres. Romana",
        "250",
        "suite-romana.html"
    ],
    [
        "<i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>",
        "Pres. Plus",
        "288",
        "suite-plus.html"
    ]
]
let boxPrices = document.querySelector('.box-prices')
for (i = 0; i < suites.length; i++) {
    boxPrices.innerHTML += `
    <div class="card">
        <p>${suites[i][0]}</p>
        <p><i class='bx bxs-bed'></i></p>
        <p class="nome-suite">${suites[i][1]}</p>
        <p class="valor">R$ <span>${suites[i][2]},</span>00</p>
        <p class="periodo">2hrs</p>
        <p class="link" onclick="location.href = '${suites[i][3]}'">Clique aqui para conhecer esta suíte!</p>
    </div>
    `
}