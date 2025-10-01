//Botones y popup
const editPopup = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close-button");

//Nombre y trabajo de perfil 
const profileName = document.querySelector(".profile__name");
const profileJobe = document.querySelector(".profile__job");

//Inputs de el popup
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");

//Editar perfil
const form = document.querySelector(".popup");

//Abrir popup Imagenes
const popupImage = document.querySelector(".popup__image");
const popupCloseButon = document.querySelector(".popup__close-image");
const popupImageFull = document.querySelector(".popup__image-full");
const popupCaption = document.querySelector(".popup__caption");


//Funcion para abrir popup  :)
function openPopup(){
    popup.classList.add('popup_open');
    inputName.value = profileName.textContent;
    inputAbout.value = profileJobe.textContent;
}

//Funcion para cerrar popup
function Closebutton(){
    popup.classList.remove('popup_open'); 
}

//Funcion para guardar
function SaveChanges(event){
    event.preventDefault();

    const nuevoNombre = inputName.value;
    const nuevoTrabajo = inputAbout.value;

    profileName.textContent = nuevoNombre;
    profileJobe.textContent = nuevoTrabajo;

    Closebutton();
}
//Funcion para estado del Like
function handleLikeClick(event){
  event.target.classList.toggle('gallery__like-button_active')
}
//Funcion Eliminar tarjeta
function closeTarget(event){
  card = event.target.closest('.gallery__photos'); 
    card.remove();
}
//Funcion popup GALLERY
function openPopupGallery(imageAlt , imageSrc){
    popupImageFull.src = imageSrc;
    popupImageFull.alt = imageAlt;
    popupCaption.textContent = imageAlt;
    popupImage.classList.add('popup_open');

}
//funcion cerrar popup Image
function closepopupImage(){
    popupImage.classList.remove('popup_open');
}
//Escuchadores para abrir cerrar y editar
editPopup.addEventListener('click', openPopup);
closePopup.addEventListener('click', Closebutton);
form.addEventListener('submit', SaveChanges);


//Segundo popup - AGREGAR TARJETA
const addButtton = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup-add");
const addClosePopup = document.querySelector(".popup-add .popup__close-button");

// ✅ Inputs y formulario FUERA del forEach
const inputTitle = document.querySelector(".popup-add input[name='titulo']");
const inputImage = document.querySelector(".popup-add input[name='image']");
const formAddCard = document.querySelector(".popup-add .popup__form");

//Funcion para abrir segundo popup
function OpenAddPopup(){
    addPopup.classList.add("popup_open");
} 

//Funcion para cerrar segundo popup
function CloseAddPopup(){
    addPopup.classList.remove("popup_open");
}

// ✅ Función para agregar tarjeta FUERA del forEach
function handleAddCardSubmit(event){
    event.preventDefault(); // ✅ Con paréntesis
    
  
    const newCardData = {
        name: inputTitle.value,
        link: inputImage.value
    };

    const newCard = createCard(newCardData);
    gallery.prepend(newCard);

    formAddCard.reset();
    CloseAddPopup();
}

//Escuchadores para el popup de agregar
addButtton.addEventListener("click", OpenAddPopup);
addClosePopup.addEventListener("click", CloseAddPopup);
formAddCard.addEventListener("submit", handleAddCardSubmit);
popupCloseButon.addEventListener("click" , closepopupImage);

//Array Cards
const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const template = document.querySelector("#card-template");

function createCard(cardData){
    const cardFragment = template.content.cloneNode(true);
    const likebuton = cardFragment.querySelector(".gallery__like-button");
    const trashbutton = cardFragment.querySelector(".gallery__trash");
    const cardImage = cardFragment.querySelector(".gallery__image")

    cardFragment.querySelector(".gallery__image").src = cardData.link;
    cardFragment.querySelector(".gallery__image").alt = cardData.name;
    cardFragment.querySelector(".gallery__text").textContent = cardData.name;
    trashbutton.addEventListener("click" , closeTarget);
    likebuton.addEventListener("click" , handleLikeClick);
    cardImage.addEventListener("click" ,  function(){
        openPopupGallery(cardData.name , cardData.link)
        
    });
 
    return cardFragment;

}



// ✅ El forEach SOLO para cargar las tarjetas iniciales
initialCards.forEach(function(cardData){
    const card = createCard(cardData);
    gallery.appendChild(card);
});