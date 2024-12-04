import styles from "./page.module.css";
import Navigation from "./nav";

export default function Australia(props) {
    return (
        <div className={styles.cityBackground}>
         <Navigation setPage={props.setPage}/>
            <h1 className={styles.heading}>Australia</h1>
            <div className={styles.cityGrid}>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Sydney")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/sydney.jpg" alt="Sydney" className={styles.cityImage} />
                  <h3>Sydney</h3>
                  <p>Known for its iconic Opera House and stunning harbor views.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Melbourne")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/melbourne.jpg" alt="Melbourne" className={styles.cityImage} />
                  <h3>Melbourne</h3>
                  <p>Famous for its vibrant arts scene, coffee culture, and laneways.</p>
                </div>
                <div 
                  onClick={() => {
                    props.setSelectedCity("Brisbane")
                    props.setPage(29)
                  }}
                  className={styles.cityCard}>
                  <img src="/brisbane.jpg" alt="Brisbane" className={styles.cityImage} />
                  <h3>Brisbane</h3>
                  <p>A sunny city known for its outdoor lifestyle and nearby beaches.</p>
                </div>
            </div>
            <footer className = {styles.footer}>
             <p>© 2024 WanderSphere. All rights reserved.</p>
             </footer>
        </div>
    );
}
