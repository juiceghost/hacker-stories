import MiddleTwo from './MiddleTwo';

function MiddleOne(props) {
    console.log(props);
    return (<>
        <p>Hej från MiddleOne</p>
        <MiddleTwo {...props} />
    </>)
}

export default MiddleOne;
