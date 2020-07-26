import styled from "styled-components";
import { flexCenter } from "./../style_mixins/flexCenter.mixin";

const Footer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    margin: 30px 0 0;
    padding: 0 20px;

    @media screen and (max-width: 1080px) {
        justify-content: center;
    }

    @media screen and (max-width: 450px) {
        padding: 0;
    }
`;

const FooterDirectorLink = styled.a`
    display: block;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 22px;

    @media screen and (max-width: 450px) {
        font-size: 16px;
    }
`;

export { Footer, FooterDirectorLink };
