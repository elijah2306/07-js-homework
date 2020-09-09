/*Массив с дефолтными карточками*/
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    },
    {
        name: 'Пермь',
        link: 'https://avatars.mds.yandex.net/get-pdb/1043766/03d77fce-1ede-4474-b7e9-56b0d59e8b3f/s1200'
    },
    {
        name: 'Владимир',
        link: 'https://avatars.mds.yandex.net/get-pdb/1050037/63af141c-7e73-4685-a60b-c67fab7ea3d3/s1200?webp=false'
    },
    {
        name: 'Усьвинские столбы',
        link: 'https://fs3.fotoload.ru/f/1018/1540919358/bd890eaeb2.jpg'
    }
];

/*Переменные*/
const placesList = document.querySelector('.places-list');

const editButton = document.querySelector('.user-info__edit-button');
const addButton = document.querySelector('.user-info__button');

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');

const editPopup = document.querySelector('.popup-profile');
const closeEditButton = document.querySelector('.popup__close-edit');

const form = document.forms.new;
const editForm = document.forms.newEdit;

const imagePopup = document.querySelector('.popup-image');
const imageContent = document.querySelector('.popup-image__content');
const imagePicture = document.querySelector('.popup-image__picture');
const closeImageButton = document.querySelector('.popup__close-image');

const popupEditButton = document.querySelector('.popup__button_edit');
const popupAddButton = document.querySelector('.popup__button_add');




/*Функции*/
//Создает структуру карточки
function createCard(nameOfPlace,linkOfPlace) {
// <div class="place-card">
//  <div class="place-card__image" style="background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)">
//      <button class="place-card__delete-icon"></button>
//  </div>
//  <div class="place-card__description">
//      <h3 class="place-card__name">Камчатка</h3>
//      <button class="place-card__like-icon"></button>
//  </div>
//</div>

    const placeCard = document.createElement('div');
    const cardImage = document.createElement('div');
    const deleteButton = document.createElement('button');
    const placeDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const likeButton = document.createElement('button');


    placeCard.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    cardImage.setAttribute('style', `background-image: url(${linkOfPlace})`);
    // cardImage.setAttribute('style', 'cursor: pointer');
    deleteButton.classList.add('place-card__delete-icon');
    placeDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    cardName.textContent = `${nameOfPlace}`;
    likeButton.classList.add('place-card__like-icon');


    placeCard.append(cardImage);
    placeCard.append(placeDescription);
    cardImage.append(deleteButton);
    placeDescription.append(cardName);
    placeDescription.append(likeButton);

    return placeCard;

}
// function getTemplate(data){
//     const template = `<div class="place-card">
//                                 <div class="place-card__image" style="background: url(${data.link})">
//                                     <button class="place-card__delete-icon"></button>
//                                 </div>
//                                 <div class="place-card__description">
//                                     <h3 class="place-card__name">${data.name}</h3>
//                                     <button class="place-card__like-icon"></button>
//                                 </div>
//                             </div>`
//     return template;
// }
// placesList.insertAdjacentHTML('afterend', getTemplate(data));

//Добавляет карточку в DOM-дерево
function addCard(name,link){
    const placeCard = createCard(name, link);
    placesList.append(placeCard);
}
//Добавляет карточки из дефолтного массива
function createCards(arrayOfCard){
    for (item of arrayOfCard){
        const name = item.name;
        const link = item.link;
        addCard(name,link);
    }
    return arrayOfCard;
}
//Открывает попап
function openPopup(){
    popup.classList.add('popup_is-opened');
}
//Закрывает попап
function closeForm(){
    popup.classList.remove('popup_is-opened');
    form.reset();
}

//Открывает попап редактирования профиля
function openEditPopup(){
    editPopup.classList.add('popup_is-opened');
}
//Закрывает попап редактирования профиля
function closeEditForm(){
    editPopup.classList.remove('popup_is-opened');
    editForm.reset();
}

//Обработчик слушателя лайка
function likeHandler(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
}

//Добавляет новую карточку
function addNewCard(event) {
    event.preventDefault();

    const placename = form.elements.placename.value;
    const link = form.elements.link.value;
    addCard(placename,link);

    closeForm();

    popupAddButton.setAttribute('disabled',true);
    popupAddButton.classList.remove('popup__button_enabled');
}

//Обработчик слушателя удаления карточки
function deleteCard(event){
    if (event.target.classList.contains('place-card__delete-icon')) {
        event.target.parentNode.parentNode.remove();
        event.stopImmediatePropagation();
    }
    
}
//Закрывает форму нажатием кнопки "Escape"
function addFormClosesWithEscape(event) {
    if (event.key === 27 && popup.classList.contains('popup_is-opened')) {
        closeForm();
    }
}
//Рендер текста
function renderEdit (text) {
    document.querySelector('.user-info__name').textContent = text.name;
    document.querySelector('.user-info__job').textContent = text.about;
}
//Редактирование имени и информации о себе
function changeInfo(event){
    event.preventDefault();

    const infoContainer = {};
    const name = editForm.elements.name.value;
    const about = editForm.elements.about.value;

    infoContainer.name = name;
    infoContainer.about = about;

    renderEdit(infoContainer);
    closeEditForm();

    popupEditButton.setAttribute('disabled',true);
    popupEditButton.classList.remove('popup__button_enabled');
}

//Открытие попапа с картинкой
function openImagePopup(event){
    event.preventDefault();
    if (event.target.closest('.place-card__image')){
        imagePopup.classList.add('popup-image_is-opened');
        imagePicture.style = event.target.getAttribute('style');
    }
    console.log(event.currentTarget);
}

//Закрывает попап c картинкой
function closeImagePopup(){
    imagePopup.classList.remove('popup-image_is-opened');
}

//Активная/неактивная кнопка

function checkEditValidity(){
    const name = editForm.elements.name;
    const about = editForm.elements.about;
    if (name.value.length === 0 || about.value.length === 0) {
        popupEditButton.setAttribute('disabled',true);
        popupEditButton.classList.remove('popup__button_enabled');
    } else  {
        popupEditButton.removeAttribute('disabled');
        popupEditButton.classList.add('popup__button_enabled');
    }
}

function checkAddValidity(){
    const placename = form.elements.placename;
    const link = form.elements.link;
    if (placename.value.length === 0 || link.value.length === 0){
        popupAddButton.setAttribute('disabled',true);
        popupAddButton.classList.remove('popup__button_enabled');
    } else {
        popupAddButton.removeAttribute('disabled');
        popupAddButton.classList.add('popup__button_enabled');
    }
}

//Валидация форм

function setError(input) {
    input.nextElementSibling.innerText = input.validationMessage;
}

function validateField(input) {
    const validity = input.validity;

    if (validity.valueMissing) {
        input.setCustomValidity(`Это обязательное поле`);
        setError(input);
        return false;
    }

    if (validity.tooShort) {
        input.setCustomValidity(`Долно быть от ${input.getAttribute('minlength')} до ${input.getAttribute('maxlength')} символов`);
        setError(input);
        return false;
    }

    if (validity.tooLong) {
        input.setCustomValidity(`Долно быть от ${input.getAttribute('minlength')} до ${input.getAttribute('maxlength')} символов`);
        setError(input);
        return false;
    }

    if (input.validity.typeMismatch && input.type === 'url') {
        input.setCustomValidity('Здесь должна быть ссылка');
        setError(input);
        return false;
    };

    input.setCustomValidity('');
    setError(input);
    return true;
}
function submitForm(event){
    event.preventDefault();
    const inputs = [...document.querySelectorAll('input')];
    inputs.forEach(validateField);

    // if (!inputs.every((item) => item.valid)) {
    //     event.preventDefault();
    // }
}

/*Слушатели событий*/
addButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closeForm);

editButton.addEventListener('click', openEditPopup);
closeEditButton.addEventListener('click', closeEditForm);

placesList.addEventListener('click', likeHandler);
placesList.addEventListener('click', deleteCard);

form.addEventListener('submit',addNewCard);
form.addEventListener('keydown', addFormClosesWithEscape);

editForm.addEventListener('submit',changeInfo);

placesList.addEventListener('click', openImagePopup);
closeImageButton.addEventListener('click',closeImagePopup);

editForm.addEventListener('input',checkEditValidity);
form.addEventListener('input',checkAddValidity);

editForm.addEventListener('submit', submitForm);
editForm.addEventListener('input', (event) => {
    validateField(event.target);
}, true);
form.addEventListener('submit', submitForm);
form.addEventListener('input', (event) => {
    validateField(event.target);
}, true);

/*Объявление функций*/
createCards(initialCards);
