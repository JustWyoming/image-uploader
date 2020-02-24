import React, { Component } from 'react';

import './App.css';
import ImageUpload from './components/ImageUpload';

class App extends Component {
   render(){
    return (
    <div className="App">
         <div className="uploader">
        <h1>Image Uploader </h1>
        <ImageUpload />
      </div>

      <div className='just-right'>
        <span>JUST</span>
        <span id="right" className="right-bar"></span>
      </div>
      <div  className='just-left'>
        UPLOAD
        <span id="left" className="left-bar"></span></div>    
    </div>   
    );
  }
}

export default App;
