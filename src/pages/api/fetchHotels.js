
import amadeus from '../../app/lib/amadeus.js';
import clientPromise from '@/app/lib/mongodb.js';
export default async function fetchHotels(req, res) {
  if(req.method === "GET"){
    try{
      const client = await clientPromise;
      const db = client.db('WanderSphere');
      const collection = db.collection('hotels');

      const hotels = await collection.find({}).toArray();

      res.status(200).json(hotels);
    }catch(error){
      res.status(500).json({error: "failed"})
    }
  }else{
    res.status(405).end('Method not allowed')
  }

}