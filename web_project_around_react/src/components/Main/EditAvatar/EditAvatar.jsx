export default function EditAvatar() {
  return (
    <section
      className="popup popup_type_avatar"
      id="avatarPopup"
      role="dialog"
      aria-labelledby="avatarPopupTitle"
    >
      <div className="popup__content">
        <h2 className="visually-hidden">Formulario de Actualizar Avatar</h2>
        <button
          className="popup__close-template-button"
          id="closeAvatarPopupButton"
          type="button"
          title="Cerrar"
          aria-label="Cerrar"
        ></button>
        <h3 className="popup__title" id="avatarPopupTitle">
          Actualizar avatar
        </h3>
        <form className="form form_type_popup" name="updateAvatar" novalidate>
          <div className="form__field">
            <label for="avatarUrl">URL de imagen:</label>
            <input
              className="form__input"
              type="url"
              name="avatarUrl"
              id="avatarUrl"
              placeholder="https://example.com/avatar.jpg"
              autocomplete="url"
              required
            />
            <span id="avatarUrl-error" className="form__input-error"></span>
          </div>
          <div className="form__preview-container">
            <img
              className="form__image-preview"
              id="avatarPreview"
              src="#"
              alt="Vista previa del avatar"
            />
          </div>
          <button
            className="button popup__button-submit"
            type="submit"
            aria-label="Guardar"
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}
