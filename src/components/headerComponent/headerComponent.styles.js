import styled from "styled-components";
import { flexCenter } from "./../style_mixins/flexCenter.mixin";

const Header = styled.header`
    width: 100%;
    height: 50px;
    margin: 25px 0;
    background-color: transparent;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    ${flexCenter}

    @media screen and (max-width: 450px) {
        font-size: 20px;
    }
`;

const HeaderImg = styled.img`
    width: 90px;
    height: 100%;

    @media screen and (max-width: 450px) {
        width: 60px;
        height: 40px;
    }
`;

const HeaderTitle = styled.h1`
    margin: 0 20px;
    font-size: inherit;
`;

export { Header, HeaderImg, HeaderTitle };
