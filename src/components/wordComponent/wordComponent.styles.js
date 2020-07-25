import styled, { css } from "styled-components";

const flexCentered = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpeakerIcon = styled.div`
    background-image: url(${({ iconUrl }) => (iconUrl ? iconUrl : "")});
    background-size: cover;
    background-repeat: no-repeat;
    backface-visibility: hidden;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    bottom: 20px;

    @media screen and (min-width: 1280px) {
        transition: 0.5s;
        opacity: 0;
    }
`;

const CardsContainer = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    ${({ rotated }) => (rotated ? rotateCards() : "")};

    @media screen and (min-width: 1280px) {
        &:hover ${SpeakerIcon} {
            opacity: 1;
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
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    padding:10px;
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
    ${CardStyles};
    transform: translate(-50%, -50%) rotateY(0deg);
`;

const BackCard = styled.div`
    ${CardStyles};
    transform: translate(-50%, -50%) rotateY(180deg);
`;

function getWordColor(isReversed) {
    return isReversed ? "#FFDD00" : "#FFFFFF";
}

const Word = styled.p`
    color: ${({ reversed }) => getWordColor(reversed)};
    font-weight: bold;
    font-size: 28px;

    @media screen and (max-width: 450px) {
        font-size: 24px;
    }
`;

export { CardsContainer, Word, FrontCard, BackCard, SpeakerIcon };
