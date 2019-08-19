
import React ,{Component} from  'react';
import axios from 'axios';
import ImgDetails from './ImgDetails'
import RightButton from './RightButton'
import LeftButton from './LeftButton'
import StoryData from './StoryData'
import './Home.css';
import YouTube from './YouTube'
import Drama from './Drama'
import { Switch,Route, Link, BrowserRouter as Router } from 'react-router-dom'
export * from "react-router";

let index=1;

class Home extends Component {

  state = {
    currentIndex: 1,
  scene: {}


  }

  

  Next() {

    
      this.setState({
        currentIndex: this.state.scene.right_id
      
      })
    console.log(this.state.currentIndex)
this.callApi(this.state.scene.right_id)
  }

  callApi(id){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      console.log(this.state.scene);
    
    }).catch(error => console.log(error));
  }

  Prev() {

    
      this.setState({
        currentIndex: this.state.scene.left_id
 
      })
      console.log(this.state.currentIndex)
this.callApi(this.state.scene.left_id)
    
  }

  componentDidMount(){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.state.currentIndex}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      console.log(this.state.scene);
    
    }).catch(error => console.log(error));
  }


  render() {

    return (
      <div class ='center'>
      

      <div class="ui inverted segment">
        <ImgDetails imgDetails={this.state.scene} />
  
 
  <h4 class="ui horizontal inverted divider">
    Choose
  </h4>
</div>

        <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
    {/* <button class='ui button' onClick={() => this.Prev()}> {this.state.scene.left_text} </button> */}
    <LeftButton  data={this.state.scene.left_text}  prev= {()=>this.Prev()}/>

    </div>
    <div class="column">
    {/* <button class='ui button' onClick={() => this.Next()}> {this.state.scene.right_text} </button>  */}
    <RightButton  data={this.state.scene.right_text} next= {()=>this.Next()}/>
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