import styles from "@/components/destination/destination.module.css";
function PlanetCard({
  isPlanetSelected,
  onAddOrRemovePlanet,
  planetName,
  description,
  thumbnail,
  index,
}) {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt="" />
      <div className={styles.planetDescription}>
        <h2>
          {planetName} {isPlanetSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet(planetName, index)}
      >
        {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}

export default PlanetCard;
