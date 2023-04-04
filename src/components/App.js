import React, { useState, useEffect } from 'react';
import '../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";


function App() {
const [isEditProfilePopupOpen, setisEditProfilePopupOpen]= useState(false);
const [isAddPlacePopupOpen, setisAddPlacePopupOpen]= useState(false);
const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen]= useState(false);
const [selectedCard, setSelectedCard] =  useState(false);

function  handleCardClick(card){
 setSelectedCard(card);
}

  function handleEditAvatarClick(){
    setisEditAvatarPopupOpen(true);
   }
   
   function handleEditProfileClick(){
    setisEditProfilePopupOpen(true);
    }
   
    function handleAddPlaceClick(){
      setisAddPlacePopupOpen(true);
    }
    function closeAllPopups(){
      setisAddPlacePopupOpen(false);
      setisEditProfilePopupOpen(false);
      setisEditAvatarPopupOpen(false);
      setSelectedCard(false);
    }

    useEffect(() => {
      function handleEscClose(e) {
        if (e.code === `Escape`) {
          closeAllPopups();
        }
      }

      function handleOverlayClose(evt){
        if (evt.target.classList.contains(`popup_opened`)) {
          closeAllPopups();
        }
      }
      document.addEventListener(`keydown`, handleEscClose);
      document.addEventListener(`mousedown`, handleOverlayClose);

  return () => {
    document.removeEventListener(`keydown`, handleEscClose);
    document.removeEventListener(`mousedown`, handleOverlayClose);
  };

      
  }, [isEditProfilePopupOpen, isEditAvatarPopupOpen, isAddPlacePopupOpen]);



  return (
    <div className="page">
    <Header/>
    <Main   onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>
    <Footer/>
    <PopupWithForm name='profile'
                  title='Редактировать профиль'
                  text='Сохранить'
                  isOpen={isEditProfilePopupOpen}
                  onClose = {closeAllPopups}
                  >
                    <input
            id="name-input"
            className="popup__input popup__input_data_name"
            type="text"
            name="name"
            placeholder={"Имя"}
            required
            minLength="2"
            maxLength="40"
            
          />
          <span className="name-input-error popup__input-error"></span>

          <input
            id="job-input"
            className="popup__input popup__input_data_job"
            name="about"
            type="text"
            placeholder={"О себе"}
            required
            minLength="2"
            maxLength="200"
          />
          <span className="job-input-error popup__input-error"></span>
    
  </PopupWithForm>

  <PopupWithForm name='card'
                  title='Новое место'
                  text='Сохранить'
                  isOpen={isAddPlacePopupOpen}
                  onClose = {closeAllPopups}
                  >
                    <input
            id="title-input"
            className="popup__input popup__input_data_title"
            type="text"
            name="name"
            placeholder={"Название"}
            minLength="2"
            maxLength="30"
            required
          />
          <span className="title-input-error popup__input-error"></span>
          <input
            id="image-input"
            className="popup__input popup__input_data_img"
            name="link"
            type="url"
            placeholder={"Ссылка на картинку"}
            required
          />
          <span className="image-input-error popup__input-error"></span>
            
</PopupWithForm>

    
<PopupWithForm name='delete'
                  title='Вы уверены?'
                  text='Да'
                  onClose = {closeAllPopups}
                  >
</PopupWithForm>

<PopupWithForm name='avatar'
                  title='Обновить аватар'
                  text='Сохранить'
                  isOpen={isEditAvatarPopupOpen}
                  onClose = {closeAllPopups}>
                    <input
            id="avatar-input"
            className="popup__input popup__input_data_img"
            name="avatar"
            type="url"
            placeholder={"Ссылка на картинку"}
            required
          />
          <span className="avatar-input-error popup__input-error"></span>
</PopupWithForm>
    <ImagePopup 
                card={selectedCard}
                onClose = {closeAllPopups} />
    
  </div>
  
  );

}

export default App;
