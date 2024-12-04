"use client";

import styles from "./page.module.css";
import { useState, useEffect} from "react";
import Navigation from "./nav";

export default function DestinationSelection(props) {
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [savedSelection, setSavedSelection] = useState(null);

  const destination = props.city;

  // Handle search for flights and hotels
  const handleSearch = async () => {
    try {
      const flightResponse = await fetch("/api/searchFlights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origin, destination, date, people }),
      });

      const hotelResponse = await fetch("/api/searchHotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: destination }),
      });

      const flightsData = await flightResponse.json();
      const hotelsData = await hotelResponse.json();

      setFlights(flightsData);
      setHotels(hotelsData);
    } catch (error) {
      console.error("Error fetching flights or hotels:", error);
    }
  };

  // Handle saving the user's selections
  const handleSaveSelection = async () => {
    try {
      const response = await fetch("/api/selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight: selectedFlight, hotel: selectedHotel }),
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
      const response = await fetch("/api/selection");
      if (response.ok) {
        const data = await response.json();
        setSavedSelection(data);
      }
    } catch (error) {
      console.error("Error fetching saved selection:", error);
    }
  };

  // Fetch the saved selection when the component loads
  useEffect(() => {
    fetchSavedSelection();
  }, []);

  return (
    <div className={styles.summaryBackground}>
      <Navigation setPage={props.setPage} />

      <section className={styles.summaryGrid}>
        <div className={styles.leftColumn}>
          {/* Flight Booking */}
          <div className={styles.flightBooking}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />

            <input
                type="text"
                placeholder="people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <button type="button" onClick={handleSearch}>
                Search
              </button>
            </form>

            <h2>Flight to: {props.city}</h2>
            <ul>
              {flights.map((flight, index) => (
                <li key={index}>
                  <p>Origin: {flight.origin}</p>
                  <p>Destination: {flight.destination}</p>
                  <p>Price: {flight.price}</p>
                  <p>Flight Time: {flight.flightTime}</p>
                  <button
                    onClick={() => setSelectedFlight(flight)}
                    className={styles.confirmButton}
                  >
                    Select Flight
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel Booking */}
          <div className={styles.hotelBooking}>
            <h2>Hotels At: {props.city}</h2>
            <ul>
              {hotels.map((hotel, index) => (
                <li key={index}>
                  <p>Name: {hotel.name}</p>
                  <p>Rating: {hotel.rating}</p>
                  <p>Price: {hotel.price}</p>
                  <button
                    onClick={() => setSelectedHotel(hotel)}
                    className={styles.confirmButton}
                  >
                    Select Hotel
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Summary */}
          <div className={styles.summaryInformation}>
            <h2>Summary</h2>
            <p>
              Selected Flight: {selectedFlight ? selectedFlight.destination : "None"}
            </p>
            <p>Selected Hotel: {selectedHotel ? selectedHotel.name : "None"}</p>
            <button onClick={handleSaveSelection} className={styles.confirmButton}>
              Save Selection
            </button>
          </div>

          {/* Saved Selections */}
          {savedSelection && (
            <div>
              <h3>Saved Selection:</h3>
              <p>Flight: {savedSelection.flight?.destination || "None"}</p>
              <p>Hotel: {savedSelection.hotel?.name || "None"}</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 WanderSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}
