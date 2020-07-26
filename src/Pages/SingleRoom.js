import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../ContextAPI';
import StyledHead from '../Components/StyledComp';

class SingleRoom extends Component{
    constructor(props){
        super(props)
        
        this.state={
            slug:this.props.match.params.query,
            defaultBcg,
            
        };
        
    }
    
    /*componentDidMount(){

    }*/
    static contextType = RoomContext;
    render(){
       const { getRoom } = this.context;
        let room = getRoom(this.state.slug);
       
   if(!room){
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [firstImg,...nextImgs] = images;
        console.log(extras)
        return(
        <div>
           <StyledHead img={firstImg}>
                <Banner subtitle={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHead>
            <section className="single-room">
                <div className="single-room-images">
                    {nextImgs.map((image,index)=>{
                        return <img key={index} src={image} alt={name}/>
                     })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>${description}</p>
                    </article>
                    <article className="info">
                           <h3>Info</h3>
                           <h6>Price: ${price}</h6>
                           <h6>Size: ${size} SQFT</h6>
                           <h6>Max-Capacity: {
                              capacity>1 ? `${capacity} person` : `${capacity} people`
                           }</h6>
                           <h6>pets: {pets? "allowed" : "not allowed" }</h6>
                           <h6>{breakfast && "free breakfast included"}</h6>
                    </article> 
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                      return  <li key={index}>- {item}</li>
                    })}
                </ul>

            </section>
        </div>
            
        
            
        )
    }
}
export default SingleRoom;