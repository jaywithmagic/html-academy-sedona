let closeButton = document.querySelector('.modal-close-button');
let modalContainer = document.querySelector('.modal-container');
let modalButton = document.querySelector('.user-navigation .button');
let hotelSearch = document.querySelector('.hotel-search-button');

closeButton.onclick = function(evt) {
    evt.preventDefault();
    modalContainer.classList.add('modal-container-disabled');
    modalContainer.classList.remove('modal-container');
};

modalButton.onclick = function(evt) {
    evt.preventDefault();
    modalContainer.classList.remove('modal-container-disabled');
    modalContainer.classList.add('modal-container');
};

hotelSearch.onclick = function(evt) {
    evt.preventDefault();
    modalContainer.classList.remove('modal-container-disabled');
    modalContainer.classList.add('modal-container');
};