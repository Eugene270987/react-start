import './Title.scss'
import { number } from 'prop-types';

function Title({ size, text }) {
    const TitleComponent = `h${size}`;
    return (
        <TitleComponent className={`title title-${size}`}>{text}</TitleComponent>
    );
}

Title.propTypes = {
    size: number
}

export default Title;

