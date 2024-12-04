import styles from "./page.module.css";
import Navigation from "./nav";

export default function Chile(props) {
  return (
    <div className={styles.cityBackground}>
      <Navigation setPage={props.setPage}/>
      <h1 className={styles.heading}>Chile</h1>
      <div className={styles.cityGrid}>
        <div 
          onClick={() => {
            props.setSelectedCity("Santiago")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/santiago.jpg" alt="Santiago" className={styles.cityImage} />
          <h3>Santiago</h3>
          <p>The capital, known for its stunning mountain backdrop and vibrant culture.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Valparaíso")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/valparaiso.jpg" alt="Valparaíso" className={styles.cityImage} />
          <h3>Valparaíso</h3>
          <p>A coastal city famous for its colorful hillside houses and artistic vibe.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Puerto Montt")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/puertomontt.jpg" alt="Puerto Montt" className={styles.cityImage} />
          <h3>Puerto Montt</h3>
          <p>Known for its seafood, and beautiful lakes.</p>
        </div>
      </div>
      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
