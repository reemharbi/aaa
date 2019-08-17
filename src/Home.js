
import React ,{Component} from  'react';
import axios from 'axios';
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
    currentIndex: 0,
    char: ""
  }

  

  Next() {

    if (StoryData[this.state.currentIndex + 1]) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    } else {
      this.setState({
        currentIndex: 0,
        char: ""
      })
    }
  }
  Prev() {

    if (StoryData[this.state.currentIndex - 1]) {
      this.setState({ currentIndex: this.state.currentIndex - 1})
    } else {
      this.setState({
        currentIndex: 8,
 
      })
    }
  }

  render() {

    return (
      <div class ='center'>
      
        <ImgDetails imgDetails={StoryData[this.state.currentIndex]} />
     <div class='bottom'>
        <button onClick={() => this.Prev()}>Prev </button> 
        <button onClick={() => this.Next()}>Next </button>
        </div>
      </div>
    );
  }
}




export default Home