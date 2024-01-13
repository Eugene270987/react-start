import './RandomNumber.scss';
import Title from "../Title/Title";
import {useState} from "react";
import generateNum from "../../common/generateNum";
export function RandomNumber ({digit}) {
    console.log('rendered');
    const [num, setNum] = useState(generateNum(digit));
    const changeNum = () => {
        setNum(generateNum(digit));
    }

    return (
        <div className="wrapper">
            <Title size={2} text={num}></Title>
            <button onClick={changeNum} className="btn">Generate new random number</button>
        </div>
    )
}