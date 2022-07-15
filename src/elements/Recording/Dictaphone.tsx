import React from 'react';
// @ts-ignore
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';

const appId = 'af51029e-8806-43ba-bc97-2c7b917fb325';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

interface IDictaphone {
  browserSupportsSpeechRecognition: boolean;
  onClickHandler: () => void;
  listening: boolean;
}

export const Dictaphone: React.FC<IDictaphone> = ({
  browserSupportsSpeechRecognition,
  onClickHandler,
  listening,
}) => {
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <HeaderSvgSelector
        id='audio'
        className={listening ? 'header__icon-listen' : 'header__icon-audio'}
      />
      <button
        onClick={onClickHandler}
        className='dictaphone-btn'
        onTouchStart={startListening}
        onMouseDown={() => {
          startListening();
          onClickHandler();
        }}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      ></button>
    </>
  );
};
