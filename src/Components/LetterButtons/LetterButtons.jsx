// const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({text , usedLetters, onLetterClick}){

    const originaltext = new Set(text.toUpperCase().split(''));
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    function buttonStyle(letter){
        if(selectedLetters.has(letter)){
            return `${originaltext.has(letter)? 'bg-green-500' : 'bg-red-500'}`
        }else{
            return "bg-blue-500";
        }
    }

    function handleClick(event) {
        const character = event.target.value;
        console.log(character, 'clicked');
        
        onLetterClick?.(character);
    }

    const button = ALPHABETS.map((letter, index) => {
        return (
        <button
        key={`button-${index}`}
        value = {letter}
        onClick={handleClick}
        className={` m-2 p-2 w-10 ${buttonStyle(letter)}`}
        >
         {letter}
        </button>
        )
    })

    return(
        <>
        {button}
        </>
        
    )
}

export default LetterButtons;

