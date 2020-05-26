import { createContext } from "react";

const WordsContext = createContext({
    words: [],
    voices: [],
    speechSynthesis: null,
    speechUtterance: null,
    setSpeechVoice: () => {},
    playText: (msg) => {},
});

export default WordsContext;
