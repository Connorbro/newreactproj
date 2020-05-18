import React, {Component} from 'react';
import './App.css';
import AboutMe from './AboutMe';


const Header = () => {
  return(
    <h1>This is the header component</h1>
  )
}
const Footer = () => {
  return(
    <h1>This is the footer component</h1>
  )
}

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
