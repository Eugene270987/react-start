//uncontrolled input - we are watching what user inputs only when we click the button
import './Card.scss';
export default function Card () {
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        console.log(userData);
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__wrapper">
                <label className="form__wrapper-label" htmlFor="userName">Username</label>
                <input className="form__wrapper-input" id="userName" name="username" type="text"/>
            </div>
            <div className="form__wrapper">
                <label className="form__wrapper-label" htmlFor="password">Password</label>
                <input className="form__wrapper-input" name="password" id="password" type="password"/>
            </div>
            <button className="btn-login" type="submit">Login</button>
        </form>
    )
}