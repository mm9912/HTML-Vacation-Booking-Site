
import amadeus from '../../app/lib/amadeus.js';
import clientPromise from '../../app/lib/mongodb.js';


export default async function searchFlight(req, res){
    if(req.method === "POST"){
        
        const {origin, destination, departureDate} = req.body;
       
        console.log("Request received:", { origin, destination, departureDate});
        try{

            // const IATAcode = await amadeus.referenceData.locations.get({
            //     keyword: origin,
            //     subType: 'CITY',
            // });

            // const airportCode = IATAcode.data[0]?.iataCode;
            // origin = airportCode;


            const flightOffers = await amadeus.shopping.flightOffersSearch.get({
                originLocationCode: origin,
                destinationLocationCode: destination,
                departureDate: departureDate,
                adults: 1,
                currencyCode: 'CAD',
                max: 3,
            });
            
            const flightsData = flightOffers.data.map(flight => ({
                origin,
                destination,
                price: flight.price.total,
                currency: flight.price.currency,
                duration: flight.itineraries[0].duration,
                flightTime: flight.itineraries[0].duration, // e.g., "PT5H30M"
                stops: flight.itineraries[0].segments.length - 1,
                departureTime: flight.itineraries[0].segments[0].departure.at, 
                
            }));
            
            const client = await clientPromise;
            const db = client.db('WanderSphere');
            const collection = db.collection('flights');
            await collection.insertMany(flightsData);
            
            // console.log('Flights fetched:', flightsData);

            res.status(200).json({flights: flightsData})
                
        }catch(error){   
            res.status(500).json({error: 'Failed to fetch flight data'});            
        }       
    }else{
        res.status(405).json({error: 'method not allowed'})
    }
}






async function testAmadeus(req, res){
    try{
        
        const origin = "NYC";
        const destination = "LAX";
        const date = "2024-12-01";



        const response = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate: date,
            adults: 1, // Number of passengers
            currencyCode: 'CAD', // Price in CAD
            max: 20,
            //Return date ..
        });

    

        const flights = response.data.map((offer) => {
            const itinerary = offer.itineraries[0]; 
            const firstSegment = itinerary.segments[0]; 

            return{
                origin: firstSegment.departure.iataCode,
                destination: firstSegment.arrival.iataCode,
                price: offer.price.total,
                currency: offer.price.currency,
                flightTime: itinerary.duration, // e.g., "PT5H30M"
                stops: itinerary.segments.length - 1,
                departureTime: firstSegment.departure.at, 
            }
        });

        console.log('Flights fetched:', flights);

        const client = await clientPromise;
        const db = client.db('WanderSphere');
        const collection = db.collection('flights');
        const result = await collection.insertMany(flights);

        console.log(`${result.insertedCount} flights added to mongo`)

    }catch(error){
        console.error('Error', error.response?.data || error.message);
    }
}
// deleteAllFlight();
testAmadeus();



// async function deleteAllFlight() {
//     try {
//       const client = await clientPromise;
//       const db = client.db('WanderSphere');
    
//       await db.collection('flights').drop();
  
//       console.log("The 'flights' collection has been dropped.");
//     } catch (error) {
//       console.error('Error dropping the flights collection:', error);
//     }
//   }
  
