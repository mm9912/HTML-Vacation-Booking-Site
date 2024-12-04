import styles from "./page.module.css";
import Navigation from "./nav";


export default function Mexico(props) {
    return (
        <div className={styles.cityBackground}>
          <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Mexico</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Mexico City")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/mexicocity.jpg" alt="Mexico City" className={styles.cityImage} />
                  <h3>Mexico City</h3>
                  <p>The capital city, known for its vibrant culture, history, and delicious cuisine.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Guadalajara")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/guadalajara.jpg" alt="Guadalajara" className={styles.cityImage} />
                  <h3>Guadalajara</h3>
                  <p>Known for its mariachi music, tequila, and historic architecture.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Cancun")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/cancun.jpg" alt="Cancun" className={styles.cityImage} />
                  <h3>Cancun</h3>
                  <p>A popular resort city, famous for its beaches and vibrant nightlife.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
