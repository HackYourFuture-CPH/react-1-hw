import styles from "./page.module.css";
import OurValues from "./OurValues.js";
import OurCrew from "./OurCrew.js";
import OurPartners from "./OurPartners.js";
import OurMission from "./OurMission.js";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <div className="card-title">
            <img className="title-icons" src="/icons/mission.png"></img>
            <h2>Our Mission</h2>
          </div>
          <OurMission />
        </section>
        <section className="card">
          <div className="card-title">
            <img className="title-icons" src="/icons/value.png"></img> <h2>Our Values</h2>
          </div>
          <OurValues />
        </section>
        <section className="card">
          <div className="card-title">
            <img className="title-icons" src="/icons/crew.png"></img>
            <h2>Our Crew</h2>
          </div>
          <OurCrew />
        </section>
        <section className="card">
          <div className="card-title">
            <img className="title-icons" src="/icons/partners.png"></img>
            <h2>Our Partners</h2>
          </div>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
