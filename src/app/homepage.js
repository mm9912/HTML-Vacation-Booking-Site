
import styles from "./page.module.css";
import Link from 'next/link';
import Navigation from "./nav";



export default function homepage(props){
  return (
      <div className = {styles.homepageBackground}>

        <Navigation setPage={props.setPage}/>

          <h1 className = {styles.heading}>Travel the World with WanderSphere!</h1>
          <p className = {styles.subheading}>
              Click on a continent to start your adventure!
          </p>

          <div className={styles.continentGrid}>
      {/* Africa */}

      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(5)}>
          
            <img src="/africa.jpg" alt="Africa" className={styles.continentImage} />
            <h3>Africa</h3>
        </a>
      </div>

      {/* Asia */}
      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(6)}>
            <img src="/asia1.png" alt="Asia" className={styles.continentImage} />
            <h3>Asia</h3>
          </a>
      </div>

      {/* Europe */}
      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(7)}>      
            <img src="/europe.png" alt="Europe" className={styles.continentImage} />
            <h3>Europe</h3>
          </a>
      </div>

      {/* North America */}
      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(8)}>
            <img src="/northamerica.png" alt="North America" className={styles.continentImage} />
            <h3>North America</h3>
          </a>
      </div>

      {/* South America */}
      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(9)}>
            <img src="/southamerica.png" alt="South America" className={styles.continentImage} />
            <h3>South America</h3>
          </a>
      </div>

      {/* Oceania */}
      <div className={styles.continentCard}>
        <a onClick={() => props.setPage(10)}>
            <img src="/oceania.jpg" alt="Oceania" className={styles.continentImage} />
            <h3>Oceania</h3>
          </a>
      </div>
    </div>
  

    <footer className = {styles.footer}>
      <p>© 2024 WanderSphere. All rights reserved.</p>
    </footer>
    </div>
  );
}