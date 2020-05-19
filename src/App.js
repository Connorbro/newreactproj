import React, {Component} from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Heading from './Heading';
import NavBar from './NavBar';
import AboutDave from './AboutDave';
import Pets from './Pets';




class App extends Component{
  render(){
    return(
      <div className="App">
        <Heading />
        <AboutMe />
        <AboutDave />
        <NavBar />
        <Pets petType="Pigeon" age = {22} FavFood = "cheerios" excersize = "Treadmil"/>
      </div>
    )
  }
}

export default App;
