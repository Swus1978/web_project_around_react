export default function Popup({ onClose, title, children }) {
  return (
    <div className="popup popup_is-open">
      <div className="popup__content">
        <button
          aria-label="Cerrar popup"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
