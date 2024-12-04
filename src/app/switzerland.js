import styles from "./page.module.css";
import Navigation from "./nav";

export default function Switzerland(props) {
  return (
    <div className={styles.cityBackground}>
    <Navigation setPage={props.setPage}/>
    <h1 className={styles.heading}>Switzerland</h1>
      <div className={styles.cityGrid}>
        <div 
          onClick={() => {
            props.setSelectedCity("Zurich")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/zurich.jpg" alt="Zurich" className={styles.cityImage} />
          <h3>Zurich</h3>
          <p>Known for its stunning lakeside setting and vibrant cultural scene.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Geneva")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/geneva.jpg" alt="Geneva" className={styles.cityImage} />
          <h3>Geneva</h3>
          <p>Called the capital of peace, famous for its beautiful lakeside views.</p>
        </div>
        <div 
          onClick={() => {
            props.setSelectedCity("Lucerne")
            props.setPage(29)
          }}
          className={styles.cityCard}>
          <img src="/lucerne.jpg" alt="Lucerne" className={styles.cityImage} />
          <h3>Lucerne</h3>
          <p>A town surrounded by mountains and pristine lakes.</p>
        </div>
      </div>
      <footer className = {styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
