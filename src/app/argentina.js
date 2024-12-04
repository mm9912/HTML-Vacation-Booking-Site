import styles from "./page.module.css";
import Navigation from "./nav";

export default function Argentina(props) {
    return (
        <div className={styles.cityBackground}>
         <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Argentina</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Buenos Aires")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/buenosaires.jpg" alt="Buenos Aires" className={styles.cityImage} />
                  <h3>Buenos Aires</h3>
                  <p>Argentina's capital, famous for its European-style architecture and music.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Córdoba")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/cordoba.jpg" alt="Córdoba" className={styles.cityImage} />
                  <h3>Córdoba</h3>
                  <p>Known for its colonial buildings, universities, and vibrant student culture.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Mendoza")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/mendoza.jpg" alt="Mendoza" className={styles.cityImage} />
                  <h3>Mendoza</h3>
                  <p>The center of Argentina's wine industry, surrounded by the Andes Mountains.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>   
    );
}
