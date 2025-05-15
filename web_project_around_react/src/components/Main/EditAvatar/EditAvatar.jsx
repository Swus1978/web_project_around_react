export default function EditAvatar() {
  return (
    <section
      class="popup popup_type_avatar"
      id="avatarPopup"
      role="dialog"
      aria-labelledby="avatarPopupTitle"
    >
      <div class="popup__content">
        <h2 class="visually-hidden">Formulario de Actualizar Avatar</h2>
        <button
          class="popup__close-template-button"
          id="closeAvatarPopupButton"
          type="button"
          title="Cerrar"
          aria-label="Cerrar"
        ></button>
        <h3 class="popup__title" id="avatarPopupTitle">
          Actualizar avatar
        </h3>
        <form class="form form_type_popup" name="updateAvatar" novalidate>
          <div class="form__field">
            <label for="avatarUrl">URL de imagen:</label>
            <input
              class="form__input"
              type="url"
              name="avatarUrl"
              id="avatarUrl"
              placeholder="https://example.com/avatar.jpg"
              autocomplete="url"
              required
            />
            <span id="avatarUrl-error" class="form__input-error"></span>
          </div>
          <div class="form__preview-container">
            <img
              class="form__image-preview"
              id="avatarPreview"
              src="#"
              alt="Vista previa del avatar"
            />
          </div>
          <button
            class="button popup__button-submit"
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
