import React from 'react';
import Hero from '../Components/Hero.js';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../Components/RoomsContainer';
import { RoomConsumer } from '../ContextAPI.js';
const Rooms = () =>{
    return(
        
          <div>
            <Hero hero="roomsHero">
                <Banner heading="Our Rooms">
                 <Link to='/' className="btn-primary">Home</Link>
                </Banner>
             </Hero>
             <RoomsContainer/>
          </div>
        
        
            
    )
}
export default Rooms