import React, { Component } from 'react'
import {US,UK,UAE,IND,PAK} from './type';
export default class Dropdown extends Component {
constructor(props){
  super(props);
  this.state = {
    cityName : ['NEW YARK','FLORDA']
  }
  //this.populateCity = this.populateCity.bind(this)
}
  handelChange(e) {
    console.log(e.target.value);
    switch(e.target.value){
      case US:
      this.setState = {
       // cityName: this.populateCity(US)
      }
      break;
      case UK:
      this.setState = {
       // cityName: this.populateCity(UK),
      }
      break;
      case UAE:
      this.setState = {
      //  cityName: this.populateCity(UAE)
      }
      break;
      case IND:
      this.setState = {
        cityName: this.populateCity(IND)
      }
      break;
      case PAK:
      this.setState = {
       // cityName: this.populateCity(PAK)
      }
      break;
     default:
     this.setState = {
      cityName: this.populateCity(IND)
    }
    }
  }
   populateCity(country){
    let citys = '';
    console.log(country);
    if(country === 'US'){
      citys = ['NEW YARK','FLORDA']
    }
    if(country === 'UK'){
      citys = ['LONDON','ABCLON']
    }
    if(country === 'UAE'){
      citys = ['UAE1','UAE2']
    }
    if(country === 'IND'){
      citys = ['PUNE','MUMBAI']
    }
    if(country === 'PAK'){
      citys = ['PAK1','PAK2']
    }
    console.log(citys);
    return citys;
  }
  render() {

    const countrys = this.props.country;
    let item =
      countrys.map(cont => {
        console.log(cont.name);
        return <option key={cont.id} value={cont.name}>{cont.name}</option>;
      });

    return (
      <div>
        <label htmlFor="Country">Country : </label>
        <select name="" id="" onChange={this.handelChange}>
          {item}
        </select>

        <select name="" id="" onChange={this.handelChange}>
          {this.state.cityName}

        </select>
        <button onClick = {() =>this.populateCity('US')}>clicl here</button>
        <hr/>
        
      </div>
    )
  }
}
