import "./contact.css";

const Contact = () => {
  return (
    <section className="ptb-contact">
      <div className="container">
        <span className="suptitle">Réservation</span>
        <h2>Demander un rendez-vous</h2>
      </div>
      <div className="wrapper-booking">
        <div className="booking-form">
          <form method="POST">
            <div className="inputs-container">
              <div className="wrapper-input">
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prenom" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="wrapper-input">
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="mm-dd-yy" />
                <input type="text" placeholder="12:00" />
              </div>
            </div>
            <button className="btn" type="submit">
              Prendre rendez-vous
            </button>
            <p className="res-booking"></p>
          </form>
        </div>
        <div className="booking-working-hours">
          <h3>Horaires d'ouverture</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            rerum cupiditate ad ullam dolor velit et id enim, dolorem nisi nobis
            excepturi doloremque iure porro quia fugit, suscipit omnis eius?
          </p>
          <div className="wrapper-hours">
            <div className="table-hours">
              <p className="days">Lundi - Vendredi</p>
              <p className="days">Samedi</p>
              <p className="days">Dimanche</p>
            </div>
            <div className="table-hours">
              <p className="hours">8AM - 6PM</p>
              <p className="hours">9AM - 5PM</p>
              <p className="hours">9AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
