"use client";


import styles from "./page.module.css";
import{ useState, useEffect} from 'react';
import Navigation from "./nav";



export default function DestinationSelection(props){

    const [origin, setOrigin] = useState("");
    const [date, setDate] = useState("");
    const [people, setPeople] = useState(1);
    const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState([]);
    const [savedSelection, setSavedSelection] = useState(null);
    const [limit, setLimit] = useState(3);

    const cityToIATACode = {
        'Cairo': 'CAI',
        'Alexandria': 'HBE',
        'Luxor': 'LXR',
        'Mahé': 'SEZ',
        'Praslin':'PRI',
		'La Digue' : 'PRI',
        'Cape Town': 'CPT',
		'Johannesburg' :'JNB',
		'Durban': 'DUR',
        'Tokyo': 'HND',
		'Kyoto': 'KIX',
		'Osaka': 'ITM',
        'Seoul': 'ICN',
		'Busan': 'PUS',
		'Incheon': 'ICN',
        'Taipei': 'TPE',
		'Kaoshsiung': 'KHH',
		'Taichung': 'RMQ',
        'Rome':'FCO',
		'Milan': 'MXP',
        'Florence': 'FLR',
        'Stockholm': 'ARN',
        'Gothenburg': 'GOT',
        'Malmo': 'MMX',
        'Zurich': 'ZRH',
        'Geneva': 'GVA',
        'Lucerne': 'ZRH',
        'Toronto': 'YYZ',
        'Vancouver': 'YVR',
        'Montreal': 'YUL',
        'Mexico City': 'MEX',
        'Guadalajara': 'GDL',
        'Cancun': 'CUN',
        'New York': 'EWR',
        'Los Angeles': 'LAX',
        'Chicago': 'ORD',
        'Buenos Aires': 'EZE',
        'Córdoba': 'COR',
        'Mendoza': 'MDZ',
        'Rio de Janeiro': 'GIG',
        'São Paulo': 'GRU',
        'Salvador': 'SSA',
        'Santiago': 'SCL',
        'Valparaíso': 'SCL',
        'Puerto Montt': 'PMC',
        'Sydney': 'SYD',
        'Melbourne': 'MEL',
        'Brisbane': 'BNE',
        'Papeete': 'PPT',
        'Moorea': 'MAU',
        'Bora Bora': 'BOB',
        'Auckland': 'AKL',
        'Wellington': 'WLG',
        'Christchurch': 'CHC'
    }

    function getIATAcode(cityName){
        const iataCode = cityToIATACode[cityName];
        if(iataCode){
            return iataCode;
        }else{
            console.log("Not found");
            return null;
        }
    }

    const originIATA = getIATAcode(origin)
    const destination = getIATAcode(props.city);
    console.log(destination)

    const searchFlights = async () => {
        const flightResponse = await fetch('./api/searchFlight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                origin: originIATA,
                destination: destination,
                departureDate: date,

            }),
        });
        
       
    const flightData = await flightResponse.json();
    
 

    if (Array.isArray(flightData.flights) ) {
        setFlights(flightData.flights);
    } else {
        console.error("Flights data is not an array:", flightData.flights);
    }
    
    fetchHotels();
   
    // console.log(flightData);
};




  // Handle saving the user's selections
  const handleSaveSelection = async () => {
    
    try {
      const response = await fetch("./api/saveBookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            origin: selectedFlight.origin,
            destination: selectedFlight.destination,
            departureTime: selectedFlight.departureTime,
            flightprice: selectedFlight.price*people ,
            duration: selectedFlight.flightTime,
            stops: selectedFlight.stops,
            hotelName: selectedHotel.hotelName,
            hotelPrice: selectedHotel.price,
            checkIn: selectedHotel.checkIn,
            checkOut: selectedHotel.checkOut,
            totalPrice: parseFloat(selectedFlight.price) + parseFloat(selectedHotel.price) * people,
        })
      });

      if (response.ok) {
        alert("Selection saved successfully!");
      } else {
        console.error("Failed to save selection.");
      }
    } catch (error) {
      console.error("Error saving selection:", error);
    }
  };

  // Fetch saved user selection
  const fetchSavedSelection = async () => {
    try {
      const response = await fetch("./api/saveBookings");
      if (response.ok) {
        const data = await response.json();
        setSavedSelection(data);
      }
    } catch (error) {
      console.error("Error fetching saved selection:", error);
    }
  };
  
  const fetchHotels = async () =>{
    try {
        const response = await fetch("/api/fetchHotels");
        if (response.ok) {
          const data = await response.json();
          setHotels(data); 
        } else {
          console.error("Failed to fetch hotels");
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
  };

  // Fetch the saved selection when the component loads
//   useEffect(() => {
//     fetchSavedSelection();
//   }, []);
    useEffect(() => {
        console.log("Updated selectedFlight:", selectedFlight);
    }, [selectedFlight]);

  const hotelsToDisplay = hotels.slice(0,limit);
   
  
    return(
        <div className={styles.summaryBackground}>
            <Navigation setPage={props.setPage}/>

            <section className={styles.summaryGrid}>
                <div className={styles.leftColumn}>
            
                    <div className={styles.flightBooking}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    placeholder="Origin"
                                    value={origin}
                                    onChange={(e) => setOrigin(e.target.value)} 
                                    className={styles.inputField}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                    <input
                                        type="number"
                                        placeholder="people"
                                        value = {people}
                                        onChange={(e) => setPeople(Number(e.target.value))} 
                                        className={styles.inputField}
                                    />   
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} 
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <button type="submit" onClick={searchFlights} className={styles.submitButton}>
                                    Search
                                </button>
                            </div>
                        </form>
        
                        <h2>Flight to: {props.city}</h2>
                        <div className={styles.flightItem}>
                            <div className={styles.flightInfo}>    
                                <ul>
                                    {flights.slice(0,3).map((flight, index) => (
                                        <li key={index}>
                                        <p>Origin: {flight.origin} | Destination: {flight.destination}</p>
                                        <p>Flight Time: {flight.flightTime} | Departue Time: {flight.departureTime}</p>
                                        <p>Price: {flight.price} | Stops : {flight.stops}</p>
                                        <button
                                            onClick={() =>  setSelectedFlight(flight)}
                                            className={styles.selectButton}
                                            >
                                            Select Flight
                                        </button>
                                        </li>
                                    ))} 
                                </ul>
                            </div>
                        </div>
                        {/* <p>
                            Flight information goes here.
                        </p> */}

                    </div>

                    {/* Hotel Booking */}
                    <div className={styles.hotelBooking}>
                        <h2>Hotels At: {props.city}</h2>
                        <div className={styles.flightItem}>
                            <div className={styles.flightInfo}>   
                                <ul>
                                    {hotelsToDisplay.map((hotel, index) => (
                                        <li key={index}>
                                        <p>Name: {hotel.hotelName} | Price: {hotel.price}</p>
                                        <p>Check in: {hotel.checkIn} | Check out: {hotel.checkOut}</p>
                                        
                                        <button
                                            className={styles.selectButton}
                                            onClick={() => {
                                                setSelectedHotel({
                                                    name: hotel.hotelName,
                                                    price: hotel.price,
                                                    checkIn: hotel.checkIn,
                                                    checkOut: hotel.checkOut,
                                                });
                                                
                                            }}
                                            >
                                            Select Hotel
                                        </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* <p>
                            Hotel information goes here.
                        </p> */}
                    
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
                        <div className={styles.flightItem}>

                            <div className={styles.flightInfo}>   

                                <h2>Summary</h2>
                                <h3>Selected Flight:</h3>
                                {selectedFlight ? (
                                    <div>
                                    <p>Origin: {selectedFlight.origin}</p>
                                    <p>Destination: {selectedFlight.destination}</p>
                                    <p>Price: {selectedFlight.price * people} CAD</p>
                                    </div>
                                ) : (
                                    <p>No flight selected.</p>
                                )}

                                <h3>Selected Hotel:</h3>
                                {selectedHotel ? (
                                    <div>
                                    <p>Name: {selectedHotel.name}</p>
                                    <p>Price: {selectedHotel.price} CAD</p>
                                    </div>
                                ) : (
                                    <p>No hotel selected.</p>
                                )}

        
                            </div>
                        </div>
                    </div>

                    {/* Payment Confirmation */}
                    <div className={styles.confirmationDesicion}>
                        <div className={styles.flightItem}>
                            <div className={styles.flightInfo}>
                                <h2>Total</h2>

                                <p>Your cost of the trip combined with taxes and other fees will be: 

                                </p>
                                    {selectedFlight && selectedHotel 
                                    ? <strong>{`${parseFloat(selectedFlight.price)*people + parseFloat(selectedHotel.price)}   CAD`}</strong>
                                    : "Select a flight and hotel to see the total."}


                
                                <button className={styles.confirmButton} 
                                onClick={() => {
                                    props.setPage(30)
                                    props.setFlightDetails(selectedFlight)
                                    props.setHotelDetails(selectedHotel)
                                    props.setTotalPrice(parseFloat(selectedFlight.price)*people + parseFloat(selectedHotel.price))
                                    handleSaveSelection();
                                }}>Confirm</button>

                            </div>
                        </div>
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