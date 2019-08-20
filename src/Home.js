
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
import NewScene from './NewScene';
import Scene from './Scene';
export * from "react-router";

let index=1;
let apiCallCount = 0;
class Home extends Component {

  state = {
    id: 1,
  scene: {},
  isEnd: false,
  isLeft: true,
  newID:0


  }

  fakeAPICall = () =>
  new Promise((resolve, reject) => {
    apiCallCount++;
    if (apiCallCount % 3 === 2) {
    //   setTimeout(() => reject(new Error("fake error")), 1000);
    // } else {
      setTimeout(() => resolve(), 1000);
    }
 
  });

  Next = ()=> {

    
    if(this.state.scene.right_id){

    
      const scene =  this.state.scene
      scene.right_text = 'loading'
          this.setState({
            scene: scene
          
          })
            this.fakeAPICall();
            this.setState({
              id: this.state.scene.right_id
            
            })
      console.log(this.state.id)
  this.callApi(this.state.scene.right_id)
    }

    else 
    this.setState({
      isEnd: true,
      isLeft: false,
      newID: this.state.scene.id
    })


  }

  callApi(id){

    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
    
    }).catch(error => console.log(error));
  }

  Prev =  () => {

    if (this.state.scene.left_id){
   
    const scene =  this.state.scene
    scene.left_text = 'loading'
        this.setState({
          scene: scene
        
        })
          this.fakeAPICall();
          this.setState({
            id: this.state.scene.left_id
          
          })
    console.log(this.state.id)
this.callApi(this.state.scene.left_id)
        }
        else {
          this.setState({
            isEnd: true,
            isLeft: false,
            newID: this.state.scene.id
          })
        }




  }

  componentDidMount(){
    const scene =  this.state.scene
    scene.right_text = 'loading'
    scene.left_text = 'loading'
        this.setState({
          scene: scene
        }) 
    axios({
      method: 'GET',
      url: `https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.state.id}.json`
    }).then(response => {
      
      this.setState({scene: response.data}) 
      console.log(this.state.scene);
    
    }).catch(error => console.log(error));
  }


  render() {
    if (this.state.isEnd)
      return <NewScene isLeft={this.state.isLeft} id={this.state.newID}/>
      else
      return <Scene scene={this.state.scene} prev={this.Prev} next={this.Next}/>
    
  }
}




export default Home