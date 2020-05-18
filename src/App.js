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
const whatShouldIWear = () => {
  return(
    <h1>What should you wear to different places?</h1>
  )
}
const WhatsYourName = () => {
  return(
    <h1>Name?</h1>
  )
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello world</h1>
        <AboutMe />
        <WhatsYourName />
        <whatShouldIWear />
      </div>
    )
  }
}

export default App;
