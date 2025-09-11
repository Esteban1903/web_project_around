//Botones y popup
const editPopup = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close-button");

//Nombre y trabajo de perfil 
const profileName = document.querySelector(".profile__name");
const profileJobe = document.querySelector(".profile__job");

//Inputs de el popup
const inputName = document.querySelector(".popup__name")
const inputAbout = document.querySelector(".popup__about")

//Editar perfil
const form = document.querySelector(".popup")

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

    const nuevoNombre = inputName.value
    const nuevoTrabajo = inputAbout.value

    profileName.textContent  = nuevoNombre
    profileJobe.textContent  = nuevoTrabajo

    Closebutton();

}

//Escuchadores para abrir cerrar y editar
 editPopup.addEventListener ('click' , openPopup);
 closePopup.addEventListener ('click', Closebutton);
 form.addEventListener('submit', SaveChanges);


