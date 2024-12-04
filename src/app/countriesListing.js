import styles from "./page.module.css";
import Navigation from "./nav";

export default function CountriesList(props) {

    return (
        <div className={styles.countriesListBackground}>
            <h1 className={styles.heading}>Countries</h1>

            <Navigation setPage={props.setPage} />

            <div className={styles.selectDestinationMessageBox}>
                <h2>Select a destination.</h2>
            </div>

            <div className={styles.countryDisplay}>

                {/* Argentina */}
                <div className={styles.countryCard}>
                    <img
                        src="/ArgentinaFlag.png"
                        alt="Argentina Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Argentina | República Argentina</p>
                    <button onClick={() => props.setPage(23)} >Learn More</button>
                </div>

                {/* Australia */}
                <div className={styles.countryCard}>
                    <img
                        src="/AustraliaFlag.png"
                        alt="Australia Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Australia</p>
                    <button onClick={() => props.setPage(26)} >Learn More</button>
                </div>

                {/* Brazil */}
                <div className={styles.countryCard}>
                    <img
                        src="/BrazilFlag.png"
                        alt="Brazil Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Brazil | República Federativa do Brasil</p>
                    <button onClick={() => props.setPage(24)} >Learn More</button>
                </div>

                {/* Canada */}
                <div className={styles.countryCard}>
                    <img
                        src="/CanadaFlag.png"
                        alt="Canada Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Canada</p>
                    <button onClick={() => props.setPage(20)} >Learn More</button>
                </div>

                {/* Chile */}
                <div className={styles.countryCard}>
                    <img
                        src="/ChileFlag.png"
                        alt="Chile Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Chile | República de Chile</p>
                    <button onClick={() => props.setPage(25)} >Learn More</button>
                </div>

                {/* Egypt */}
                <div className={styles.countryCard}>
                    <img
                        src="/EgyptFlag.png"
                        alt="Egypt Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Egypt | جمهورية مصر العربية</p>
                    <button onClick={() => props.setPage(11)} >Learn More</button>
                </div>

                {/* French Polynesia */}
                <div className={styles.countryCard}>
                    <img
                        src="/FrenchPolynesiaFlag.png"
                        alt="French Polynesia Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>French Polynesia | Polynésie Française</p>
                    <button onClick={() => props.setPage(27)} >Learn More</button>
                </div>

                {/* Italy */}
                <div className={styles.countryCard}>
                    <img
                        src="/ItalyFlag.png"
                        alt="Italy Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Italy | Repubblica Italiana</p>
                    <button onClick={() => props.setPage(17)} >Learn More</button>
                </div>

                {/* Japan */}
                <div className={styles.countryCard}>
                    <img
                        src="/JapanFlag.png"
                        alt="Japan Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Japan | 日本</p>
                    <button onClick={() => props.setPage(14)} >Learn More</button>
                </div>

                {/* South Korea */}
                <div className={styles.countryCard}>
                    <img
                        src="/SouthKoreaFlag.png"
                        alt="South Korea Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>South Korea | 대한민국</p>
                    <button onClick={() => props.setPage(15)} >Learn More</button>
                </div>

                {/* Mexico */}
                <div className={styles.countryCard}>
                    <img
                        src="/MexicoFlag.png"
                        alt="Mexico Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Mexico | Estados Unidos Mexicanos</p>
                    <button onClick={() => props.setPage(21)} >Learn More</button>
                </div>

                {/* New Zealand */}
                <div className={styles.countryCard}>
                    <img
                        src="/NewZealandFlag.png"
                        alt="New Zealand Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>New Zealand | Aotearoa</p>
                    <button onClick={() => props.setPage(28)} >Learn More</button>
                </div>

                {/* Seychelles */}
                <div className={styles.countryCard}>
                    <img
                        src="/SeychellesFlag.png"
                        alt="Seychelles Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Seychelles | République des Seychelles, Repiblik Sesel</p>
                    <button onClick={() => props.setPage(12)} > Learn More</button>
                </div>

                {/* South Africa */}
                <div className={styles.countryCard}>
                    <img
                        src="/SouthAfricaFlag.png"
                        alt="South Africa Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>South Africa</p>
                    <button onClick={() => props.setPage(13)} >Learn More</button>
                </div>

                {/* Sweden */}
                <div className={styles.countryCard}>
                    <img
                        src="/SwedenFlag.png"
                        alt="Sweden Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Sweden | Konungariket Sverige</p>
                    <button onClick={() => props.setPage(18)} >Learn More</button>
                </div>

                {/* Switzerland */}
                <div className={styles.countryCard}>
                    <img
                        src="/SwitzerlandFlag.png"
                        alt="Switzerland Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Switzerland</p>
                    <button onClick={() => props.setPage(19)} >Learn More</button>
                </div>

                {/* Taiwan */}
                <div className={styles.countryCard}>
                    <img
                        src="/TaiwanFlag.png"
                        alt="Taiwan Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>Taiwan | 中華民國</p>
                    <button onClick={() => props.setPage(16)} >Learn More</button>
                </div>

                {/* United States of America */}
                <div className={styles.countryCard}>
                    <img
                        src="/UnitedStatesFlag.png"
                        alt="United States Flag"
                        style={{ width: "100%", maxWidth: "200px", height: "auto" }}
                    />
                    <p>United States of America</p>
                    <button onClick={() => props.setPage(22)} >Learn More</button>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>© 2024 WanderSphere. All rights reserved.</p>
            </footer>
        </div>
    );
}