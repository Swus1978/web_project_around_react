import { useState, useEffect } from "react";
import NewCard from "../form/NewCard/NewCard";
import EditProfile from "./EditProfile/EditProfile";
import EditAvatar from "./EditAvatar/EditAvatar";
import Popup from "./Popup/Popup";
import Card from "../Card/Card";
import avatar from "../../images/image.jpg";
import { Api } from "../../api/Api";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "084f2569-7956-4ef8-b32d-d13cde68eeac",
    "Content-Type": "application/json",
  },
});

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "Jacques Cousteau",
    about: "Explorador",
    avatar,
  });
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getAppInfo()
      .then(([userData, cardsData]) => {
        setUserInfo({
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar || avatar,
        });
        setCards(cardsData);
      })
      .catch((err) => {
        setError(`Failed to load data: ${err}`);
        console.error(err);
      });
  }, []);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onSubmit={handleAddCard} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile onSubmit={handleUpdateUser} userInfo={userInfo} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onSubmit={handleUpdateAvatar} />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
    document.querySelector("#overlay")?.classList.add("overlay--active");
  }

  function handleClosePopup() {
    setPopup(null);
    document.querySelector("#overlay")?.classList.remove("overlay--active");
  }

  function handleAddCard({ name, link }) {
    api
      .addCard({ name, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((err) => {
        setError(`Failed to add card: ${err}`);
        console.error(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo({ name, about })
      .then((updatedUser) => {
        setUserInfo({
          name: updatedUser.name,
          about: updatedUser.about,
          avatar: updatedUser.avatar || userInfo.avatar,
        });
        handleClosePopup();
      })
      .catch((err) => {
        setError(`Failed to update profile: ${err}`);
        console.error(err);
      });
  }

  function handleUpdateAvatar(avatarUrl) {
    api
      .updateAvatar(avatarUrl)
      .then((updatedUser) => {
        setUserInfo({
          ...userInfo,
          avatar: updatedUser.avatar,
        });
        handleClosePopup();
      })
      .catch((err) => {
        setError(`Failed to update avatar: ${err}`);
        console.error(err);
      });
  }

  function handleDeleteCard(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cardId));
      })
      .catch((err) => {
        setError(`Failed to delete card: ${err}`);
        console.error(err);
      });
  }

  function handleCardClick(card) {
    setPopup({
      title: "",
      children: (
        <div className="popup__content-image">
          <img className="popup__image" src={card.link} alt={card.name} />
          <div className="popup__image-name">{card.name}</div>
        </div>
      ),
    });
    document.querySelector("#overlay")?.classList.add("overlay--active");
  }

  return (
    <>
      <main>
        {error && <div className="error">{error}</div>}

        <header className="author">
          <img
            className="author__image"
            src={userInfo.avatar}
            alt={userInfo.name}
          />
          <div className="author__profile">
            <h2 className="author__title">{userInfo.name}</h2>
            <h3 className="author__text">{userInfo.about}</h3>
            <button
              className="author__button author__button-vector"
              type="button"
              title="Editar Perfil"
              aria-label="Editar Perfil"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
            <button
              className="profile__add-button"
              type="button"
              title="Agregar Lugar"
              aria-label="Agregar Lugar"
              onClick={() => handleOpenPopup(newCardPopup)}
            ></button>
            <button
              className="author__button author__button-avatar"
              type="button"
              title="Cambiar Foto de Perfil"
              aria-label="Cambiar Foto de Perfil"
              onClick={() => handleOpenPopup(editAvatarPopup)}
            ></button>
          </div>
        </header>

        <section className="cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onDelete={handleDeleteCard}
            />
          ))}
        </section>
      </main>

      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      <div id="overlay" className="overlay"></div>
    </>
  );
}
