import {persons} from "../../data/persons";
import Person from "../Person/Person";

export default function Persons () {
    return (
        <div className="persons">
            {persons.map(person => <Person key={person.id} {...person}/>)}
        </div>
    )
}