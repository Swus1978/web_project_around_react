// src/components/Main/components/Popup/EditAvatar.jsx
import React, { useState } from "react";
import closeIcon from "@images/close-icon.svg";

function EditAvatarForm({ onClose, onSave }) {
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(avatarUrl);
  };

  return (
    <div className="popup">
      <form className="popup__form" onSubmit={handleSubmit}>
        <button className="popup__close" onClick={onClose} type="button">
          <img src={closeIcon} alt="Cerrar" />
        </button>
        <h2 className="popup__title">Cambiar avatar</h2>
        <input
          type="url"
          name="avatar"
          id="avatar"
          placeholder="URL del nuevo avatar"
          className="popup__input"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          required
        />
        <button type="submit" className="popup__submit">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default EditAvatarForm;
