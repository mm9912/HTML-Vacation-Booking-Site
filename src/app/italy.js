import styles from "./page.module.css";
import Navigation from "./nav";

export default function Italy(props) {
    return (
        <div className={styles.cityBackground}>
         <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Italy</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Rome")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/rome.jpg" alt="Rome" className={styles.cityImage} />
                  <h3>Rome</h3>
                  <p>The capital city known for its ancient ruins, like the Colosseum and Roman Forum.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Milan")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/milan.jpg" alt="Milan" className={styles.cityImage} />
                  <h3>Milan</h3>
                  <p>Known for its fashion, art, and the iconic cathedral, Duomo di Milano.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Florence")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/florence.jpg" alt="Florence" className={styles.cityImage} />
                  <h3>Florence</h3>
                  <p>A city of Renaissance art and architecture.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
