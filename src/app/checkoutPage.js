import styles from "./page.module.css";
import Navigation from "./nav";

export default function CheckoutPage(props) {
    return (
        <div className={styles.summaryBackground}>
             <Navigation setPage={props.setPage}/>

        
            <section className={styles.summaryGrid}>
                <div className={styles.leftColumn}>

                
                    <div className={styles.flightBooking}>
                        
                        <h2>Flight To:</h2>
                        <div className={styles.flightItem}>
                            <div className={styles.flightInfo}>
                                <p>Destination: City | Price: $Cost</p>
                                <p>Flight Time Duration: X hours | Stopovers: Number</p>
                                <p>Departure Time: Time</p>
                            </div>
                            <button onClick={() => setSelectedFlight(flight)} className={styles.selectButton}>
                                Select Flight
                            </button>
                        </div>
                        
                    </div>

                  
                    <div className={styles.hotelBooking}>
                        <h2>Hotel Booking:</h2>
                        <div className={styles.hotelItem}>
                            <div className={styles.hotelInfo}>
                                <p>Rating: ⭐⭐⭐⭐ | Price: $Cost per night</p>
                                <p>Check-In: Date | Check-Out: Date</p>
                            </div>
                            <button onClick={() => setSelectedHotel(hotel)} className={styles.selectButton}>
                                Select Hotel
                            </button>
                        </div>
                        {/* Repeat <div className={styles.hotelItem}> as needed for additional hotels */}
                    </div>
                </div>

                <div className={styles.rightColumn}>

                    {/* Payment */}
                    <div className={styles.paymentMethod}>
                        <h2>Payment</h2>
                        <div className={styles.paymentMethodInputs}>
                            <label htmlFor="cardHolder">Cardholder Name</label>
                            <input
                                type="text"
                                id="cardHolder"
                                name="cardHolder"
                                placeholder="Enter your name"
                            />

                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="number"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="Enter your card number"
                            />

                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                placeholder="MM/YY"
                            />

                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="password"
                                id="cvv"
                                name="cvv"
                                placeholder="Enter CVV"
                            />
                        </div>
                    </div>

                    {/* Summary */}
                    <div className={styles.summaryInformation}>
                        <h2>Summary</h2>
                        <p>
                            This section will include final information regarding flights to destination and available residencies.
                        </p>
                    </div>

                    {/* Payment Confirmation */}
                    <div className={styles.confirmationDesicion}>
                        <h2>Total</h2>
                        <p>
                            Your cost of the trip combined with taxes and other fees will be: $__CAD.
                        </p>
                        <button className={styles.confirmButton}>Confirm</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <p>© 2024 WanderSphere. All rights reserved.</p>
            </footer>

        </div>
    );
}