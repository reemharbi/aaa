
import React, { Component } from 'react'
import StoryData from './StoryData'
import Home from './Home'
export default class RightButton extends Component {
constructor(props){
    super(props)
}
    state = {
        currentIndex: 1,

      }



    render()
     {

        return (
            <div>
                     <button class='ui button' onClick={() => this.props.next()}> {this.props.data} </button>

            </div>
        )
    }
}



