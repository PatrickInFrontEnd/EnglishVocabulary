import React, { Component, useContext } from "react";
import GlobalStyle from "./globalStyle.styles";
import MainPage from "../pages/MainPage/MainPage";
import WordsContext from "./../context/wordsContext/words.context";

class App extends Component {
    render() {
        return (
            <WordsContext.Consumer>
                {({ voices }) => {
                    if (voices.length) {
                        return (
                            <>
                                <GlobalStyle />
                                <MainPage />
                            </>
                        );
                    } else {
                        return (
                            <>
                                <GlobalStyle />
                                <h1>Loading...</h1>
                            </>
                        );
                    }
                }}
            </WordsContext.Consumer>
        );
    }
}

export default App;
