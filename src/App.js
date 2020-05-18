import React, {Component} from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Heading from './Heading';
import NavBar from './NavBar';
import AboutDave from './AboutDave';





class App extends Component{
  render(){
    return(
      <div className="App">
        <Heading />
        <AboutMe />
        
        <AboutDave />
        <NavBar />
        
      </div>
    )
  }
}

export default App;
