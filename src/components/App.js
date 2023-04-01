import '../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import trash  from '../Images/Trash.svg'

function App() {
  
  return (
    <div className="page">
    <Header/>
    <Main />
    <Footer/>

    <div className="popup popup_type_profile popup_overlay">
      <div className="popup__container">
        <form className="popup__form" name="profile-form" noValidate>
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>

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
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_card popup_overlay">
      <div className="popup__container">
        <form className="popup__form" name="card-form" noValidate>
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title popup__title_type_text">Новое место</h2>
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
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_image popup_overlay">
      <div className="popup__container">
        <img className="popup__zoom-image" src="#" alt="#" />
        <button className="popup__close" type="button"></button>
        <h2 className="popup__zoom-title"></h2>
      </div>
    </div>

    <div className="popup popup_type_delete popup_overlay">
      <div className="popup__container">
        <form className="popup__form" name="delete-form" noValidate>
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
          <button type="submit" className="popup__button popup__button_type_delete">
            Да
          </button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_avatar popup_overlay">
      <div className="popup__container">
        <form className="popup__form" name="avatar-form" noValidate>
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title popup__title_type_text">Обновить аватар</h2>
          <input
            id="avatar-input"
            className="popup__input popup__input_data_img"
            name="avatar"
            type="url"
            placeholder={"Ссылка на картинку"}
            required
          />
          <span className="avatar-input-error popup__input-error"></span>
          <button type="submit" className="popup__button">Сохранить</button>
        </form>
      </div>
    </div>
    <template className="template">
      <li className="place">
        <img className="place__img" src="#" alt="#" />
        <div className="place__element">
          <h2 className="place__title"></h2>
          <div className="place__icon-group">
            <button className="place__icon" type="button"></button>
            <p className="place__icon-number">0</p>
          </div>
        </div>
        <img
          className="place__delete"
          src={trash}
          alt=""
        />
      </li>
    </template>
  </div>
  
  );

}

export default App;
