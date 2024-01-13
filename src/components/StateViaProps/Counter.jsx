import Title from "../Title/Title";
export default function Counter ({counter}) {
    //console.log("counter rendered");
    return (
        <Title size={3} text={`Total clicks: ${counter}`}/>
    )
}