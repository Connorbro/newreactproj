import React, {Component} from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Header from './Header';
import Footer from './Footer';




class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello world</h1>
        <AboutMe />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
