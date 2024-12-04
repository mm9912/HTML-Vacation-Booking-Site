import styles from "./page.module.css";
import Navigation from "./nav";

export default function SouthAfrica(props) {

    return (
        <div className = {styles.cityBackground}>
          <Navigation setPage={props.setPage}/>

          <h1 className = {styles.heading}>South Africa</h1>

          <div className = {styles.cityGrid}>
            <div 
              onClick={() => {
                props.setSelectedCity("Cape Town")
                props.setPage(29)
              }}
              className = {styles.cityCard}>
              <img src = "/capeTown.jpg" alt = "Cape Town" className = {styles.cityImage}/>
              <h3>Cape Town</h3>
              <p>Famous city in South Africa known for its natural beauty and rich history</p>
            </div>

            <div 
              onClick={() => {
                props.setSelectedCity("Johannesburg")
                props.setPage(29)
              }}
              className={styles.cityCard}>
              <img src="/johannesburg.jpg" alt="Johannesburg" className={styles.cityImage} />
              <h3>Johannesburg</h3>
              <p>A city known as the financial capital and was the former residence of Nelson Mandela!</p>
            </div>

            <div 
              onClick={() => {
                props.setSelectedCity("Durban")
                props.setPage(29)
              }}
              className={styles.cityCard}>
              <img src="/durban.jpg" alt="Durban" className={styles.cityImage} />
              <h3>Durban</h3>
              <p>Known for its pristine beaches!</p>
            </div>

          </div>

          <footer className = {styles.footer}>
            <p>© 2024 WanderSphere. All rights reserved.</p>
          </footer>

        </div>

    );
}

