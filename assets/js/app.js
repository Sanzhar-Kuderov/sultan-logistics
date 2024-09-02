

document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.smartphone-header').classList.add('active');
})
document.querySelector('#smartphone_menu_exit').addEventListener('click', function() {
    document.querySelector('.smartphone-header').classList.remove('active')
})