import styles from "./page.module.css";
import Navigation from "./nav";


export default function FrenchPolynesia(props) {
    return (
        <div className={styles.cityBackground}>
          <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>French Polynesia</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Papeete")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/papeete.jpg" alt="Papeete" className={styles.cityImage} />
                  <h3>Papeete</h3>
                  <p>The capital city, known for its markets and tropical vibe.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Moorea")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/moorea.jpg" alt="Moorea" className={styles.cityImage} />
                  <h3>Moorea</h3>
                  <p>A picturesque island known for its lagoons and volcanic mountains.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Bora Bora")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/bora-bora.jpg" alt="Bora Bora" className={styles.cityImage} />
                  <h3>Bora Bora</h3>
                  <p>Famous for its crystal-clear lagoons, coral reefs, and overwater bungalows.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
