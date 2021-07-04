import axios from "axios";

import React, { Component } from "react";

import Waveform from "./Waveform";
import './App.css'
import Button from "./components/Button";
import musicfile from './assest/sample.mp3';
class App extends Component {
  state = {
    selectedFile: musicfile,
    redirect: null
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    // const formData = new FormData();

    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );
    const audioFile = this.state.selectedFile;

    console.log(this.state.selectedFile);

    axios.post("https://localhost:5000/uploadfile", audioFile);
    console.log("Uploaded !!!!");
    this.setState({ redirect: true });
  };

  fileData = () => {
    if (this.state.selectedFile) {
      var filetype = this.state.selectedFile.type;
      if (filetype.slice(0, 5) === "audio") {
        return (
          <div>
            <h2>File Details:</h2>
            <p>Type of : {typeof this.state.selectedFile.type}</p>
            <p>File Name: {this.state.selectedFile.name}</p>

            <p>File Type: {this.state.selectedFile.type}</p>

            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return <p> Please give an audio file !!!</p>;
      }
    } else {
      return (
        <div>
          <br />
          <h4>Choose file before pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    if (this.state.redirect) {
      return <Waveform />;
    } else {
      return (
        <div >
          <Button type='submit'
            onClick={this.onFileUpload}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >Upload!</Button>
        </div>
      );
    }
  }
}

export default App;