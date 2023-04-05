import vector from "../Images/Vector.png";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getCards()])
      .then(([data, dataCards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <button
          className="profile__avatar-button"
          onClick={onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__button" type="button" onClick={onAddPlace}>
          <img className="profile__img" src={vector} alt="Плюс" />
        </button>
      </section>
      <section className="places-container">
        <ul className="places">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card._id}
                name={card.name}
                onCardClick={onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
