import styles from "./page.module.css";
import Navigation from "./nav";


export default function Canada(props) {
    return (
        <div className={styles.cityBackground}>
         <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Canada</h1>
            <div className={styles.cityGrid}>
                <div
                  onClick={() => {
                    props.setSelectedCity("Toronto")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/toronto.jpg" alt="Toronto" className={styles.cityImage} />
                  <h3>Toronto</h3>
                  <p>The largest city in Canada, known for its iconic CN Tower and multiculturalism.</p>
                </div>
                <div 
                
                onClick={() => {
                  props.setSelectedCity("Vancouver")
                  props.setPage(29)
                }}
                  className={styles.cityCard}>
                  <img src="/vancouver.jpg" alt="Vancouver" className={styles.cityImage} />
                  <h3>Vancouver</h3>
                  <p>A coastal city famous for its scenic beauty and outdoor activities.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Montreal")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/montreal.jpg" alt="Montreal" className={styles.cityImage} />
                  <h3>Montreal</h3>
                  <p>Known for its French heritage, festivals, and vibrant arts scene.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
