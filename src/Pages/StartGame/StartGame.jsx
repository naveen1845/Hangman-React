import { useState } from "react";
import LetterButtons from "../../Components/LetterButtons/LetterButtons";
import MaskedText from "../../Components/MaskedText/MaskedText";
import { useLocation } from "react-router-dom";

function StartGame() {

    const [usedLetters ,setUsedLetters] = useState([])

    const onLetterClick =  function(character){
        setUsedLetters([...usedLetters, character])
    }

    const location = useLocation();
    const wordPassed = location.state?.wordPassed;



    return(
        <div>
            StartGame Page
            <br />

            <MaskedText text={wordPassed} usedLetters={usedLetters} />


            <div>
            < LetterButtons text={wordPassed} usedLetters={usedLetters } onLetterClick={onLetterClick}/>
            </div>
        </div>
    )
}

export default StartGame;