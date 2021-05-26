var slides = document.getElementById('select-product');
var profiles = document.getElementById('profile-container');

var imageSelectProducts = slides.getElementsByClassName('product');
var imageSelectIntensity = slides.getElementsByClassName('intensity');
var SelectTitleIntensity = slides.getElementsByClassName('title-intensity');
var getProfile = profiles.getElementsByClassName('profile');


var imageProductSelect = document.getElementById('current-product');
var imageIntensitySelect = document.getElementById('current-intensity');
var imageTitleIntensitySelect = document.getElementById('current-title-intensity');

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var counter = 0;

next.addEventListener('click', nextSlide, false);
prev.addEventListener('click', prevSlide, false);

for (var i = 0; i < imageSelectProducts.length; i++) {
    var index = i;
    var imagem = imageSelectProducts[i];
    clickImage(imagem, index);
}

function goToSlide(n) {
    counter = (n + imageSelectProducts.length) % imageSelectProducts.length;
    changeImageProduct(imageSelectProducts[counter]);
    changeImageIntensity(imageSelectIntensity[counter]);
    changeTitleIntensity(SelectTitleIntensity[counter]);
    changeProfile(getProfile[counter]);
}

function nextSlide() {
    goToSlide(counter + 1);
}

function prevSlide() {
    goToSlide(counter - 1);
}

function changeImageProduct(imagem) {
    var path = imagem.getAttribute('src');
    imageProductSelect.setAttribute('src', path);
}

function changeImageIntensity(imagem) {
    var path = imagem.getAttribute('src');
    imageIntensitySelect.setAttribute('src', path);
}

function changeTitleIntensity(imagem) {
    imageTitleIntensitySelect.innerHTML = imagem.textContent;
}

function changeProfile(imagem) {
    var getProfileActive = document.getElementById('active-profile');
    getProfileActive.removeAttribute('id');
    imagem.setAttribute('id','active-profile');
}

function clickImage(imagem, index) {
    imagem.addEventListener('click', function (event) {
        event.preventDefault();
        changeImageProduct(imagem, index);
        goToSlide(index);
    });
}