import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const seccionMagica = {
  titulo: "Bienvenido a",
  subtitulo: "El Lugar Más Mágico Del Mundo",
  imagen: "https://tse1.mm.bing.net/th/id/OIP.CToVtKh6l9DFqJCRuxQOBAHaE8?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  botones: [
    { texto: "Obten Tickets", enlace: "#" },
    { texto: "Explorar Hoteles", enlace: "#" }
  ]
};
return (
  <div className="seccion-magica">
    <img src={seccionMagica.imagen} alt="Mickey frente al castillo" className="imagen-principal" />
    <div className="texto-contenedor">
      <h1>{seccionMagica.titulo}</h1>
      <h2>{seccionMagica.subtitulo}</h2>
      <div className="botones">
        {seccionMagica.botones.map((btn, index) => (
          <a key={index} href={btn.enlace} className="boton">{btn.texto}</a>
        ))}
      </div>
    </div>
  </div>
);
}

export default App
