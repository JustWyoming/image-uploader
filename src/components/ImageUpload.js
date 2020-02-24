import React, {Component} from 'react';
import {storage} from '../firebase/firebase';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { //initial state
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {
        image,
        imageName
      } = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    return (
      <div className="upload-form">
        <progress className="progress" value={this.state.progress} max="100"/>
        <br/>
        <label for='file-upload' className='custom-file-upload' onChange={this.handleChange}>
          Choose File 
          <input id="file-upload" type="file"/>
        </label>
        <button className="submit-button" onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/600'} className='placeholder' alt="Uploaded images" />
      </div>
    )
  }
}

export default ImageUpload;