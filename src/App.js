import React, {Component} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import AboutDave from './components/AboutDave';
import Pets from './components/Pets';
import Student from './components/Student';




class App extends Component{
  render(){
    return(
      <div className="App">
        <Heading />
        <AboutMe />
        <AboutDave />
        <NavBar />
        <Pets petType="Pigeon" age = {22} FavFood = "cheerios" excersize = "Treadmil"/>
        <Student name= "Connor" age= {21} />
      </div>
    )
  }
}

export default App;
