// library import
import { v4 as uuidv4 } from 'uuid';

// file import
import "./MovieItems.css"

const MovieItems = (props) => {
    // console.log(props.genre)
    return ( 
        <article>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((genre) => {
                return <p key={uuidv4()}>{genre}</p>
            })}
            
        </article>
     );
}
 
export default MovieItems;