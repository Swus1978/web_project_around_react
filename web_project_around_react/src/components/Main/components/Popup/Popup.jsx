import React from "react";

export default function Popup({ onClose, title, children }) {
  return (
    <div className="popup">
      <div className={`${title ? "popup__content" : "popup__content-image"}`}>
        <button
          aria-label="Close modal"
          className="popup__close-template-button"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
