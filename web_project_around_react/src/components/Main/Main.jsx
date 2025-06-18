import React, { useState } from "react";
import Card from "./components/Card";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/NewCard";
import EditProfile from "./components/Popup/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar";
import ImageViewer from "./components/Popup/ImageViewer";
import avatarImage from "../../images/image.jpg";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const initialCards = [
    // puedes poner datos ficticios aquí
  ];

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Actualizar avatar",
    children: <EditAvatar />,
  };
  const viewImagePopup = { title: null, children: <ImageViewer /> };

  function handleOpen(p) {
    setPopup(p);
  }
  function handleClose() {
    setPopup(null);
  }

  return (
    <main>
      <header className="author">
        <img
          className="author__image"
          id="avatarButton"
          src={avatarImage}
          alt="Jacques Cousteau"
          onClick={() => handleOpen(editAvatarPopup)}
        />
        <div className="author__profile">
          <h2 className="author__title">Jacques Cousteau</h2>
          <h3 className="author__text">Explorador</h3>
          <button
            className="author__button author__button-vector"
            onClick={() => handleOpen(editProfilePopup)}
          />
          <button
            className="author__button"
            onClick={() => handleOpen(newCardPopup)}
          />
        </div>
      </header>

      <section className="card-section">
        <ul className="card-section__grid">
          {initialCards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={() => handleOpen(viewImagePopup)}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClose} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
