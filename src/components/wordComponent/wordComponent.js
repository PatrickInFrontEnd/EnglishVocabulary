import React, { useState, useContext } from "react";
import {
    CardsContainer,
    Word,
    FrontCard,
    BackCard,
    SpeakerIcon,
} from "./wordComponent.styles";
import Icon from "./../../assets/speaker.png";
import WordsContext from "./../../context/wordsContext/words.context";

const WordComponent = ({ word: { term, def } }) => {
    const [isRotated, setRotation] = useState(false);
    const { playText, voices, setSpeechVoice } = useContext(WordsContext);

    const toggleRotation = () => setRotation(!isRotated);

    const handleSpeakerClick = (e, { voiceName, wordToSpeech = "" }) => {
        if (e.type !== "click") return;
        e.stopPropagation();
        setSpeechVoice(voices, voiceName || undefined);
        playText(wordToSpeech);
    };

    return (
        <CardsContainer
            rotated={isRotated}
            onClick={toggleRotation}
            onMouseLeave={() => isRotated && toggleRotation()}
        >
            <FrontCard>
                <Word>{term.toUpperCase()}</Word>
                <SpeakerIcon
                    iconUrl={Icon}
                    onClick={(e) => {
                        handleSpeakerClick(e, {
                            wordToSpeech: term,
                        });
                    }}
                />
            </FrontCard>
            <BackCard reversed>
                <Word reversed>{def.toUpperCase()}</Word>
                <SpeakerIcon
                    iconUrl={Icon}
                    onClick={(e) => {
                        handleSpeakerClick(e, {
                            wordToSpeech: def,
                            voiceName: "pl",
                        });
                    }}
                />
            </BackCard>
        </CardsContainer>
    );
};

export default WordComponent;
