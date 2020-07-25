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
`;

const HeaderImg = styled.img`
    width: 50px;
    height: 100%;
`;

const HeaderTitle = styled.h1`
    margin: 0 20px;
    font-size: inherit;
`;

export { Header, HeaderImg, HeaderTitle };
