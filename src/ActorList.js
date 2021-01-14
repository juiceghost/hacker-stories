import ActorItem from './ActorItem';
import styled from 'styled-components';

/*
ul {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
}
*/

// steg 1. importea styled components i scopet 
// steg 2. styla UL:en med hjälp av styled components

const StyledUL = styled.ul`
display: flex;
list-style-type: none; 
flex-wrap: wrap;
`;

const StyledActorItem = styled(ActorItem)`
background-color: red;

`


function ActorList(props) {
    //console.log(props.data)
    // skriv om ActorList's render så att den renderar en ActorItem
    // för varje skådis i props.data med hjälp av .map
    return (<StyledUL>{props.data.map(function (item) {
      return (<ActorItem key={item.id} item={item} />);
    })}</StyledUL>);
  }

export default ActorList;
