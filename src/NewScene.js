import React, { Component } from 'react'
import { Input , Segment  , Form , Button} from 'semantic-ui-react';
import axios from 'axios';

export default class NewScene extends Component {
    state = {
        scene_text:'',
        left_text: '',
        right_text: '', 
        res: 0
    }

    handleSceneText = (event) => {
        this.setState({
            scene_text: event.target.value
        })
    }


    handleLeftText = (event) => {
        this.setState({
            left_text: event.target.value
        })
        console.log(this.state.left_text)

    }


    handleRightText = (event) => {
        this.setState({
            right_text: event.target.value
        })
        console.log(this.state.right_text)
    }


    addScene = () => {

        axios.post( 'https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes.json' , {
            "scene_text": this.state.scene_text,
            "left_text": this.state.left_text,
            "right_text": this.state.right_text    

        }).then(response => {

            console.log(response);

        if (this.props.isLeft == true){
            axios.patch(`https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.props.id}.json` , {
            "left_id": response.data.id
    
            }).then(res => console.log(res)).catch(error => console.log(error))
    
        }
        else{

            axios.patch(`https://cors-anywhere.herokuapp.com/https://aaa-api.herokuapp.com/scenes/${this.props.id}.json` , {
                "right_id": response.data.id
        
                }).then(res => console.log(res)).catch(error => console.log(error))
        
        }

        }).catch(error => console.log(error))


    }

    render() {
        return (
            <div class ='center'>
            
      
            <div class="ui inverted segment">
                <div style={{"padding-right": "40%"}}>
            <p>The story ends here...</p>
            <p style={{"textAlign": "right"}}>Continue your story</p>
            </div>
            <h4 class="ui horizontal inverted divider">
          Add
        </h4>
        
        <Input fluid icon='search' style={{"text-align": "center"}}  placeholder='Enter your part of the story here..' value= {this.state.scene_text} onChange= {(v) => this.handleSceneText(v)} />

      </div>


      <div class="ui segment">
        <div class="ui two column very relaxed grid">
          <div class="column">
          <Form.Field>
          <Segment inverted>
    <Input inverted placeholder='Your first option' value={this.state.left_text} onChange= {(v) => this.handleLeftText(v)}/>
  </Segment>
  </Form.Field>

          </div>
          <div class="column">
          <Form.Field>
          <Segment inverted>
    <Input inverted placeholder='Your second option' value={this.state.right_text} onChange= {(v) => this.handleRightText(v)}/>
  </Segment>
  </Form.Field>

          </div>

          <Button animated='fade' fluid onClick={this.addScene}>
      <Button.Content visible>Submit your scene</Button.Content>
      <Button.Content hidden>Sounds intresting ^_^</Button.Content>
    </Button>
        </div>
      
      </div>
      
           
            </div>
          );
    }
}
