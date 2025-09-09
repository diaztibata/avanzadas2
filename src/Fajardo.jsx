// src/Fajardo.jsx
import { useState } from "react";
import "./Fajardo.css";

// Objeto con tu información (array de items)
const items = [
  { label: "iPhone 16 Pro", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg", href: "#" },
  { label: "iPhone 16", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg", href: "#" },
  { label: "iPhone 16e", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16e_light__dcdfirk5ikk2_large.svg", href: "#" },
  { label: "iPhone 15", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg", href: "#" },
  { label: "Comparar", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_16_pro_light__sh8e76empwyq_large.svg", href: "#" },
  { label: "AirPods", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/airpods_light__cd9exnztczjm_large.svg", href: "#" },
  { label: "AirTag", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/airtag_light__c19z9f5le0ia_large.svg", href: "#" },
  { label: "iOS 26", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/iphone_ios_light__b0jhieo01t0i_large.svg", href: "#" },
  { label: "Comprar iPhone", img: "https://www.apple.com/v/iphone/home/cb/images/chapternav/shop_iphone_light__e4dlk2n6h26a_large.svg", href: "#" },
];

function Fajardo() {
  // Estado para manejar el nombre
  const [nombre] = useState("Andrey Fajardo");

  // Estado para manejar el ítem activo
  const [activo, setActivo] = useState("iPhone 16 Pro");

  return (
    <section className="fajardo-section">
      <h2></h2>
      <nav className="fajardo-subnav" aria-label="Subnavegación iPhone">
        <ul className="fajardo-list">
          {items.map((it, i) => (
            <li
              className={`fajardo-item ${activo === it.label ? "activo" : ""}`}
              key={i}
              onClick={() => setActivo(it.label)}
            >
              <a className="fajardo-link" href={it.href}>
                <div className="fajardo-icon">
                  {it.img ? (
                    <img src={it.img} alt={it.label} />
                  ) : (
                    <span className="fajardo-placeholder">●</span>
                  )}
                </div>
                <span className="fajardo-label">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Fajardo;
