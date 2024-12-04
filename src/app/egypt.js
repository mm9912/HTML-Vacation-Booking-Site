import styles from "./page.module.css";
import Navigation from "./nav";

export default function Egypt(props) {
    return (
        <div className={styles.cityBackground}>
          <Navigation setPage={props.setPage}/>

            <h1 className={styles.heading}>Egypt</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Cario")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/cairo.jpg" alt="Cairo" className={styles.cityImage} />
                  <h3>Cairo</h3>
                  <p>Home to the famous Pyramids of Giza.</p>
                </div>
                <div 
                 onClick={() => {
                  props.setSelectedCity("Alexandria")
                  props.setPage(29)
                }}
                  className={styles.cityCard}>
                  <img src="/alexandria.jpg" alt="Alexandria" className={styles.cityImage} />
                  <h3>Alexandria</h3>
                  <p>Known for its Mediterranean coastline and ancient history.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Luxor")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/luxor.jpg" alt="Luxor" className={styles.cityImage} />
                  <h3>Luxor</h3>
                  <p>Known for its oldest and most ancient Egyption sites.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}