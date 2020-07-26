import React, { Component } from 'react';
import {RoomContext} from '../ContextAPI';
import Title from './Title';
import Room  from './Room.js'
import Loading from './Loading.js';
import Rooms from '../Pages/Rooms';

class FeaturedRooms extends Component{
    static contextType = RoomContext
    render(){
        const {loading,featuredRooms} = this.context;
        let rooms = featuredRooms.map(featuredRoom=>{
            return <Room  key={featuredRoom.id} roomProp={featuredRoom}/>;
        });

        return(
            <section className="featured-rooms">
                <Title title="Featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>
            </section>
               
                

            
        )
    }
}
export default FeaturedRooms;