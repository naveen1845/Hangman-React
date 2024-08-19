import { getCharacters } from "./MaskedTextUtility";




function MaskedText({text , usedLetters}){
   

    const letters = getCharacters(text , usedLetters);

    return (
        <div>
        
        {
            letters.map((letter, index) => {
               return <span key={index}  className="m-1">{letter}</span>
            })
        }

        
        
        </div>
    )
}

export default MaskedText