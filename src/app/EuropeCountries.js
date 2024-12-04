import styles from "./page.module.css";
import Navigation from "./nav";

export default function Europe(props){

  return(
    <div className={styles.EuropeBackground}>
    <h1 className={styles.heading}>Europe</h1>
    <Navigation setPage={props.setPage}/>
    <div className={styles.countryDisplay}>
      {/* Italy */}
      <div className={styles.countryCard}>
        <img
          src="/ItalyFlag.png"
          alt="Italy Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Italy | Repubblica Italiana</p>
        <button onClick={() => props.setPage(17)} >Learn More</button>
      </div>

      {/* Sweden */}
      <div className={styles.countryCard}>
        <img
          src="/SwedenFlag.png"
          alt="Sweden Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Sweden | Konungariket Sverige</p>
        <button onClick={() => props.setPage(18)} >Learn More</button>
      </div>

      {/* Switzerland */}
      <div className={styles.countryCard}>
      <img
        src="/SwitzerlandFlag.png"
        alt="Switzerland Flag"
        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
      />
      <p>Switzerland</p>
      <button onClick={() => props.setPage(19)} >Learn More</button>
      </div>
      </div>

      <div className={styles.selectDestinationMessageBox}>
      <h2>Select a destination.</h2>
    </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );

}