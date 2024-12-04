import Homepage from "./homepage";
import AboutUs from "./aboutus";
import CountriesList from "./countriesListing";
import ContactUs from "./contactUs"; 

import Africa from "./AfricaCountries";
import Asia from "./AsiaCountries";
import Europe from "./EuropeCountries";
import NorthAmerica from "./NorthAmericaCountries";
import SouthAmerica from "./SouthAmericaCountries";
import Oceania from "./OceaniaCountries";

import Egypt from "./egypt";
import Seychelles from "./seychelles";
import SouthAfrica from "./southafrica";

import Japan from "./japan";
import Korea from "./korea";
import Taiwan from "./taiwan";

import Italy from "./italy";
import Sweden from "./sweden";
import Switzerland from "./switzerland";

import Canada from "./canada";
import Mexico from "./mexico";
import USA from "./usa";

import Argentina from "./argentina";
import Brazil from "./brazil";
import Chile from "./chile";

import Australia from "./australia";
import FrenchPolynesia from "./frenchpolynesia";
import NewZealand from "./newzealand";

import DestinationSelection from "./destinationSelection";
// import CheckoutPage from "./checkoutPage";

import Receipt from "./reciept";

import { useState } from 'react';
import Home from "./page";

export default function Body(){
    const[page , setPage] = useState(1);
    const[selectedCity, setSelectedCity] = useState(null);
    const[flightDetails, setFlightDetails] = useState(null);
    const[hotelDetails, setHotelDetails] = useState(null);
    const[totalPrice, setTotalPrice] = useState(null);
    
    let component;

    switch(page){
        case 1: //homepage
            component = <Homepage setPage={setPage}/>
            break;
        case 2: //
            component = <AboutUs setPage={setPage}/>
            break;
        case 3:
            component = <CountriesList setPage={setPage}/>
            break;
        case 4:
            component = <ContactUs setPage={setPage}/>
            break;
        case 5:
            component = <Africa setPage={setPage}/>
            break;
        case 6:
            component = <Asia setPage={setPage}/>
            break;
        case 7:
            component = <Europe setPage={setPage}/>
            break;
        case 8:
            component = <NorthAmerica setPage={setPage}/>
            break;
        case 9:
            component = <SouthAmerica setPage={setPage}/>
            break;
        case 10:
            component = <Oceania setPage={setPage}/>
            break;
        case 11:
            component = <Egypt setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 12:
            component = <Seychelles setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 13:
            component = <SouthAfrica setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 14:
            component = <Japan setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 15:
            component = <Korea setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 16:
            component= <Taiwan setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 17:
            component = <Italy setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 18:
            component = <Sweden setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 19:
            component = <Switzerland setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 20:
            component = <Canada setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 21:
            component = <Mexico setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 22:
            component = <USA setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 23:
            component = <Argentina setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 24:
            component = <Brazil setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 25:
            component = <Chile setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 26:
            component = <Australia setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 27:
            component = <FrenchPolynesia setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 28:
            component = <NewZealand setPage={setPage} setSelectedCity={setSelectedCity} />
            break;
        case 29:
            component = <DestinationSelection setPage={setPage} 
            city={selectedCity} 
            setFlightDetails={setFlightDetails}    
            setHotelDetails={setHotelDetails}
            setTotalPrice={setTotalPrice}
            />
            break;
        case 30:
            component = <Receipt setPage={setPage} flightDetails={flightDetails} hotelDetails={hotelDetails} totalPrice ={totalPrice}/>
            break;
        





    }   




    


    return component;


}