import React from 'react';
import Hero from '../Components/Hero.js';
import Banner from '../Components/Banner.js';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import StyledComp from '../Components/StyledComp'
const Home=()=>{
    return(
    <div>
        <Hero>
            <Banner heading="Luxurious Rooms" subtitle="Deluxe rooms starts at $500">
                <Link to='/rooms' className='btn-primary'>Our Room </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        

    </div> 
        
    )
}
export default Home