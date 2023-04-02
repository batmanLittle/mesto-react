import vector from '../Images/Vector.png'
import avatar from '../Images/Avatar.png'



function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    return (
        <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={avatar}
          alt=""
        />
        <button className="profile__avatar-button"  onClick={onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}>
          <img
            className="profile__img"
            src={vector}
            alt="Плюс"
          />
        </button>
      </section>
      <section className="places-container">
        <ul className="places">
       
        </ul>
      </section>
    </main>
    );

  }
  
  export default Main;