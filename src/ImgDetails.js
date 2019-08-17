import React, { Component } from 'react';

import StoryData from './StoryData'
class ImgDetails extends Component {

    render() {
        return (
            <div className="card">
       
                <p>{this.props.imgDetails.text}</p>
            </div>
        )
    }
}


export default ImgDetails;