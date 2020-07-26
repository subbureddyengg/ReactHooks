import React, {Component} from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
    state={
        services:[
    {
            icon:<FaCocktail/>,
            title:'free cocktails',
            info:"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then"
        },
    {
            icon:<FaHiking/>,
            title:'Endless hiking',
            info:"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then"
    },
    {       
            icon:<FaShuttleVan/>,
            title:'Free ShuttleVan',
            info:"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then"
    },
    {       
        icon:<FaBeer/>,
        title:'Strongest Beer',
        info:"Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then"
}
]}

    render(){
        return(
            <section className="services">
                <Title title="services"/>
                    <div className="services-center">
                        {this.state.services.map((item,index)=>{
                            return(
                                <article key={index} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })}
                    </div>
                
            </section>
        )
    }
}
export default Services;