import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body{
        background-color: #59D0C0;
        font-family: Montserrat,Roboto Slab,Sans-Serif
    }
`;

export default GlobalStyle;
