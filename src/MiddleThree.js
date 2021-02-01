import MovieList from './MovieList';

function MiddleThree(props) {
    return (
        <>
            <p>Hej från MIddleThree</p>
            <MovieList {...props} />
        </>);
}

export default MiddleThree;
