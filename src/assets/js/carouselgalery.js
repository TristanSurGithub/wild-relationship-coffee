var slides = document.getElementById('select-product');
var profiles = document.getElementById('profile-container');

var imageSelectProducts = slides.getElementsByClassName('product');
var imageSelectIntensity = slides.getElementsByClassName('intensity');
var SelectTitleIntensity = slides.getElementsByClassName('title-intensity');
var getProfile = profiles.getElementsByClassName('profile');
var getProductContainer = document.getElementById('current-product-container');

var getIngredientContainer = document.getElementById('ingredient-container');


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
    changeImageProduct(imageSelectProducts[counter], counter);
    changeImageIntensity(imageSelectIntensity[counter]);
    changeTitleIntensity(SelectTitleIntensity[counter]);
    changeProfile(getProfile[counter]);
}

function nextSlide() {
    goToSlide(counter + 1);
    Animated();
}

function prevSlide() {
    goToSlide(counter - 1);
    Animated();
}

function Animated() {
    getProductContainer.classList.add('animated');
    getProductContainer.style.top = "-90px";
    setTimeout(stopAnimated, 4000);
}

function stopAnimated() {
    getProductContainer.classList.remove('animated');
    getProductContainer.style.top = "15%";
}

function changeImageProduct(image, index) {
    var path = image.getAttribute('src');
    imageProductSelect.setAttribute('src', path);
    switch (index) {
        case 0:
            getIngredientContainer.className = '';
            getIngredientContainer.className = 'bg-circle-green';
            break;
        case 1:
            getIngredientContainer.className = '';
            getIngredientContainer.className = 'bg-circle-purple';
            break;
        case 2:
            getIngredientContainer.className = '';
            getIngredientContainer.className = 'bg-circle-yellow';
            break;
        default:
            getIngredientContainer.className = '';
            getIngredientContainer.className = 'bg-circle-green';
    }
}

function changeImageIntensity(image) {
    var path = image.getAttribute('src');
    imageIntensitySelect.setAttribute('src', path);
}

function changeTitleIntensity(title) {
    imageTitleIntensitySelect.innerHTML = title.textContent;
}

function changeProfile(profileTag) {
    var getProfileActive = document.getElementById('active-profile');
    getProfileActive.removeAttribute('id');
    profileTag.setAttribute('id', 'active-profile');
}

function clickImage(image, index) {
    image.addEventListener('click', function (event) {
        event.preventDefault();
        changeImageProduct(image, index);
        goToSlide(index);
        Animated();
    });
}