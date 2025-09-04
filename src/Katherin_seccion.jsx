import React from 'react';
import './Katherin_seccion.css';

// Componente Card reutilizable usando función tradicional
function Card ({ title, description, imageSrc, imageAlt, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <a href={link} className="info-link">Más información ›</a>
      <img src={imageSrc} alt={imageAlt} className="product-image" />
    </div>
  );
}

// Componente principal App usando función tradicional
function Katherin_seccion() {
  const products = [
    {
      title: 'AirPods',
      description: 'Descubre todos los modelos de AirPods <br /> y elige tus favoritos.',
      imageSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1591634795000',
      imageAlt: 'AirPods',
      link: '#'
    },
    {
      title: 'AirTag',
      description: 'Pon uno en tus llaves y otro en tu mochila.<br />Si las pierdes, simplemente usa la app Encontrar.',
      imageSrc: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-gallery3-202409?wid=4056&hei=2400&fmt=jpeg&qlt=90&.v=dmdnWEhnUEJqTk03THhFMW1EbTFSN3FHM1l0enc5azZrZmI2MTJKVmxtRXRjTTN6RnJYTSs4OTJjQVVCU05kcHJEWjZxSXdMVHNGTzJsbGNhdmdEOXEwem1UOXp3S0tMZ2dScUx2MVduMFE',
      imageAlt: 'AirTag',
      link: '#'
    }
  ];

  return (
    <div className="app">
      <h1>Consiente a tu iPhone.</h1>
      <div className="cards-container">
        {products.map(function(product, index) {
          return <Card key={index} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Katherin_seccion;
