import styles from "./page.module.css";
import Navigation from "./nav";

export default function Brazil(props) {
  return (
    <div className={styles.cityBackground}>
      <Navigation setPage={props.setPage}/>
        <h1 className={styles.heading}>Brazil</h1>
        <div className={styles.cityGrid}>
          <div 
            onClick={() => {
              props.setSelectedCity("Rio de Janeiro")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/rio.jpg" alt="Rio de Janeiro" className={styles.cityImage} />
            <h3>Rio de Janeiro</h3>
            <p>Famous for its beaches, Carnival, and the iconic Christ the Redeemer statue.</p>
          </div>
          <div 
            onClick={() => {
              props.setSelectedCity("São Paulo")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/sao-paulo.jpg" alt="São Paulo" className={styles.cityImage} />
            <h3>São Paulo</h3>
            <p>Brazil's financial powerhouse, known for its art, food, and culture.</p>
          </div>
          <div 
            onClick={() => {
              props.setSelectedCity("Salvador")
              props.setPage(29)
            }}
            className={styles.cityCard}>
            <img src="/salvador.jpg" alt="Salvador" className={styles.cityImage} />
            <h3>Salvador</h3>
            <p>Known for its colonial architecture, and vibrant festivals.</p>
          </div>
        </div>
        <footer className = {styles.footer}>
          <p>© 2024 WanderSphere. All rights reserved.</p>
        </footer>
    </div>
  );
}
