function active(a) {
    one = ['inicio', 'suites', 'cardapio', 'contato'];
    one.forEach(function(element, indice) {
        if (element == a) {
            document.getElementById(element).setAttribute('style', 'filter: drop-shadow(0 0 2px blue); bottom: 16px;');
            document.querySelector('.mobile_cabecalho .seletor').style.left = 'calc('+indice+' * 25vw)';
            document.querySelector('iframe.myIframe').setAttribute('src', 'html/'+a+'.html');
        } else {
            document.getElementById(element).setAttribute('style', 'bottom: 0px;');
        }
    });
}
function openFoto(number, limit) {
    fotos = document.querySelectorAll('.fotos');
    foto = fotos[number].getAttribute('src');
    document.getElementById('viewFull').style.display = 'flex';
    document.getElementById('image').setAttribute('src', foto);
    numero = number;
    limite = limit;
    if (numero == 0) {
        document.querySelector('#prev .bx').style.display = 'none';
        document.getElementById('prev').removeAttribute('onclick');
    }
    if (numero == limite) {
        document.querySelector('#next .bx').style.display = 'none';
        document.getElementById('next').removeAttribute('onclick');
    }
}
function prev() {
    numero = numero - 1;
    foto = fotos[numero].getAttribute('src');
    document.getElementById('image').setAttribute('src', foto);
    document.querySelector('.alert').style.display = 'none';
    if (numero == 0) {
        document.querySelector('#prev .bx').style.display = 'none';
        document.getElementById('prev').removeAttribute('onclick');
    } else {
        document.getElementById('next').setAttribute('onclick', 'next()');
        document.querySelector('#next .bx').removeAttribute('style');
    }
}
function next() {
    numero = numero + 1;
    foto = fotos[numero].getAttribute('src');
    document.getElementById('image').setAttribute('src', foto);
    document.querySelector('.alert').style.display = 'none';
    if (numero == limite) {
        document.querySelector('#next .bx').style.display = 'none';
        document.getElementById('next').removeAttribute('onclick');
    } else {
        document.getElementById('prev').setAttribute('onclick', 'prev()');
        document.querySelector('#prev .bx').removeAttribute('style')
    }
}
function close_() {
    document.getElementById('viewFull').style.display = 'none';
    document.getElementById('next').setAttribute('onclick', 'next()');
    document.querySelector('#next .bx').removeAttribute('style');
    document.getElementById('prev').setAttribute('onclick', 'prev()');
    document.querySelector('#prev .bx').removeAttribute('style');
    document.querySelector('.alert').style.display = '';
}

// function mobile() {
//     if (window.screen.width > 600 ) {
//         location.href = '../index.html'
//     }
// }

function destaques() {
    myItens = document.querySelectorAll('.destaques img');
    myDelay = 21;
    myItens.forEach(function(item, indice) {
        item.setAttribute('class', 'invisible');
        item.style.transitionDelay = myDelay+'s';
        item.style.transitionDuration = '';
        myDelay = myDelay -3;
    })
    setTimeout(function() {
        myItens.forEach(function(item, indice) {
            item.setAttribute('class', 'visible')
            if (indice < 7) {
                item.style.transitionDelay = '2.5s';
                item.style.transitionDuration = '0.5s';
            } else {
                item.style.transitionDelay = '0s';
            }
            // if (indice == 7) {
            //     item.style.transitionDuration = '2s'
            // }
        })
    }, 21000)
    if (typeof myVar == 'undefined') {
        myVar = setInterval(destaques, 24000)
    }
}

function loading() {
    myItens2 = document.querySelectorAll('.loading div');
    myItens2.forEach(function(item, indice) {
        myIndice = 3;
        item.classList.add('loading_complete');
        item.style.transitionDelay = myIndice * indice +'s'
    })
    setTimeout(function() {
        myItens2.forEach(function(item, indice) {
            item.classList.remove('loading_complete');
            item.style.transitionDelay = '0s'
        })
    }, 23950)
    if (typeof myVar2 == 'undefined') {
        myVar2 = setInterval(loading, 24000)
    }
}

window.onload = function() {
    destaques();
    loading();
};