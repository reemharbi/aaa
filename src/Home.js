
import React ,{Component} from  'react';
// import axios from 'axios';
import ImgDetails from './ImgDetails'
import StoryData from './StoryData'
import './Home.css';
import YouTube from './YouTube'
import Drama from './Drama'
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
export * from "react-router";
console.log(StoryData[0]);
console.log(StoryData[1]);
let index=1;

class Home extends Component {

  state = {
    currentIndex: 1,

  }

  

  Next() {

    
      this.setState({
        currentIndex: StoryData[this.state.currentIndex].rightChoice.rightID
      
      })
    console.log(this.state.currentIndex)
  }
  Prev() {

    
      this.setState({
        currentIndex: StoryData[this.state.currentIndex].leftChoice.leftID
 
      })
      console.log(this.state.currentIndex)
    
  }

  render() {

    return (
      <div class ='center'>
      

      <div class="ui inverted segment">
        <ImgDetails imgDetails={StoryData[this.state.currentIndex]} />
  
 
  <h4 class="ui horizontal inverted divider">
    Choose
  </h4>
</div>

        <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
    <button class='ui button' onClick={() => this.Prev()}> {StoryData[this.state.currentIndex].leftChoice.text} </button>

    </div>
    <div class="column">
    <button class='ui button' onClick={() => this.Next()}> {StoryData[this.state.currentIndex].rightChoice.text} </button> 

    </div>
  </div>
  <div class="ui vertical divider">
    or
  </div>
</div>

     
      </div>
    );
  }
}




export default Home