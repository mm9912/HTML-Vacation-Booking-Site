import 'dotenv/config';
import clientPromise from "../../app/lib/mongodb";

export default async function saveBookings(req, res) {
    if (req.method === "POST") {


        const { 
            origin,
            destination,
            departureTime,
            flightprice,
            duration,
            stops,
            hotelName,
            hotelPrice,
            checkIn,
            checkOut

        } = req.body;


        try {
          const client = await clientPromise;
          const db = client.db("WanderSphere");
          const usersCollection = db.collection("users");
    
          // Update user document with booking details
          const result = await usersCollection.insertOne({
                origin,
                destination,
                departureTime,
                flightprice,
                duration,
                stops,
                hotelName,
                hotelPrice,
                checkIn,
                checkOut,
                createdAt: new Date(),
            });
    
          res.status(200).json({ message: "Booking saved successfully", result });
        } catch (error) {
          console.error("Error saving booking:", error);
          res.status(500).json({ error: "Failed to save booking" });
        }
      } else {
        res.status(405).json({ error: "Method not allowed" });
      }


    // try{
    //     const client = await clientPromise;
    //     const db = client.db('WanderSphere');
    //     const collection = db.collection('user');

    //     if(req.method === 'POST'){
    //         const result = await collection.updateOne(
    //             {},
    //             {$set: {flight, hotel}},
    //             {upsert: true}
    //         )

    //         res.status(200).json({
    //             message: "Saved",
    //             modifiedCount: result.modifiedCount,
    //             upsertedId: result.upsertedId,
    //         })
                
    //     }else if(req.method === 'GET'){
    //         const userSelection = await collection.findOne();
    //         res.status(200).json(userSelection || {});
    //     }else{
    //         res.status(405).json({ error: "Method not allowed" });
    //     }  
        
    // }catch(error){
    //     res.status(500).json({ error: "Server error" });
    // }


}