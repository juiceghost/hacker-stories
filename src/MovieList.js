import MovieItem from './MovieItem';
import styled from 'styled-components';

import MovieContext from './MovieContext';

const StyledUL = styled.ul`
display: flex;
list-style-type: none; 
flex-wrap: wrap;
`;

function MovieList() {
    return (
        <MovieContext.Consumer>
            {value => (
                <div><h1>{value.headerText}</h1>
                    <StyledUL>
                        {value.data.map(item => {
                            return (<MovieItem key={item.id} item={item} />)
                        })}
                    </StyledUL>
                </div>
            )}
        </MovieContext.Consumer>);
}

export default MovieList;