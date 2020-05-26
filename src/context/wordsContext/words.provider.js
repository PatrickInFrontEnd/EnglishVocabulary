import React, { useState, useEffect } from "react";
import WordsContext from "./words.context";
import wordsData from "./../../data/words.json";

const WordsContextProvider = ({ children }) => {
    const [speechUtterance, setupUtterance] = useState(
        new SpeechSynthesisUtterance("")
    );
    const [speechSynth, setupSpeechSynth] = useState(speechSynthesis);
    const [voices, setVoices] = useState([]);

    const setSpeechMessage = (message) => {
        speechSynth.cancel();
        speechUtterance.text = message;
    };

    const playText = (msg) => {
        if (speechSynth.speaking) speechSynth.cancel();
        setSpeechMessage(msg);
        speechSynth.speak(speechUtterance);
    };

    const setupVoices = (opts) => setVoices(opts);

    const getVoices = () => {
        let voiceOptions;

        voiceOptions = window.speechSynthesis.getVoices();
        if (voiceOptions.length > 0) {
            setupVoices(voiceOptions);
            return;
        }

        speechSynthesis.addEventListener("voiceschanged", (e) => {
            voiceOptions = e.target.getVoices();
            setupVoices(voiceOptions);
        });
    };

    const setSpeechVoice = (voices, name = "Google UK English Male") => {
        const filteredVoice = voices.find((voice) => voice.name === name);

        speechUtterance.voice = filteredVoice;
    };

    useEffect(() => {
        getVoices();
    }, []);

    useEffect(() => {
        if (voices.length) setSpeechVoice(voices);
    }, [voices]);

    return (
        <WordsContext.Provider
            value={{
                words: wordsData,
                voices,
                speechSynthesis: speechSynth,
                speechUtterance: speechUtterance,
                setSpeechVoice,
                playText,
            }}
        >
            {children}
        </WordsContext.Provider>
    );
};

export default WordsContextProvider;
