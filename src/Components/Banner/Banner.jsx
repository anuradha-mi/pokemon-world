import React from "react";
import "./Banner.css";

function Banner({ image, name, description, onClose }) {
  return (
    <div className="banner-overlay" onClick={onClose}>
      <div className="banner-content" onClick={(e) => e.stopPropagation()}>
        <button className="banner-close" onClick={onClose}>
          ✕
        </button>
        <img src={image} alt={name} className="banner-image" />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Banner;