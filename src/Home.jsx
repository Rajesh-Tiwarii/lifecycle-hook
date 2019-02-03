import React, { Component } from 'react'
import Dropdown from './Dropdown';

export default class Home extends Component {
    componentWillMount(){
        console.log("componentWillMount Called");
      }
      componentDidMount(){
        console.log("componentDidMount Called");
      }
      componentWillReceiveProps(nextProp){
          console.log("recive new props", nextProp);
      }
      shouldComponentUpdate(nextProp, nextState){
        console.log("shouldComponentUpdate called", nextProp, nextState);
        return true;
      }
      componentWillUpdate(nextProp, nextState){

        console.log("componentWillUpdate called ", nextProp, nextState);
      }
      componentDidUpdate(prevProps,prevState){
          console.log("componentDidUpdate Called ", prevProps,prevState);
      }

  render() {
      const countrys = [{
          id : 1,
          name : 'US'
      },
      {
        id : 2,
        name : 'UK'
    },
    {
        id : 3,
        name : 'UAE'
    },
    {
        id : 4,
        name : 'IND'
    },
    {
        id : 5,
        name : 'PAK'
    },
    ]
    return (
      <div>
        <h3>hey i am home component!!</h3>
        <h2>my titel is :{this.props.titel}</h2>
        {console.log("render method called")}
        <Dropdown country ={countrys}/>
      </div>
    )
  }
}
