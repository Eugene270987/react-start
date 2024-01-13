import './Button.scss'
import {useState} from "react";
import {string} from "prop-types";


function Button ({ text, onClick, initialClassesList }) {
    //console.log("btn rendered");
    const [buttonText, setButtonText] = useState(text);
    const [classesList, setClassesList] = useState(initialClassesList);

    const onButtonClick = () => {
        setButtonText('Hello from React');
        setClassesList('btn btn-active');
        onClick();
    }
    return (
        <div>
            <button className={classesList} type="button" onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

Button.propTypes = {
   className: string,
}

export default Button;