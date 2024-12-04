import styles from "./page.module.css";
import Navigation from "./nav";

export default function Oceania(props){

  return(
    <div className={styles.OceaniaBackground}>
      <h1 className={styles.heading}>Oceania</h1>
      <Navigation setPage={props.setPage}/>

        <div className={styles.countryDisplay}>
      {/* Australia */}
      <div className={styles.countryCard}>
        <img
          src="/AustraliaFlag.png"
          alt="Australia Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>Australia</p>
        <button onClick={() => props.setPage(26)} >Learn More</button>
      </div>

      {/* French Polynesia */}
      <div className={styles.countryCard}>
        <img
          src="/FrenchPolynesiaFlag.png"
          alt="French Polynesia Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>French Polynesia | Polynésie Française</p>
        <button onClick={() => props.setPage(27)} >Learn More</button>
      </div>

      {/* New Zealand */}
      <div className={styles.countryCard}>
        <img
          src="/NewZealandFlag.png"
          alt="New Zealand Flag"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />
        <p>New Zealand | Aotearoa</p>
        <button onClick={() => props.setPage(28)} >Learn More</button>
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