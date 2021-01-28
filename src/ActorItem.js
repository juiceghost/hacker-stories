import styled from 'styled-components';

import { IMAGE_URL } from './data';

/*
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 200px;
  padding: 15px;
  border: 3px black solid;
  border-radius: 10px;
  margin: 12px;
}
*/

// 1. importera sc
// bygg en StyledLI
// byt ut li mot StyledLI i rendern

const StyledLI = styled.li`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 200px;
padding: 15px;
border: 3px black solid;
border-radius: 10px;
margin: 12px;
&>img {
    border-radius: 10px;
}
`


function ActorItem(props) {
  //console.log(props.item)
  return (<StyledLI>
    <img src={IMAGE_URL + props.item.profile_path} width="100%" alt="Actor" />
    <span>{props.item.name}</span><span>playing</span><span>{props.item.character}</span>
  </StyledLI>)

}

export default ActorItem;