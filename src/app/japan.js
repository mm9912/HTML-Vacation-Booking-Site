import styles from "./page.module.css";
import Navigation from "./nav";

export default function Japan(props) {
    return (
        <div className={styles.cityBackground}>
          <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Japan</h1>
            <div className={styles.cityGrid}>
                <div 
                 onClick={() => {
                    props.setSelectedCity("Tokyo")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/tokyo.jpg" alt="Tokyo" className={styles.cityImage} />
                  <h3>Tokyo</h3>
                  <p>The capital city blending tradition and modernity.</p>
                </div>
                <div 
                 onClick={() => {
                    props.setSelectedCity("Kyoto")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/kyoto.jpg" alt="Kyoto" className={styles.cityImage} />
                  <h3>Kyoto</h3>
                  <p>Known for its classical Buddhist temples and gardens.</p>
                </div>
                  <div 
                 onClick={() => {
                    props.setSelectedCity("Osaka")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/osaka.jpg" alt="Osaka" className={styles.cityImage} />
                  <h3>Osaka</h3>
                  <p>Famous for its modern architecture and street food scene.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
