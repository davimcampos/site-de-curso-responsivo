let cont = 1;


setInterval(function () {

    document.getElementById('slide' + cont).checked = true;

    cont++;

    if (cont > 3) {
        cont = 1;
    }


}, 3000)

function mostrarMenu() {
    let menuMobile = document.querySelector('.menu-responsivo');
    if (menuMobile.classList.contains('abrir')) {
        menuMobile.classList.remove('abrir');
    }
    else {
        menuMobile.classList.add('abrir');
    }
}
