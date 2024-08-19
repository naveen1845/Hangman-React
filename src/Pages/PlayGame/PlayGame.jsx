import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer"

function PlayGame() {

    const navigate = useNavigate();

    function FormSubmitHandler(value){
        navigate('/start', {state: {wordPassed : value}})
    }

    return (
        <div>
            PlayGame Page

            <TextInputFormContainer onSubmit={FormSubmitHandler}/>
        </div>
    )
}

export default PlayGame;