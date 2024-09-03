import styles from "@/components/destination/destination.module.css";
function PlanetCard({ isPlanetSelected, onAddOrRemovePlanet }) {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src="/destination/image-europa.png"
        alt=""
      />
      <div className={styles.planetDescription}>
        <h2>EUROPA {isPlanetSelected ? "- SELECTED" : ""}</h2>
        <p>Lorem ipsum...</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet("Pluto", 0)}
      >
        {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}

export default PlanetCard;
