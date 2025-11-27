import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import { Api } from "../api/Api.js";
import {
  cardGridSelector,
  selectors,
  validationConfig,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "084f2569-7956-4ef8-b32d-d13cde68eeac",
    "Content-Type": "application/json",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const template = document.querySelector(selectors.cardTemplate);
  if (!template) {
    console.error(
      "Card template not found. Ensure #cardTemplate exists in index.html."
    );
    return;
  }

  const userInfo = new UserInfo({
    nameSelector: ".author__title",
    jobSelector: ".author__text",
    avatarSelector: ".author__image",
  });

  const imageViewerPopup = new PopupWithImage(selectors.imageViewerPopup);
  imageViewerPopup.setEventListeners();

  const deleteConfirmPopup = new PopupWithConfirmation(
    selectors.deletePopup,
    (cardElement, cardId) => {
      api
        .deleteCard(cardId)
        .then(() => {
          cardElement.remove();
        })
        .catch((error) => console.error("Failed to delete card:", error));
    }
  );
  deleteConfirmPopup.setEventListeners();

  const cardSection = new Section(
    {
      items: [],
      renderer: (item) => {
        const card = new Card(
          item,
          selectors.cardTemplate,
          (link, name) => imageViewerPopup.open(link, name),
          (cardElement, cardId) => deleteConfirmPopup.open(cardElement, cardId)
        );
        const cardElement = card.generateCard();
        cardSection.addItem(cardElement);
      },
    },
    cardGridSelector
  );

  api
    .getAppInfo()
    .then(([userData, initialCards]) => {
      userInfo.setUserInfo({
        name: userData.name,
        job: userData.about,
        avatar: userData.avatar,
      });
      initialCards.forEach((cardData) => {
        const card = new Card(
          cardData,
          selectors.cardTemplate,
          (link, name) => imageViewerPopup.open(link, name),
          (cardElement, cardId) => deleteConfirmPopup.open(cardElement, cardId)
        );
        const cardElement = card.generateCard();
        cardSection.addItem(cardElement);
      });
    })
    .catch((err) =>
      console.error("Error al cargar la información de la aplicación:", err)
    );

  const editProfilePopup = new PopupWithForm(
    selectors.editPopup,
    (formData) => {
      api
        .updateUserInfo({ name: formData.name, about: formData.job })
        .then((userData) => {
          userInfo.setUserInfo({ name: userData.name, job: userData.about });
          editProfilePopup.close();
        })
        .catch((error) => console.error("Failed to update profile:", error));
    }
  );
  editProfilePopup.setEventListeners();

  const addCardPopup = new PopupWithForm(selectors.addCardPopup, (formData) => {
    api
      .addCard({ name: formData.name, link: formData.imageUrl })
      .then((newCard) => {
        const card = new Card(
          newCard,
          selectors.cardTemplate,
          (link, name) => imageViewerPopup.open(link, name),
          (cardElement, cardId) => deleteConfirmPopup.open(cardElement, cardId)
        );
        const cardElement = card.generateCard();
        cardSection.addItem(cardElement);
        addCardPopup.close();
      })
      .catch((error) => console.error("Failed to add card:", error));
  });
  addCardPopup.setEventListeners();

  const avatarPopup = new PopupWithForm(selectors.avatarPopup, (formData) => {
    api
      .updateAvatar(formData.avatarUrl)
      .then((userData) => {
        userInfo.setUserInfo({
          name: userData.name,
          job: userData.about,
          avatar: userData.avatar,
        });
        avatarPopup.close();
      })
      .catch((error) => console.error("Failed to update avatar:", error));
  });
  avatarPopup.setEventListeners();

  document
    .querySelector(selectors.editProfileButton)
    .addEventListener("click", () => {
      const { name, job } = userInfo.getUserInfo();
      document.querySelector(selectors.editNameInput).value = name;
      document.querySelector(selectors.editJobInput).value = job;
      editProfilePopup.open();
    });

  document
    .querySelector(selectors.addCardButton)
    .addEventListener("click", () => {
      addCardPopup.open();
    });

  document
    .querySelector(selectors.avatarButton)
    .addEventListener("click", () => {
      avatarPopup.open();
    });

  const setupFormValidation = (
    popupSelector,
    previewInputId,
    previewImageId
  ) => {
    const form = document
      .querySelector(popupSelector)
      ?.querySelector(".form_type_popup");
    if (form) {
      const validator = new FormValidator(validationConfig, form);
      validator.enableValidation();
      form.validator = validator;
      if (previewInputId && previewImageId) {
        const input = form.querySelector(previewInputId);
        const previewImage = form.querySelector(previewImageId);
        input.addEventListener("input", () => {
          previewImage.src = /^https?:\/\/.+$/.test(input.value)
            ? input.value
            : "";
        });
      }
    }
  };

  setupFormValidation(selectors.editPopup);
  setupFormValidation(
    selectors.addCardPopup,
    "#imageUrlInput",
    "#previewImage"
  );
  setupFormValidation(selectors.avatarPopup, "#avatarUrl", "#avatarPreview");
  setupFormValidation(selectors.deletePopup);
});
