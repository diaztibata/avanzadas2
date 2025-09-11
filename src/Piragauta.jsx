// src/Piragauta.jsx
import "./Piragauta.css";

// Importamos las imágenes con sus nombres exactos
import cameraImg from "./assets/camera__f389jji00bee_large.jpg";
import chipImg from "./assets/chip__6hy1uruuluaa_large.jpg";
import innovationImg from "./assets/innovation__ce13717o3vhy_large.jpg";

function Piragauta() {
  const items = [
    {
      titulo: "Apple Intelligence",
      texto: "Tú a la infinita potencia.¹",
      img: innovationImg,
      bg: "#000",
      color: "#fff"
    },
    {
      titulo: "Cámaras de última generación",
      texto: "Haz fotos soñadas y videos de película.",
      img: cameraImg,
      bg: "#2563eb",
      color: "#fff"
    },
    {
      titulo: "Chip y batería",
      texto: "Velocidad para rato.",
      img: chipImg,
      bg: "#1c1917",
      color: "#fff"
    }
  ];

  return (
    <section className="piragauta-section">
      <h2 className="piragauta-title">Descubre el iPhone.</h2>
      <div className="piragauta-grid">
        {items.map((it, i) => (
          <div
            key={i}
            className="piragauta-card"
            style={{ backgroundColor: it.bg, color: it.color }}
          >
            <div className="piragauta-text">
              <h3>{it.titulo}</h3>
              <p>{it.texto}</p>
            </div>
            <img src={it.img} alt={it.titulo} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Piragauta;
