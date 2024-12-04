import styles from "./page.module.css";
import Navigation from "./nav";

export default function Seychelles(props) {
    return (
        <div className={styles.cityBackground}>
           <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Seychelles</h1>
            <div className={styles.cityGrid}>
                <div 
                    onClick={() => {
                        props.setSelectedCity("Mahé")
                        props.setPage(29)
                      }}
                    className={styles.cityCard}>
                    <img src="/mahe.jpg" alt="Mahé" className={styles.cityImage} />
                    <h3>Mahé</h3>
                    <p>The largest island, home to Victoria and stunning beaches.</p>
                </div>
                <div 
                    onClick={() => {
                        props.setSelectedCity("Praslin")
                        props.setPage(29)
                      }}
                    className={styles.cityCard}>
                    <img src="/praslin.jpg" alt="Praslin" className={styles.cityImage} />
                    <h3>Praslin</h3>
                    <p>Home to one of the most beautiful beaches in the world, Anse Source d'Argent.</p>
                </div>
                <div 
                   onClick={() => {
                    props.setSelectedCity("La Digue")
                    props.setPage(29)
                  }}
                    className={styles.cityCard}>
                    <img src="/laDigue.jpg" alt="La Digue" className={styles.cityImage} />
                    <h3>La Digue</h3>
                    <p>A peaceful island with pink granite rock formations.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
