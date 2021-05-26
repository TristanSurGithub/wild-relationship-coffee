var slides = document.getElementById('select-product');
var imgs = slides.getElementsByTagName('img');
var imagemSelecionada = document.getElementById('displayed-img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var counter = 0;

next.addEventListener('click', nextSlide, false);
prev.addEventListener('click', prevSlide, false);

for (var i = 0; i < imgs.length; i++) {
    var index = i;
    var imagem = imgs[i];
    clickImage(imagem, index);
}

function goToSlide(n) {
    counter = (n + imgs.length) % imgs.length;
    mudaImagem(imgs[counter], n);
    console.log(counter)
}

function nextSlide() {
    goToSlide(counter + 1);
}

function prevSlide() {
    goToSlide(counter - 1);
}

function mudaImagem(imagem, index) {
    var path = imagem.getAttribute('src');
    imagemSelecionada.setAttribute('src', path);
}

function clickImage(imagem, index) {
    imagem.addEventListener('click', function (event) {
        event.preventDefault();
        mudaImagem(imagem, index);
        goToSlide(index);
    });
}