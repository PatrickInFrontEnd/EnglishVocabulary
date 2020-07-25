import React from "react";
import { Header, HeaderImg, HeaderTitle } from "./headerComponent.styles";
import PLflag from "./../../assets/PL.gif";
import UKflag from "./../../assets/UK.gif";

const HeaderComponent = () => (
    <Header>
        <HeaderImg src={UKflag} />
        <HeaderTitle>ENG - PL</HeaderTitle>
        <HeaderImg src={PLflag} />
    </Header>
);

export default HeaderComponent;
