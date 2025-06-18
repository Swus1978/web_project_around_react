import React from "react";

export default function ImageViewer({ imageSrc, title, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          ×
        </span>
        <img src={imageSrc} alt={title} style={{ width: "100%" }} />
        <p>{title}</p>
      </div>
    </div>
  );
}
