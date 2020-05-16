import React, { useState } from "react";
import {
    CardsContainer,
    Word,
    FrontCard,
    BackCard,
} from "./wordComponent.styles";

const WordComponent = ({ word: { term, def } }) => {
    const [rotatedCards, setRotation] = useState(false);

    const toggleRotation = (boolean) => setRotation(!boolean);

    return (
        <CardsContainer
            rotatedCards={rotatedCards}
            onClick={() => toggleRotation(rotatedCards)}
            onMouseLeave={() => rotatedCards && toggleRotation(rotatedCards)}
        >
            <FrontCard>
                <Word>{term.toUpperCase()}</Word>
            </FrontCard>
            <BackCard reversed>
                <Word reversed>{def.toUpperCase()}</Word>
            </BackCard>
        </CardsContainer>
    );
};

export default WordComponent;
