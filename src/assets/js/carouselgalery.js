var slides = document.getElementById('select-product');
var profiles = document.getElementById('profile-container');

var productSelected = slides.getElementsByClassName('product-item');
var imageProductSelected = slides.getElementsByClassName('img-product');
var imageIntensitySelected = slides.getElementsByClassName('intensity');
var titleIntensitySelected = slides.getElementsByClassName('title-intensity');
var getProfile = profiles.getElementsByClassName('profile');
var getProductContainer = document.getElementById('current-product-container');

var getIngredientContainer = document.getElementById('ingredient-container');


var currentImageProduct = document.getElementById('current-product');
var currentImageIntensity = document.getElementById('current-intensity');
var currentImageTitleIntensity = document.getElementById('current-title-intensity');

var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var counter = 0;

next.addEventListener('click', nextSlide, false);
prev.addEventListener('click', prevSlide, false);

for (var i = 0; i < imageProductSelected.length; i++) {
    var index = i;
    var imagem = imageProductSelected[i];
    clickImage(imagem, index);
}

function goToSlide(n) {
    counter = (n + imageProductSelected.length) % imageProductSelected.length;
    changeImageProduct(imageProductSelected[counter], counter);
    changeImageIntensity(imageIntensitySelected[counter]);
    changeTitleIntensity(titleIntensitySelected[counter]);
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
    setTimeout(stopAnimated, 2000);
}

function stopAnimated() {
    getProductContainer.classList.remove('animated');
}

function changeImageProduct(image, index) {
    var path = image.getAttribute('src');
    currentImageProduct.setAttribute('src', path);
    //Get old Product Selected for remove id
    document.getElementById('selected').removeAttribute('id');
    //Added new id selected
    productSelected[index].setAttribute('id', 'selected');
    //Half Circle Color
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
    currentImageIntensity.setAttribute('src', path);
}

function changeTitleIntensity(title) {
    currentImageTitleIntensity.innerHTML = title.textContent;
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