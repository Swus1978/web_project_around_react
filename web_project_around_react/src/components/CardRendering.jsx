import React from "react";
import CardSection from "./CardSection.jsx";

const CardRendering = ({ cards }) => {
  return (
    <section className="card-section">
      <ul className="card-section__grid">
        {cards.map((card) => (
          <CardSection key={card._id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default CardRendering;
