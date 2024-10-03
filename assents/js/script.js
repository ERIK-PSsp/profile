function olhaPixels() {
    if (window.innerWidth >= 763) {
        Intens.style.display = 'block'
    } else {
        Intens.style.display = 'none'
    }
}
function clickBurger() {
    if (Intens.style.display == 'block') {
        Intens.style.display = 'none'
    } else {
        Intens.style.display = 'block'
    }
}