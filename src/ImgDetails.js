import React, { Component } from 'react';

import StoryData from './StoryData'
class ImgDetails extends Component {

    render() {
        return (
            <div className="card">
            <h1>{this.props.imgDetails.title}</h1>
                <img src={this.props.imgDetails.imgSrc} alt="" />
                <p>{this.props.imgDetails.imgText}</p>
            </div>
        )
    }
}


export default ImgDetails;