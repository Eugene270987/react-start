import './App.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';
import {RandomNumber} from "../RandomNumber/RandomNumber";
import StateViaProps from "../StateViaProps/StateViaProps";
//import Persons from "../Persons/Persons";
import Card from "../Card/Card";
function App() {

    return (
    <div className="App">
        <Title size={1} className="title-1" text="I am testing how all it works"></Title>
        <Title size={2} className="title-2" text="I am testing how all it works"></Title>
        <Title size={3} className="title-3" text="I am testing how all it works"></Title>
        <Title size={4} className="title-4" text="I am testing how all it works"></Title>
        <Title size={5} className="title-5" text="I am testing how all it works"></Title>
        <Title size={6} className="title-6" text="I am testing how all it works"></Title>
        <Button text="Click Me" initialClassesList="btn"></Button>
        <RandomNumber digit={100}></RandomNumber>
        <RandomNumber digit={1000}></RandomNumber>
        <StateViaProps></StateViaProps>
        {/*<Persons></Persons>*/}
        <Card></Card>
    </div>
  );
}
export default App;
