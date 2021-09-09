import React, { Component } from "react";
import { Recorder } from "react-voice-recorder";
import "react-voice-recorder/dist/index.css";

class VoiceRecorder extends Component {
  constructor() {
    super();
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: null,
          m: null,
          s: null,
        },
      },
    };
  }

  handleAudioStop(data) {
    console.log(data);
    this.setState({ audioDetails: data });
  }
  handleAudioUpload(file) {
    console.log(file);
  }
  handleRest() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: null,
        m: null,
        s: null,
      },
    };
    this.setState({ audioDetails: reset });
  }
  render() {
    return (
      <div>
        <Recorder
          style={{ width: "100%" }}
          record={true}
          title={"New recording"}
          audioURL={this.state.audioDetails.url}
          //   showUIAudio
          handleAudioStop={(data) => this.handleAudioStop(data)}
          handleOnChange={(value) => this.handleOnChange(value, "firstname")}
          handleAudioUpload={(data) => this.handleAudioUpload(data)}
          handleRest={() => this.handleRest()}
        />
      </div>
    );
  }
}

export default VoiceRecorder;
