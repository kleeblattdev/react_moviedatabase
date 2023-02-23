// library import 
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

// file import

// css import 
import "./Movielist.css"

// component import
import MovieItems from "../movieItems/MovieItems.js"

// Data Import
import Movies from "../../data/Data.js"

const MovieList = () => {
  const [movieItems,setMovieItems] = useState(Movies);

  //Sortiere von Datum aufwärts
  const handleSortDateAscend = () =>{
    const myMovieCopy = [...movieItems];
    
    //Sortiere nach Jahr aufsteigend
    myMovieCopy.sort((a,b) => a.year - b.year);

    //State update
    setMovieItems(myMovieCopy);
  }

  //Sortiere Datum abwärts
  const handleSortDateDescend = () =>{
    const myMovieCopy = [...movieItems];
    
  //Sortiere nach Jahr absteigend
  myMovieCopy.sort((a,b) => b.year - a.year);

  //State update
  setMovieItems(myMovieCopy);
}

//Sortierung nach Rating
const handleSortRate = () =>{
  const myMovieCopy = [...movieItems];
  
//Sortiere nach Rating absteigend
myMovieCopy.sort((a,b) => b.rate - a.rate);

//State update
setMovieItems(myMovieCopy);
}

//Sortierung von A - Z
const handleSortAtoZ = () =>{
  const myMovieCopy = [...movieItems];
  
//Sortiere nach Rating absteigend
myMovieCopy.sort((a,b) =>{
  if (a.title < b.title){
    return -1;
  } else {
    return 1;
  }
});

//State update
setMovieItems(myMovieCopy);
}

//Sortierung von Z - A
const handleSortZtoA = () =>{
  const myMovieCopy = [...movieItems];
  
//Sortiere nach Rating absteigend
myMovieCopy.sort((a,b) =>{
  if (b.title < a.title){
    return -1;
  } else {
    return 1;
  }
});
//State update
setMovieItems(myMovieCopy);
}

    return ( 
        <section className="movies">
          <article className ="buttons">
            <button onClick={handleSortDateAscend}>Sort by Date Ascending</button>
            <button onClick={handleSortDateDescend}>Sort by Date Descending</button>
            <button onClick={handleSortRate}>Best Rate</button>
            <button onClick={handleSortAtoZ}>A-Z</button>
            <button onClick={handleSortZtoA}>Z-A</button>
          </article>
        {movieItems.map((movie) => {
          return <MovieItems
            key={uuidv4()}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            rate={movie.rate}
            genre={movie.genre}
          />
        })}
      </section>
    );
}

export default MovieList;