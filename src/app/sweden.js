import styles from "./page.module.css";
import Navigation from "./nav";

export default function Sweden(props) {
  return (
    <div className={styles.cityBackground}>
      <Navigation setPage={props.setPage}/>
      <h1 className={styles.heading}>Sweden</h1>
      <div className={styles.cityGrid}>
        <div 
          onClick={() => {
            props.setSelectedCity("Stockholm")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/stockholm.jpg" alt="Stockholm" className={styles.cityImage} />
          <h3>Stockholm</h3>
          <p>The capital city known for its beautiful architecture and modern design.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Gothenburg")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/gothenburg.jpg" alt="Gothenburg" className={styles.cityImage} />
          <h3>Gothenburg</h3>
          <p>Second largest city in Sweden, famous for its lush green parks and vibrant cultural life.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Malmo")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/malmo.jpg" alt="Malmo" className={styles.cityImage} />
          <h3>Malmo</h3>
          <p>A modern city known for its sustainable architecture and multicultural atmosphere.</p>
        </div>
      </div>
      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
    );
}
