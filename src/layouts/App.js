import React, { Component } from "react";
import GlobalStyle from "./globalStyle.styles";
import MainPage from "../pages/MainPage/MainPage";
import WordContext from "./../context/wordsContext/words.context";
import wordsData from "./../data/words.json";

class App extends Component {
    render() {
        return (
            <WordContext.Provider value={wordsData}>
                <GlobalStyle />
                <MainPage />
            </WordContext.Provider>
        );
    }
}

export default App;
