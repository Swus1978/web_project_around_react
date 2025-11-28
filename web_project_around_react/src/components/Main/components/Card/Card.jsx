export default function Card({ title, image }) {
  return (
    <li className="card-section__card">
      <img className="card-section__card-img" src={image} alt={title} />

      <button
        aria-label="Eliminar"
        className="card-section__button-delete"
        type="button"
      />

      <h2 className="card-section__card-title">{title}</h2>

      <button
        aria-label="Me gusta"
        type="button"
        className="card-section__button-like"
      />
    </li>
  );
}
