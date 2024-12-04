import styles from "./page.module.css";
import Navigation from "./nav";
export default function Receipt(props){

    // Placeholder for flight and hotel information

    const { flightDetails, hotelDetails }= props



    console.log("hotel: ", hotelDetails);

  // const flightDetails = {
  //   destination: "Bora Bora",
  //   price: "$1500",
  //   flightDuration: "8 hours",
  //   stopovers: 1,
  //   departureTime: "2024-12-15 10:00 AM"
  // };

  // const hotelDetails = {
  //   hotelName: "Bora Bora Beach Resort",
  //   rating: "4.5/5",
  //   price: "$300 per night",
  //   checkIn: "2024-12-15",
  //   checkOut: "2024-12-20"
  // };

  const handleRestart = () => {
    // Logic to restart the process
    props.setPage(1); // Assuming 1 is the home page or booking page
  };

  return(
    <div className={styles.summaryBackground}>
      <h1 className={styles.heading}>Booking Confirmation</h1>
      <Navigation setPage={props.setPage}/>


      {/* Booking Confirmation Section */}
      <section>
        <div className={styles.introBox}>
          <h2>Congratulations!</h2>
          <p>
          😊 You've successfully booked your vacation with WanderSphere! Thank you for choosing us.
            Below are the details of your booking:
          </p>
        </div>

        {/* Flight Details */}
        <div className={styles.introBox}>
          <h2>Your Flight Details</h2>
          <p>Destination: {flightDetails.destination}</p>
          <p>Price: {flightDetails.price} Per Person</p>
          <p>Flight Duration: {flightDetails.flightDuration}</p>
          <p>Stopovers: {flightDetails.stops}</p>
          <p>Departure Time: {flightDetails.departureTime}</p>
        </div>

        {/* Hotel Details */}
        <div className={styles.introBox}>
          <h2>Your Hotel Details</h2>
          <p>Hotel: {hotelDetails.name}</p>
          <p>Price: {hotelDetails.price}</p>
          <p>Check-In Date: {hotelDetails.checkIn}</p>
          <p>Check-Out Date: {hotelDetails.checkOut}</p>
        </div>

        <div className={styles.introBox}>
          <h2>Total: </h2>
          <strong>{props.totalPrice}</strong>
        </div>

        {/* Important Message */}
        <div className={styles.introBox}>
          <h2>NOTICE⚠️</h2>
          <p>Please keep this receipt with you for security and verification purposes. Ensure you also have required documents and that
            you obey the laws of the country you are in.
          </p>
        </div>
      </section>

      {/* Restart Button */}
      <button className={styles.restartButton} onClick={handleRestart}>
        Want to restart? Click here.
      </button>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}