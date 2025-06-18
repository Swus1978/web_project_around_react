import React, { useState } from "react";
import closeIcon from "./svg/close-icon.svg";

function AddCardForm({ onClose, onAddCard }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard({ title, imageUrl });
  };

  return (
    <div className="popup">
      <form className="form" onSubmit={handleSubmit}>
        <img
          src={closeIcon}
          alt="Cerrar"
          className="form__close"
          onClick={onClose}
        />
        <h2 className="form__title">Nueva tarjeta</h2>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          placeholder="URL de la imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default AddCardForm;
