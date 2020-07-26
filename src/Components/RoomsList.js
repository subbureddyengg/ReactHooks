import React from 'react';
import Room from './Room.js'
export default function RoomsList(props){
    if(props.rooms.length===0){
        return(
            <div className="empty-search">
                <h3>No rooms found</h3>
            </div>
        )
    }
    return(
        <section className="roomslist">
            <div className="roomslist-center">
              {props.rooms.map((item,index)=>{
                  return <Room key={item.id} roomProp={item}/>
              })}
            </div>

        </section>
        
    )
}
