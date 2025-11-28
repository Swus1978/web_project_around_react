import React from "react";
import Card from "../components/Main/components/Card/Card";

export default function CardRendering({ cards }) {
  return (
    <section className="card-section">
      <ul className="card-section__grid">
        {cards.map((card) => (
          <Card key={card._id} title={card.name} image={card.link} />
        ))}
      </ul>
    </section>
  );
}
