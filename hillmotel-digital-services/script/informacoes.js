var perguntas = {
    0: {
        pergunta: "Onde devo pagar a conta?",
        resposta: "A conta é paga na suíte, basta solicitar através do interfone na cabeceira da cama."
    },
    1: {
        pergunta: "Como me comunicar com a Recepção?",
        resposta: "Basta retirar o interfone do gancho e aguardar ser atendido. Não é necessário discar número algum."
    },
    2: {
        pergunta: "O que fazer se o interfone parar de funcionar?",
        resposta: "Desde já pedimos desculpas pelo transtorno e se possível pedimos que entre em contato conosco através do número 022 9 9211-9010 ou bata algumas vezes na porta da sala de refeições e aguarde que um de nossos atendentes irá atende-lo."
    },
    3: {
        pergunta: "Lorem ipsum is simples?",
        resposta: "Praesent iaculis, lorem id porttitor lobortis, elit risus sodales neque, et venenatis justo turpis in orci. Suspendisse potenti. Vivamus ac accumsan diam. Praesent justo erat, cursus vel maximus varius, porta eget nunc. Suspendisse aliquet justo sit amet ornare facilisis. Morbi nec augue et sem tempor volutpat non non sem. Donec et augue maximus elit sodales venenatis."
    }
}

for (var i = 0; i < Object.keys(perguntas).length; i++) {
    var element = document.querySelector(".list")
    element.innerHTML += `<li><span class="pergunta">${perguntas[i].pergunta}</span><p class="resposta">${perguntas[i].resposta}</p></li>`
}