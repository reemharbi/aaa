import React from 'react';

import './YouTube.css';
import { Player } from 'video-react';
 
export default props => {
  return (
    <Player>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" autoPlay />
    </Player>
  );
}; 

