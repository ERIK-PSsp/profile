function mudouTamanho() {
    if (window.innerWidth >= 768) {
        icons.style.display = 'block'
    } else {
        icons.style.display = 'none'
    }
}

function clickMenu() {
    if (icons.style.display == 'block') {
        icons.style.display = 'none'
    } else {
        icons.style.display = 'block'
    }
}