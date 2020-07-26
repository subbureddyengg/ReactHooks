
import React, { Component } from "react";
import Home from './Pages/Home.js';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Rooms from './Pages/Rooms.js';
import Navbar from './Components/Navbar';
import {RoomData} from './ContextAPI';
class App extends Component{
  render(){
    return(
    <div>
     <RoomData>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/rooms/:query' component={SingleRoom}/>
          <Route path='/rooms' component={Rooms}/>
          <Route component={Error}/>
        </Switch>  
      </Router>
    </RoomData>
      
    </div>
      
    )
  }
}

export default App;