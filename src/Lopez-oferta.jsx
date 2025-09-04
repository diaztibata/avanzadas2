import ofertaImg from "./assets/disney.jpg"
import './Lopez_ofeta.css'

function Lopez_offers() {
  return (
    <main>
      <section className="offers" aria-labelledby="offers-title">
        <h2 id="offers-title" className="offers__heading">
              Ahorra con Ofertas Especiales
            </h2>
        <div className="offers__inner">
          {/* Texto */}
          <div className="offers__copy">
            

            <h3 className="offers__subheading">Oferta Especial de Ticket</h3>

            <p className="offers__text">
              Obtén 2 días adicionales <strong>GRATIS</strong> en los Parques cuando
              compres un ticket estándar para los Parques Temáticos de 4 días o más,
              con fecha de inicio del 6 de abril al 20 de septiembre de 2025.
            </p>

            <div className="offers__actions">
              <a className="btn btn--primary" href="#" role="button">
                Obtén los Detalles de la Oferta
              </a>

              <a className="link" href="#">
                Ver Todas las Ofertas 
              </a>
            </div>
          </div>

          {/* Imagen */}
          <figure className="offers__media">
           <img src={ofertaImg} alt="Familia disfrutando en Disney" />
          </figure>
        </div>
      </section>
    </main>
  );
}
export default Lopez_offers