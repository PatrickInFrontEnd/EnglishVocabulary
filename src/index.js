import React from "react";
import ReactDOM from "react-dom";
import App from "./layouts/App";
import WordsProvider from "./context/wordsContext/words.provider";

ReactDOM.render(
    <WordsProvider>
        <App />
    </WordsProvider>,

    document.getElementById("root")
);
