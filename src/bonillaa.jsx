import './bonillaa.css';

function BonillaA() {
  const data = {
    title: "Catch Pokémon",
    subtitle: "Find your buddy!",
    description:
      "Catching Pokémon is one way to collect them! You can also collect them by hatching Eggs and trading with other Trainers.",
    image1: "https://lh3.googleusercontent.com/_hpVC_FfXKyiyQyAScEHT19zmprSPm6N_MueVEAod5KJNfDvl3LvZntgsY2Q6dscc2y-CSr8Tq5EOVgoFrli6EhyOWt_kTRKqh2S=e365-pa-nu-w1920-rw"
  };

  return (
    <section className="buddy-section">
      <div className="text-content">
        <h2>{data.title}</h2>
        <h3>{data.subtitle}</h3>
        <p>{data.description}</p>
      </div>
      <div className="image-content">
        <img src={data.image1} alt="Pokemon AR" />
      </div>
    </section>
  );
}

export default BonillaA;
