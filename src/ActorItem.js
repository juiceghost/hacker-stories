const imageURL = "https://image.tmdb.org/t/p/original";

function ActorItem(props) {
    //console.log(props.item)
    return (<li>
      <img src={imageURL + props.item.profile_path} width="100%" alt="Actor" />
      <span>{props.item.name}</span><span>playing</span><span>{props.item.character}</span>
    </li>)
  
  }

export default ActorItem;