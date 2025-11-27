import React from "react";
import CardSection from "./CardSection.jsx";

const CardRendering = ({ cards }) => {
  return (
    <section className="card-section">
      <div className="card-section__grid">
        {cards.map((card) => (
          <CardSection key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default CardRendering;
