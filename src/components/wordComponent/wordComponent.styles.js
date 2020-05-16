import styled, { css } from "styled-components";

const flexCentered = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardsContainer = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    ${({ rotatedCards }) => (rotatedCards ? rotateCards() : "")};

    @keyframes rotate {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }
`;

function rotateCards() {
    return `
        & ${FrontCard}{
            transform: translate(-50%, -50%) rotateY(-180deg) perspective(400px);
        }

        & ${BackCard}{
            transform: translate(-50%, -50%) rotateY(0deg) perspective(400px);
        }
    `;
}

function getCardColor(reversed) {
    return reversed ? "#F64E8B" : "#55b3f3";
}

const CardStyles = css`
    width: 100%;
    height: 100%;
    border-radius: 30px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: .5s;
    ${flexCentered}
    background-color: ${({ reversed }) => getCardColor(reversed)};
    position:absolute;
    top:50%;
    left:50%;
`;

const FrontCard = styled.div`
    ${flexCentered};
    ${CardStyles};
    transform: translate(-50%, -50%) rotateY(0deg);
`;

const BackCard = styled.div`
    ${flexCentered};
    ${CardStyles};
    transform: translate(-50%, -50%) rotateY(180deg);
`;

function getWordColor(reversed) {
    return reversed ? "#FFDD00" : "#FFFFFF";
}

const Word = styled.p`
    color: ${({ reversed }) => getWordColor(reversed)};
    font-weight: bold;
    font-size: 28px;
`;

export { CardsContainer, Word, FrontCard, BackCard };
