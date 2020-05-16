import React, { useContext } from "react";
import WordComponent from "./../../components/wordComponent/wordComponent";
import MainPageWrapper from "./MainPage.styles";
import WordsContext from "./../../context/wordsContext/words.context";

const MainPage = () => {
    const WordList = useContext(WordsContext);
    return (
        <MainPageWrapper>
            {WordList.terms.map((term, i) => (
                <WordComponent key={i} word={term} />
            ))}
            ;
        </MainPageWrapper>
    );
};

export default MainPage;
