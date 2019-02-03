import React, { Component } from 'react';
import './App.css';
import Home from './Home';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      titel : 'Home',
    }
    this.hendelChange = this.hendelChange.bind(this);
   //this.handleClick = this.handleClick.bind(this);
  }
  hendelChange(e){
        e.preventDefault();
          if(e.target.value.length >= 4){
            console.log(e.target.value.length, e.target.value);
            this.setState({
              titel : e.target.value
            });
          }
      }
  render() {
    return (
      <div className="App">
        <h1>hey this is Rajesh here</h1>
        <input type="text" onChange = {this.hendelChange}/>
        <Home titel = {this.state.titel}/>
      </div>
    );
  }
}

export default App;
