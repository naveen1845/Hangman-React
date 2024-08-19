export function getCharacters(text , usedLetters){
    usedLetters = usedLetters.map((letter) => letter.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const characters = text.toUpperCase().split('').map((letter) => {
        if(guessedLetters.has(letter)){
            return letter;
        }
        return '_';
    })
    return characters;
}