var foto = 'midias/jpg/03.jpg';

function open_menu() {
    document.getElementById("mobile_menu_left").setAttribute("style","transform: translate(0px);")
}
function close_menu() {
    document.getElementById("mobile_menu_left").setAttribute("style","transform: translate(-100%);");
    close_suites();
    close_contato()
}
function open_suites() {
    document.getElementById("submenu_suites").setAttribute("style", "height:255.2px;");
    document.getElementById("open_suites").setAttribute("onclick", "close_suites()");
    document.getElementById("down_icon_suites").style.transform = ("rotateX(540deg)");
    close_contato()
}
function close_suites() {
    document.getElementById("submenu_suites").setAttribute("style", "");
    document.getElementById("open_suites").setAttribute("onclick", "open_suites()");
    document.getElementById("down_icon_suites").style.transform = ("rotate(0deg)")
}
function open_contato() {
    document.getElementById("submenu_contato").setAttribute("style", "height:98.4px;");
    document.getElementById("open_contato").setAttribute("onclick", "close_contato()");
    document.getElementById("down_icon_contato").style.transform = ("rotateX(540deg)");
    close_suites()
}
function close_contato() {
    document.getElementById("submenu_contato").setAttribute("style", "");
    document.getElementById("open_contato").setAttribute("onclick", "open_contato()");
    document.getElementById("down_icon_contato").style.transform = ("rotate(0deg)");
}
function openLink(link) {
    window.location.href = link; //abre o link na mesma página
    // window.open(a) //abre o link em outra página
}

// galeria de fotos
function active_foto(a, b, c, d) { // abrir galeria - ativar visualizador "a = endereço da foto", "b = número da foto", "c = nome da pasta com /"
    if (b == 1) { // se "b" for igual a 1 desativa botão left
        l_b_foto.style.display = 'none';
    } else {
        l_b_foto.style.display = 'unset'
    }
    if (b == 12) {
        r_b_foto.style.display = 'none'
    } else {
        r_b_foto.style.display = 'unset'
    }
    document.getElementById("visualizador").style.display = 'flex';
    setTimeout(function(){document.getElementById("visualizador").style.opacity = 1}, 1); // executa script após 1 milisegundo
    document.getElementById("item_foto").setAttribute("src", a); // carrega a foto especificada pelo parâmetro "a"
    document.getElementsByTagName("body")["0"].style.overflow = 'hidden';
    r_b_foto.setAttribute("onclick", "next_foto("+b+", '"+c+"', '"+d+"')"); // carrega no botão next/right o parâmetro "b"
    l_b_foto.setAttribute("onclick", "prev_foto("+b+", '"+c+"', '"+d+"')"); // carrega no botão prev/left o parâmetro "b"
}
function c_active_foto() { // fechar galeria - desativar visualizador
    document.getElementById("visualizador").style.opacity = 0;
    setTimeout(function(){document.getElementById("visualizador").style.display = 'none'}, 500); // executa script após 1 milisegundo
    document.getElementsByTagName("body")["0"].style.overflow = 'unset';
    l_b_foto.style.display = 'unset';
}
function next_foto(a, b, c) { // próxima foto "a = número da foto", "b = nome da pasta", "c = número da página"
    var a = a + 1;
    if (a != 1) { // se "a" for diferente de 1 ativa botão left
        l_b_foto.style.display = 'unset';
    }
    if (a == 12) {
        r_b_foto.style.display = 'none'; //se "a" for igual a 12 desativa o botão next_foto
    }
    item_foto.setAttribute("src", "midias/jpg/galeria/"+b+"/"+c+a+".jpg");
    r_b_foto.setAttribute("onclick", "next_foto("+a+", '"+b+"', '"+c+"')");
    l_b_foto.setAttribute("onclick", "prev_foto("+a+", '"+b+"', '"+c+"')");
}
function prev_foto(a, b, c) { // foto anterior "a = número da foto", "b = nome da pasta", "c = número da página"
    var a = a - 1;
    if (a == 1) { // se "a" for igual a 1 desativa botão left
        l_b_foto.style.display = 'none';
    } 
    if (a != 12) { //se "a" for diferente de 12 ativa o botão next_foto
        r_b_foto.style.display = 'unset';
    }
    item_foto.setAttribute("src", "midias/jpg/galeria/"+b+"/"+c+a+".jpg");
    l_b_foto.setAttribute("onclick", "prev_foto("+a+", '"+b+"', '"+c+"')");
    r_b_foto.setAttribute("onclick", "next_foto("+a+", '"+b+"', '"+c+"')");
}
function visualizar(a, b) { // Usado para visualizar a descrição de "valores" e "itens da suíte"
    var ab = document.getElementById(a);
    if (window.innerWidth < 600) { // verfica se o tamanho da tela é menor que 600px
        if (ab.offsetHeight == '0') { // verifica se a altura do elemento "a" é "0"
            ab.style.height = b
        } else {
            ab.style.height = '0px'
        }
    }
}
function nextAlbum(a, b, c, d) { // "a" é igual caminho da foto; "b" é igual o id do botão; "c" é igual ao nome da pasta de fotos; "d" é igual ao número da sequência de fotos
    idImg = [img_01, img_02, img_03, img_04, img_05, img_06, img_07, img_08, img_09, img_10, img_11, img_12];
    idImg.forEach(function(item, indice){
        var1 = indice + 1
        item.setAttribute('src',a+var1+'.jpg')
        item.setAttribute("onclick", "active_foto('"+a+var1+".jpg', "+var1+", '"+c+"', '"+d+"')")
    });
    idBotoes = ['btn_01', 'btn_02', 'btn_03', 'btn_04', 'btn_05']; // array
    function underlineButtons(item) { // função que insere underline
        if ( document.getElementById(item) != null ) {
            if (item == b) {
                document.getElementById(item).style.textDecoration = 'underline';
            } else {
                document.getElementById(item).style.textDecoration = 'none'
            }
        }
    };
    idBotoes.forEach(underlineButtons); // chama a função e executa no array
    function animatedScroll() { // função que anima o scroll top
        var1 = img_01.offsetTop - 44;
        if ( window.scrollY > var1 ) {
            window.scrollBy (0, -10)
        } else {
            clearInterval(var2)
        }
    };
    setTimeout(var2 = setInterval(animatedScroll, 1), 0)
}
function move_left(a) {
    setTimeout(var3 = setInterval(function(){
        left_ = document.getElementById('list_images').style.left;
        left_ = left_.replace('px', '');
        left_ = parseInt(left_);
        vit_width = document.getElementsByClassName('vitrine')[0].offsetWidth;
        www_width = document.getElementById('list_images').offsetWidth;
        max_left = vit_width - www_width - 60;
        if (left_ < 60) {
            btn_left.style.display = '';
            btn_right.style.display = ''
        } if (left_ == 60) {
            btn_right.style.display = 'none'
        } if (left_ < max_left) {
            btn_left.style.display = 'none'
        }
        left_ = left_ + a + 'px';
        document.getElementById('list_images').style.left = left_;}, 1), 0);
    addEventListener('mouseout', function(){clearInterval(var3)})
}