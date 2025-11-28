import React from "react";
import Author from "../images/image.jpg";

const Header = () => {
  return (
    <header className="author">
      <img
        className="author__image"
        id="avatarButton"
        src={Author}
        alt="Jacques Cousteau"
      />
      <div className="author__profile">
        <h2 className="author__title">Jacques Cousteau</h2>
        <h3 className="author__text">Explorador</h3>
        <button
          className="author__button author__button-vector"
          id="editProfileButton"
          type="button"
          title="Editar Perfil"
          aria-label="Editar Perfil"
        ></button>
        <button
          className="author__button"
          id="openPopupButton"
          type="button"
          title="Agregar Lugar"
          aria-label="Agregar Lugar"
        ></button>
      </div>
    </header>
  );
};

export default Header;
