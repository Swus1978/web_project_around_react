import React, { useState } from "react";
import closeIcon from "./svg/close-icon.svg";

function EditProfileForm({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, about });
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
        <h2 className="form__title">Editar perfil</h2>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          id="about"
          name="about"
          placeholder="Acerca de mí"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default EditProfileForm;
