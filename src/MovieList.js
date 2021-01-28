import MovieItem from './MovieItem';
import styled from 'styled-components';

const StyledUL = styled.ul`
display: flex;
list-style-type: none; 
flex-wrap: wrap;
`;

function MovieList(props) {
    return (
        <div><h1>Now playing</h1>
            <StyledUL>
                {props.data.map(item => {
                    return (<MovieItem key={item.id} item={item} />);
                })}
            </StyledUL>
        </div>
    )
}

export default MovieList;