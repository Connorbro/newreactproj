import React, {Component} from 'react';
import './App.css';

const AboutMe = () => {
  return(
    <div>
      <h1>Would you like to know more about me?</h1>
      <p>Maybe you would, maybe you wouldn't</p>
    </div>
  )
}
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
