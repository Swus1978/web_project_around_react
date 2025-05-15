export default function EditProfile() {
  return (
    <section
      class="popup popup_type_edit-profile"
      id="editPopup"
      role="dialog"
      aria-labelledby="editPopupTitle"
    >
      <div class="popup__content">
        <h2 class="visually-hidden">Formulario de Edición de Perfil</h2>
        <button
          class="popup__close-template-button"
          id="closeEditPopupButton"
          type="button"
          title="Cerrar"
          aria-label="Cerrar"
        ></button>
        <h3 class="popup__title" id="editPopupTitle">
          Editar perfil
        </h3>
        <form class="form form_type_popup" name="editProfile" novalidate>
          <div class="form__field">
            <label for="editName">Nombre:</label>
            <input
              class="form__input"
              type="text"
              name="name"
              id="editName"
              placeholder="Introduce tu título"
              autocomplete="name"
              required
              minlength="2"
              maxlength="40"
            />
            <span id="editName-error" class="form__input-error"></span>
          </div>
          <div class="form__field">
            <label for="editText">Acerca de mí:</label>
            <input
              class="form__input"
              type="text"
              name="job"
              id="editText"
              placeholder="Introduce tu ocupación"
              autocomplete="off"
              required
              minlength="2"
              maxlength="200"
            />
            <span id="editText-error" class="form__input-error"></span>
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
