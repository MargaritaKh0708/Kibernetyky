import React from "react";
// @ts-ignore
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { HeaderSvgSelector } from "components/header/HeaderSvgSelector";

const appId = "af51029e-8806-43ba-bc97-2c7b917fb325";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("lisening start");
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <HeaderSvgSelector
        id='audio'
        className={listening ? "header__icon-listen" : "header__icon-audio"}
      />
      {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
      <button
        className='dictaphone-btn'
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      ></button>
      <p>{transcript}</p>
    </>
  );
};
export default Dictaphone;
