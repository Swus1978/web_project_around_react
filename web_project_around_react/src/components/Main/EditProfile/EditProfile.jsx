export default function EditProfile() {
  return (
    <section
      className="popup popup_type_edit-profile"
      id="editPopup"
      role="dialog"
      aria-labelledby="editPopupTitle"
    >
      <div className="popup__content">
        <h2 className="visually-hidden">Formulario de Edición de Perfil</h2>
        <button
          className="popup__close-template-button"
          id="closeEditPopupButton"
          type="button"
          title="Cerrar"
          aria-label="Cerrar"
        ></button>
        <h3 className="popup__title" id="editPopupTitle">
          Editar perfil
        </h3>
        <form className="form form_type_popup" name="editProfile" novalidate>
          <div className="form__field">
            <label for="editName">Nombre:</label>
            <input
              className="form__input"
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
          <div className="form__field">
            <label for="editText">Acerca de mí:</label>
            <input
              clasName="form__input"
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
