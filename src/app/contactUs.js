import styles from "./page.module.css";
import Navigation from "./nav";

export default function ContactUs(props){

    return(
        <div className={styles.aboutUsBackground}>
        <h1 className={styles.heading}>Contact Information</h1>
          <Navigation setPage={props.setPage}/>
    
          <section>
              <div className={styles.introBox}>
                <h2>Headquarters</h2>
                  <p>WanderSphere Inc. 123 Maple Crescent, Toronto, ON, M4B 1A6, Canada</p>
              </div>
    
              <div className={styles.introBox}>
                <h2>Phone Numbers</h2>
                <p>Customer Service: (416) 555-1234</p>
                <p>Toll-Free: 1-800-555-6789</p>
              </div>
    
              <div className={styles.introBox}>
                <h2>Email Addresses</h2>
                <p>General Inquiries: info@wandersphere.ca</p>
                <p>Customer Support: support@wandersphere.ca</p>
                <p>Partnerships: partnerships@wandersphere.ca</p>
              </div>
    
              <div className={styles.introBox}>
                <h2>Social Media</h2>
                <p>LinkedIn: linkedin.com/company/WanderSphere</p>
                <p>X/Twitter: x.com/WanderSphere</p>
                <p>Instagram: instagram.com/WanderSphere</p>
                <p>TikTok: tiktok.com/WanderSphere</p>
                <p>Facebook: facebook.com/WanderSphere</p>
              </div>
    
              <div className={styles.introBox}>
                <h2>Office Hours</h2>
                <p>Monday to Friday: 9:00 AM - 6:00 PM (EST)</p>
                <p>Saturday: 10:00 AM - 4:00 PM (EST) | Closed on Sunday</p>
                <p>Holidays may impact operations.</p>
              </div>
          </section>
    
          {/* Footer Section */}
          <footer className={styles.footer}>
            <p>© 2024 WanderSphere. All rights reserved.</p>
          </footer>
    
      </div>
    
      );
    }