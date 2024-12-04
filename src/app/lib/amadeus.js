import 'dotenv/config';
import Amadeus from 'amadeus';

// console.log('Client ID:', process.env.AMA_API_KEY);
// console.log('Client Secret:', process.env.AMA_API_SECRET);

const amadeus = new Amadeus({
    clientId: process.env.AMA_API_KEY,
    clientSecret: process.env.AMA_API_SECRET,
});



export default amadeus;