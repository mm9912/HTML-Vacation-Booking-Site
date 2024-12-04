import styles from "./page.module.css";
import Navigation from "./nav";

export default function USA(props) {
  return (
    <div className={styles.cityBackground}>
        <Navigation setPage={props.setPage}/>
        <h1 className={styles.heading}>United States</h1>
        <div className={styles.cityGrid}>
          <div 
            onClick={() => {
              props.setSelectedCity("New York")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/newyork.jpg" alt="New York" className={styles.cityImage} />
            <h3>New York</h3>
            <p>The city that never sleeps, famous for its skyline and diverse culture.</p>
          </div>
          <div 
            onClick={() => {
              props.setSelectedCity("Los Angeles")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/losangeles.jpg" alt="Los Angeles" className={styles.cityImage} />
            <h3>Los Angeles</h3>
            <p>Known for Hollywood, beaches, and its iconic landmarks.</p>
          </div>
          <div 
            onClick={() => {
              props.setSelectedCity("Chicago")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/chicago.jpg" alt="Chicago" className={styles.cityImage} />
            <h3>Chicago</h3>
            <p>Known as the Windy City, famous for its architecture, deep-dish pizza, and cultural institutions.</p>
          </div>
      </div>
      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
