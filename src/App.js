//import React from 'react';
import { useState, useEffect } from 'react';

import ACTOR_DATA, { API_URL, NOW_PLAYING, TOP_RATED, API_KEY, SETTINGS } from './data.js';
import Bar from './Bar';
import ActorList from './ActorList';
import { createGlobalStyle } from 'styled-components';
import MovieList from './MovieList';
import MiddleOne from './MiddleOne';

import MovieContext from './MovieContext';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`
function App() {
  const [movies, setMovies] = useState([]);
  const [display, setDisplay] = useState(NOW_PLAYING);

  useEffect(() => {
    //console.log("Hej från useEffect");
    fetch(API_URL + display + API_KEY + SETTINGS)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [display])
  //console.log(ACTOR_DATA)
  const contextDataObject = {
    data: movies,
    headerText: (display == NOW_PLAYING ? 'Now playing' : 'Top Rated')
  };

  console.log(contextDataObject);

  return (
    <>
      <MovieContext.Provider value={contextDataObject}>
        <GlobalStyle />
        <div>
          <h1>My Hacker Stories</h1>

          <label htmlFor="search">Search: </label>
          <input id="search" type="text" />

          <Bar />
          <button onClick={() => setDisplay(NOW_PLAYING)}>NOW PLAYING</button>
          <button onClick={() => setDisplay(TOP_RATED)}>TOP RATED</button>
          {/* ditt uppdrag blir att flytta dessa två knappar till MovieList
           MEN: du får under inga omständigheter flytta statet.
          dvs: MovieList får ICKE innehålla useSTate, ej heller MiddleOne, Two, Three
          förtydligande: dessa två buttons ska renderas i MovieList
          jag godkänner alla sätt ni löser detta på, men blir extra glad om ni använder Contexten
          */}
          <MiddleOne />
          {/* <MovieList data={movies} headerText={display == NOW_PLAYING ? 'Now playing' : 'Top Rated'} /> */}
          {/* steg 1: lägg till 2 st knappar Now Playing, Top Rated
            steg 2: gör varsin funktion som körs vid onClick
            steg 3: se till att vid klick på Now Playing-knappen visas Now Playing-filmerna
            steg 4:          -- " --         Top Rated-knappen visas Top Rated
            ledtråd: setDisplay() används inte nu, det bör den göra efter ni är klara
        */}
        </div>
      </MovieContext.Provider>
    </>
  );
}


export default App;
