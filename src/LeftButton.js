
import React, { Component } from 'react'

import StoryData from './StoryData'
import Home from './Home'

export default class LeftButton extends Component {






constructor(props){
    super(props)
}
    state = {
        currentIndex: 1,

      }



    render()
     {
console.log(this.props.prev)
        return (
            <div>
                     <button class='ui button' onClick={this.props.prev}> {this.props.data} </button>

            </div>
        )
    }
}
