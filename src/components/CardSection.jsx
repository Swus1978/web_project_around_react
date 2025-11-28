import React from "react";

const CardSection = ({ card }) => {
  const { name, link } = card;

  return (
    <div className="card-section__card">
      <img className="card-section__card-img" src={link} alt={name} />

      <button
        className="card-section__button-delete"
        type="button"
        aria-label="Eliminar"
      ></button>

      <h3 className="card-section__card-title">{name}</h3>

      <button
        className="card-section__button-like"
        type="button"
        aria-label="Me gusta"
      ></button>
    </div>
  );
};

export default CardSection;
