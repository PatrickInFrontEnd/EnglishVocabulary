import React, { useContext } from "react";
import WordComponent from "./../../components/wordComponent/wordComponent";
import WordsWrapper from "./MainPage.styles";
import WordsContext from "./../../context/wordsContext/words.context";
import Header from "../../components/headerComponent/headerComponent";

const MainPage = () => {
    const { words } = useContext(WordsContext);

    return (
        <>
            <Header />
            <WordsWrapper>
                {words.map((termObject, i) => (
                    <WordComponent key={i} word={termObject} />
                ))}
            </WordsWrapper>
        </>
    );
};

export default MainPage;
