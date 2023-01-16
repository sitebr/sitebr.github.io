function animarScrool() {
    my_box = document.querySelectorAll('.my_box');
    my_picture = document.querySelectorAll('.mypicture');
    tela = (window.innerHeight * 0.75) + window.scrollY;
    my_box.forEach(function(item, indice) {
        if (tela > item.offsetTop) {
            my_picture[indice].classList.add('myTransition')
            // my_picture[indice].style.transition = '3s';
            // my_picture[indice].style.transform = 'translateX(0px)';
            // my_picture[indice].style.opacity = 1; || não está errado, mas fazendo no css e adicionando a classe é melhor.
        } else {
            my_picture[indice].classList.remove('myTransition')
        }
    })
}

function destaques() {
    myItens = document.querySelectorAll('.destaques img');
    myDelay = 21;
    myItens.forEach(function(item, indice) {
        item.style.transitionDelay = myDelay+'s';
        item.setAttribute('class', 'invisible');
        myDelay = myDelay -3;
        setTimeout(function() {
            myItens.forEach(function(item, indice) {
                if (indice < 7) {
                    item.style.transitionDelay = '2.5s'; // necessário para que fotos só apareçam após 80% de carregamento da ultima imagem
                } else {
                    item.style.transitionDelay = '0s';
                }
                item.setAttribute('class', 'visible');
            })
        }, 21000)
    });
    if (typeof myVar == 'undefined') {
        myVar = setInterval(destaques, 24000);
    };
}

function loading_destaques() {
    myLoading = document.querySelectorAll('.loading');
    myLoading.forEach(function(item, indice) {
        myIndice = indice * 3 + 's';
        item.firstChild.style.transitionDelay = myIndice;
        item.firstChild.setAttribute('class', 'loading_complete');
        // item.firstChild.classList.remove('loading_reset');
        // item.firstChild.classList.add('loading_complete');
    })
    setTimeout(function() {
        myLoading.forEach(function(item) {
            item.firstChild.style.transitionDelay = '0s';
            item.firstChild.setAttribute('class', 'loading_reset');
            // item.firstChild.classList.remove('loading_complete');
            // item.firstChild.classList.add('loading_reset');
        })
    }, 23950); // diminui 0050 para que funcione a transição de width: 100%; para width: 0%;
    if (typeof process2 === 'undefined') {
        process2 = setInterval(loading_destaques, 24000)
    }
}

function openImage(folder, number) { // função abrir galeria
    document.querySelector('.menu').style.display = 'none';
    myFolder = 'midias/jpg/galeria/'+folder;
    myFile = myFolder+'1.jpg';
    myBoxItem = document.querySelector('.viewer_box_inactive');
    myBoxItem.setAttribute('class', 'viewer_box_active');
    myViewerItem = document.getElementById('viewer_item');
    myViewerItem.setAttribute('src', myFile);
    limitNumber = number;
    myNumber = 1;
}
function replaceImage(value) { //função trocar imagem
    myNumber = myNumber+value;
    if (myNumber == limitNumber) {
        document.getElementById('right').setAttribute('onclick', '')
    } else if (myNumber == 1) {
        document.getElementById('left').setAttribute('onclick', '')
    } else {
        document.getElementById('left').setAttribute('onclick', 'replaceImage(-1)')
        document.getElementById('right').setAttribute('onclick', 'replaceImage(1)')
    }
    myFile = myFolder+myNumber+'.jpg';
    myViewerItem.setAttribute('src', myFile);
    document.querySelector('.alert').style.display = 'none';
}
function closeFoto() {
    document.querySelector('.menu').style.display = '';
    document.querySelector('.alert').style.display = '';
    myBoxItem.setAttribute('class','viewer_box_inactive');
    document.getElementById('right').setAttribute('onclick', 'replaceImage(1)')
    document.getElementById('left').setAttribute('onclick', 'replaceImage(-1)')
}
function openCardapio(number) {
    myItens2 = document.querySelectorAll('.cardapio_categorias li');
    myItens3 = document.querySelectorAll('.cardapio_itens ul');
    myItens2.forEach(function(item, indice) {
        if (number == indice) {
            item.classList.add('active');
            myItens3[indice].setAttribute('class', 'visible');
        } else {
            item.classList.remove('active')
            myItens3[indice].setAttribute('class', 'invisible');
        }
    })
}
// function mobile() {
//     if (window.screen.width <= 600 ) {
//         location.href = 'mobile/index.php'
//     }
// }
window.onload = function() {
    destaques();
    loading_destaques();
    animarScrool();
}
window.onscroll = animarScrool;