import React from "react";

export default function NewCard() {
  return (
    <form className="form form_type_popup" name="addCard" noValidate>
      <input
        type="text"
        name="title"
        placeholder="Título"
        className="form__input form__input_type_title"
        required
        minLength="1"
        maxLength="30"
      />
      <span className="form__input-error title-input-error"></span>

      <input
        type="url"
        name="link"
        placeholder="Enlace de la imagen"
        className="form__input form__input_type_link"
        required
      />
      <span className="form__input-error link-input-error"></span>

      <button className="button popup__button-submit" type="submit">
        Crear
      </button>
    </form>
  );
}
