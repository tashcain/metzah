import React from "react";
import ReactAudioPlayer from "react-audio-player";
import AudioFile from "../../../assets/audio/cute.mp3";

function Audio() {
  return (
    <div>
      <h3>Heading</h3>
      <br />
      <ReactAudioPlayer src={AudioFile} controls />
    </div>
  );
}

export default Audio;
