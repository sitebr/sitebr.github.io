let id = ''
function changeTheme() {
    if (id > 0) {
        clearInterval(id)
        id = ''
        let iframe = document.querySelector('iframe').contentDocument
        iframe.body.classList.add('light')
    } else {
        id = setInterval(function () {
            let iframe = document.querySelector('iframe').contentDocument
            if (iframe.body.classList.value.includes('light')) {
                iframe.body.classList.remove('light')
            }
        }, 100)
    }
    let btn = document.querySelector(".btn-theme")
    btn.classList.toggle('bx-moon')
    btn.classList.toggle('bx-sun')
    let body = document.querySelector("body")
    body.classList.toggle('light')
}

function changePage(n, url) {
    let btn = document.querySelectorAll('.menu ul li')
    let iframe = document.querySelector('iframe')
    btn.forEach(function (array, key) {
        if (n == key) {
            array.classList.add('active')
        } else {
            array.classList.remove('active')
        }
    })
    iframe.setAttribute('src', url)
}