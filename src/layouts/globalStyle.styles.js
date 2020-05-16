import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&family=Roboto&display=swap');
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }    

    body{
        background-color: #59D0C0;
        font-family: Montserrat,Roboto,Sans-Serif
    }
`;

export default GlobalStyle;
