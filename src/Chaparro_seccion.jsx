import React from "react";
import "./App.css";

function Chaparro_seccion() {
  const sectionData = {
    title: "Planifica Tus Vacaciones en Walt Disney World",
    buttons: [
      { text: "Obtén Tickets y Pases", link: "#", style: "primary" },
      { text: "Reservar un Hotel Resort", link: "#", style: "secondary" }
    ],
    background: {
      left: "/images/castillo.png",   // ejemplo, deberías reemplazar con tu imagen
      right: "/images/iconos.png"
    }
  };

  return (
    <div className="section-container">
      {/* Fondo con imágenes decorativas */}
      <div className="bg-left">
        <img src={sectionData.background.left} alt="Decoración izquierda" />
      </div>
      <div className="bg-right">
        <img src={sectionData.background.right} alt="Decoración derecha" />
      </div>

      {/* Contenido central */}
      <div className="content-box">
        <h2>{sectionData.title}</h2>
        <div className="buttons">
          {sectionData.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className={btn.style === "primary" ? "btn-primary" : "btn-secondary"}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chaparro_seccion;