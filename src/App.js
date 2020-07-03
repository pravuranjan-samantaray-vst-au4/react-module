import React, { Component } from 'react'
import Card from './components/card.js';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      card1:0,
      card2:0,
      card3:0,
      card4:-1,
      card5:-1  
    }
  }

  handleCard1 =  () => {
    console.log('card1 clicked');
    
    if(this.state.card1 === 1) {
      this.setState({
        card1:0
      })
    }else {
      this.setState({
        card1:1
      })
    }
    
    
  }
  handleCard2 =  () => {
    console.log('card1 clicked')
    if(this.state.card2 === 1) {
      this.setState({
        card2:0
      })
    }else {
      this.setState({
        card2:1
      })
    }
  }
  handleCard3 =  () => {
    console.log('card1 clicked')
    if(this.state.card3 === 0) {
      this.setState({
        card3:-1
      })
    }else {
      this.setState({
        card3:0
      })
    }
  }
  handleCard4 =  () => {
    console.log('card1 clicked')
    if(this.state.card4 === -1) {
      this.setState({
        card4:1
      })
    }else {
      this.setState({
        card4:-1
      })
    }
  }
  handleCard5 =  () => {
    console.log('card1 clicked')
    if(this.state.card5 === -1) {
      this.setState({
        card5:1
      })
    }else {
      this.setState({
        card5:-1
      })
    }
  }
  render() {
    return (
      <div>
          <div className = 'container'>
          <div className="row1">
          <Card className = 'card1' name = 'q1' onclick = {() => {this.handleCard1()}} style = {{"zIndex":`${this.state.card1}`}}/>
          <Card className = 'card2' name = 'q2' onclick = {() => {this.handleCard2()}} style = {{"zIndex":`${this.state.card2}`}}/>
          </div>
          <div className = 'row2'>
          <Card className = 'card3' name = 'q3' onclick = {() => {this.handleCard3()}} style = {{"zIndex":`${this.state.card3}`}}/>
          </div>
          <div className = 'row3'>
          <Card className = 'card4' name = 'q4' onclick = {() => {this.handleCard4()}} style = {{"zIndex":`${this.state.card4}`}} />
          <Card className = 'card5' name = 'q5' onclick = {() => {this.handleCard5()}} style = {{"zIndex":`${this.state.card5}`}}/>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
