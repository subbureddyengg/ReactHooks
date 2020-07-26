import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
export default function Room(props){
    const { name, slug,  images, price} = props.roomProp;
    return(
        <article className="room">
            <div className="img-container">
                     <img src={images[0]}/>
            
                 <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                 </div>
                 <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
                 <p className="room-info">{name}</p>

            </div>
        </article>
            
        
    )
}
/*Room.propTypes = {
    roomProp:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        imageUrls:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}*/