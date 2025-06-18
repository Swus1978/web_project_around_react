import React from "react";

export default function Card({ card, onClick }) {
  const { name, link, isLiked } = card;
  return (
    <li className="card-section__card">
      <img
        className="card-section__card-img"
        src={link}
        alt={name}
        onClick={onClick}
      />
      <button className="card-section__button-delete" type="button" />
      <h3 className="card-section__card-title">{name}</h3>
      <button
        className={`card-section__button-like ${
          isLiked ? "card-section__button-like_active" : ""
        }`}
        type="button"
      />
    </li>
  );
}
