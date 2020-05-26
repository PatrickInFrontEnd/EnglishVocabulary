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
    const [rotatedCards, setRotation] = useState(false);
    const { playText, voices, setSpeechVoice } = useContext(WordsContext);

    const toggleRotation = () => {
        setRotation(!rotatedCards);
    };

    return (
        <CardsContainer
            rotatedCards={rotatedCards}
            onClick={() => toggleRotation()}
            onMouseLeave={() => rotatedCards && toggleRotation()}
        >
            <FrontCard>
                <Word>{term.toUpperCase()}</Word>
                <SpeakerIcon
                    speakerIcon={Icon}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSpeechVoice(voices);
                        playText(term);
                    }}
                />
            </FrontCard>
            <BackCard reversed>
                <Word reversed>{def.toUpperCase()}</Word>
                <SpeakerIcon
                    speakerIcon={Icon}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSpeechVoice(
                            voices,
                            "Microsoft Paulina Desktop - Polish"
                        );
                        playText(def);
                    }}
                />
            </BackCard>
        </CardsContainer>
    );
};

export default WordComponent;
