var buttons = document.querySelectorAll(".box-btn-button li") // cria um array com cada botao da parte inferior
var select = document.querySelector(".selectButton") // circulo que acompanha ativação de botoes
var urls = ["cardapio.html", "catalogo.html", "formulario.html", "informacoes.html"] // paginas para navegação
var tempIframe = document.querySelector('iframe') // iframe que carrega outras páginas para dentro de si

function selectButton(value) {
    buttons.forEach(function(key, number, array) {
        if (value == number) {
            key.style.transform = "translateY(-16px)"
            select.style.left = `calc(${number} * 25%)`
            tempIframe.setAttribute('src', urls[value])
        } else {
            key.style.transform = "translateY(0px)"
        }
    })
}
