import styles from "./page.module.css";
import Navigation from "./nav";

export default function NewZealand(props) {
    return (
        <div className={styles.cityBackground}>
        <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>New Zealand</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Auckland")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/auckland.jpg" alt="Auckland" className={styles.cityImage} />
                  <h3>Auckland</h3>
                  <p>The largest city, known for its harbors and vibrant culture.</p>
                </div>
                <div
                  onClick={() => {
                    props.setSelectedCity("Wellington")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/wellington.jpg" alt="Wellington" className={styles.cityImage} />
                  <h3>Wellington</h3>
                  <p>The capital city, famous for its film industry and stunning natural scenery.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Christchurch")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/christchurch.jpg" alt="Christchurch" className={styles.cityImage} />
                  <h3>Christchurch</h3>
                  <p>Known as the “Garden City,” offering beautiful parks and botanical gardens.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
            </footer>
        </div>
    );
}
