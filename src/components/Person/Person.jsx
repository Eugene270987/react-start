import Title from "../Title/Title";
import './Person.scss';
export default function Person (props) {
    const {id, firstName, lastName, email, img} = props;

    return (
        <div className="person">
            <div className="person__id">{id}</div>
            <Title size={3} text={firstName}></Title>
            <div className="person__lastname">{lastName}</div>
            <img className="person__image" src={img} alt="person-look"/>
            <div className="person__email">{email}</div>
        </div>
    )
}