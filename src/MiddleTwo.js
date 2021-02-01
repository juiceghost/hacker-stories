import MiddleThree from './MiddleThree';

function MiddleTwo(props) {
    return (
        <>
            <p>Hej från MiddleTwo</p>
            <MiddleThree {...props} />
        </>)
}

export default MiddleTwo;
