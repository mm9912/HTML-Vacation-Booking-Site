
import amadeus from '../../app/lib/amadeus.js';
import clientPromise from '../../app/lib/mongodb.js';

export default async function searchHotel(req, res){

  if(req.method === 'POST'){
    const {destination} = req.body;
    console.log("Request received: ", {destination});

    try{

      const cityReference = await amadeus.referenceData.locations.get({
        subType: 'CITY',
        keyword: destination,
      });

      const cityCode = cityReference.data[0].iataCode; 

      const hotelListResponse = await amadeus.referenceData.locations.hotels.byCity.get({
        cityCode,
        radius: '20',
        ratings: '5',
      });

      // console.log("Hotel List:", hotelListResponse.data);

      const hotelIdsFrom2024 = hotelListResponse.data.filter((hotel) => {
        const lastUpdate = hotel.lastUpdate;
        if (!lastUpdate) return false;
        const year = new Date(lastUpdate).getFullYear(); 
        return year === 2024;
      }).map((hotel) => hotel.hotelId); 

      if (hotelIdsFrom2024.length === 0) {
        console.log("No hotels with updates from 2024 found.");
        return;
      }

      // console.log(hotelIdsFrom2024);
    
      const response  = await amadeus.shopping.hotelOffersSearch.get({
        hotelIds: hotelIdsFrom2024.join(','),
      });
            
        // console.log(response.data);

      const hotelsData = response.data.map((offer) => ({

        hotelName: offer.hotel.name,
        price: offer.offers?.[0]?.price?.total || "N/A",
        currency: offer.offers?.[0]?.price?.currency || "N/A",
        checkIn: offer.offers?.[0]?.checkInDate || "N/A",
        checkOut: offer.offers?.[0]?.checkOutDate || "N/A",
      }));
          
        const client = await clientPromise;
        const db = client.db('WanderSphere');
        const collection = db.collection('hotels');
        await collection.insertMany(hotelsData);

        // console.log(`Hotels fetched:`, hotelsData);
          
        res.status(200).json({hotels: hotelsData});

      }catch(error){
      
        res.status(500).json({error: 'Failed to fetch hotel data'});
      }
  }
}





async function testHotel(req,res){

  try{
  
 
    const keyWord = "New York";

    //getCityCode
    const cityReference = await amadeus.referenceData.locations.get({
      subType: 'CITY',
      keyword: keyWord,
    });
    // console.log(cityReference)

    const cityCodes = cityReference.data.map((city) => ({
      name: city.name,
      code: city.iataCode,
    }))
    console.log('City Codes:', cityCodes);

    const cityCode = cityReference.data[1].iataCode; 

    //getHotelIds
    const hotelListResponse = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode,
      radius: '20',
      ratings: '5',
    });

    // console.log("Hotel List:", hotelListResponse.data);

    //get HotelIds from 2924
    // const hotelIds = hotelListResponse.data.slice(0,10).map((hotel) => hotel.hotelId);
    const hotelIdsFrom2024 = hotelListResponse.data.filter((hotel) => {
      const lastUpdate = hotel.lastUpdate;

      if (!lastUpdate) return false;

      const year = new Date(lastUpdate).getFullYear(); 
      return year === 2024;
    }).map((hotel) => hotel.hotelId); 

    if (hotelIdsFrom2024.length === 0) {
      console.log("No hotels with updates from 2024 found.");
      return;
    }

    console.log("Hotel Ids from 2024:", hotelIdsFrom2024);

    // const hotelId = hotelListResponse.data[1].hotelId;
    // console.log("Fetched hotel IDs:", hotelId);

    //get hotel offers
    const response  = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds: hotelIdsFrom2024.join(','),
    });
          

      console.log(response.data);

      const hotelsData = response.data.map((offer) => ({

        hotelName: offer.hotel.name,
        price: offer.offers?.[0]?.price?.total || "N/A",
        currency: offer.offers?.[0]?.price?.currency || "N/A",
        checkIn: offer.offers?.[0]?.checkInDate || "N/A",
        checkOut: offer.offers?.[0]?.checkOutDate || "N/A",
      }));
          
          console.log("Hotels Fetched:",hotelsData);
          
          const client = await clientPromise;
          const db = client.db('WanderSphere');
          const collection = db.collection('hotels');
          const result = await collection.insertMany(hotelsData);
          console.log(`${result.insertedCount} hotels added to mongo`);
          
          
      }catch(error){

        console.error("Error Details:", {
          status: error.response?.status || "Unknown",
          data: error.response?.data || error.message,
          stack: error.stack,
        });
    }

}

testHotel();

// deleteAllHotels();
async function deleteAllHotels() {
  try {
    const client = await clientPromise;
    const db = client.db('WanderSphere');
  
    await db.collection('hotels').drop();

    console.log("The 'hotels' collection has been dropped.");
  } catch (error) {
    console.error('Error dropping the hotels collection:', error);
  }
}


// console.log(amadeus.referenceData.locations);


