import { useState } from "react";


function Accordian({question , answer}){

    const [isClicked , setIsClicked] = useState(false);

    const toggleIsClicked = () => {
        setIsClicked(!isClicked);
    }


    return (
    <div className="flex flex-col">
        <div
        className={`relative cursor-pointer ${
            isClicked ? "after:content-['-']" : "after:content-['+']"
          }`}
        
        onClick={toggleIsClicked}>
            {question}
        </div>

        {isClicked && (
            <div>
                {answer}
            </div>
        )

        }

    </div>


        
    )
}

export default Accordian;