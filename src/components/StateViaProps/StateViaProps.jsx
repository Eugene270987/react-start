import {useState} from "react";
import Button from "../Button/Button";
import Counter from "./Counter";

const texts = [
    "Click Me",
    "Show Me",
    "Navigate Me",
    "Press Me",
    "Hit Me"
]

export default function StateViaProps () {
    //console.log("StateViaProps rendered");
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
        console.log(count);
    }

    const handleResetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <Counter counter={count}></Counter>
            <>
                {texts.map((buttonText, index) => <Button
                    key={index}
                    onClick={incrementCount}
                    initialClassesList="btn"
                    text={buttonText}/>).slice(0, 3)}
            </>
            {!!count && <Button text="Reset" initialClassesList="btn" onClick={handleResetCount}/>}
            {/*<Button onClick={incrementCount} initialClassesList="btn" text="Click Me" />*/}
            {/*<Button onClick={incrementCount} initialClassesList="btn" text="Show Me" />*/}
            {/*<Button onClick={incrementCount} initialClassesList="btn" text="Navigate Me" />*/}
        </div>
    )
}