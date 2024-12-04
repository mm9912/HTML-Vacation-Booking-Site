import styles from "./page.module.css";
import Navigation from "./nav";

export default function Africa(props){

  return(
    <div className={styles.AfricaBackground}>
      <h1 className={styles.heading}>Africa</h1>

      <Navigation setPage={props.setPage}/>

      <div className={styles.countryDisplay}>

        <div className={styles.countryCard}>
          <img
            src="/EgyptFlag.png"
            alt="Egypt Flag"
            style={{ width: "100%", maxWidth: "200px", height: "auto" }}
          />
          <p>Egypt | جمهورية مصر العربية</p>
          <button onClick={() => props.setPage(11)} >Learn More</button>

        </div>

        <div className={styles.countryCard}>

          <img
            src="/SeychellesFlag.png"
            alt="Seychelles Flag"
            style={{ width: "100%", maxWidth: "200px", height: "auto" }}
          />
          <p>Seychelles | République des Seychelles, Repiblik Sesel</p>
          <button onClick={() => props.setPage(12)} > Learn More</button>

        </div>

        <div className={styles.countryCard}>

          <img
            src="/SouthAfricaFlag.png"
            alt="South Africa Flag"
            style={{ width: "100%", maxWidth: "200px", height: "auto" }}
          />
          <p>South Africa</p>
          <button onClick={() => props.setPage(13)} >Learn More</button>
        </div>

      </div>

      <div className={styles.selectDestinationMessageBox}>
        <h2>Select a destination.</h2>
      </div>

      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );

}