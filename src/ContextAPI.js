import React,{Component} from 'react';
import items from "./data.js"
const RoomContext = React.createContext();
class RoomData extends Component{
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price: 0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakFast:false,
        pets:false
    }
    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room=>room.featured === true);
        console.log(rooms)
        let maxPrice = Math.max(...rooms.map(item=>item.price))
        let maxSize = Math.max(...rooms.map(item=>item.size))
        console.log(maxSize)
        this.setState({
            rooms:rooms,
            sortedRooms:rooms,
            featuredRooms:featuredRooms,
            loading:false
        })
    };
    formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(image=>
                image.fields.file.url);
            let room = {...item.fields,id,images}; 
            return room});
            return tempItems;       
    }
    getRoom = (slug)=>{
        let tempRooms = [...this.state.rooms];
        
        let room = tempRooms.find(room => room.slug === slug);
        
        return room;
    }
    handleChange = event =>{
        const value = event.type === "checkbox" ? event.target.checked :event.target.value;
        const name = event.target.name;
        this.setState({
            [name] : value
        },this.filterRooms);
    }
    filterRooms=()=>{
        let { rooms,type,capacity,price,minSize,maxSizebreakfast,pets}=this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price)
        if(type !== "all"){
        tempRooms = tempRooms.filter(room=>room.type===type);
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
        }
        tempRooms = tempRooms.filter(room=>room.price<=price);
        this.setState({
            sortedRooms:tempRooms
        })
    }
    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
} 
const RoomConsumer = RoomContext.Consumer;
export {RoomConsumer,RoomContext,RoomData};