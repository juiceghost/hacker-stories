//import React from 'react';
import { useState, useEffect } from 'react';

import Hello from './Hello';

import Place from './Place';
import ClassPlace from './ClassPlace';

import ACTOR_DATA, { API_URL, NOW_PLAYING, TOP_RATED, API_KEY, SETTINGS } from './data.js';
import Bar from './Bar';
import ActorList from './ActorList';
import { createGlobalStyle } from 'styled-components';
import MovieList from './MovieList';


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];


const welcome = {
  greeting: 'Yo',
  title: 'FE20'
};

const myArray = ["I'm", "an", "array"];
const myNumbers = [1, 4, 8];

function getTitle(title) {
  return 'From Function' + title;
}

function writePTags(arr) {
  return arr.map(function (x, index) {
    console.log(x)
    return (<p key={index}>{x}</p>);
  })
}

function writePTagsWithoutMap(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(<p key={i}>{arr[i]}</p>)
  }
  return newArr
}

const element = <Place location="Kilimanjaro" elevation="1500" />;

function App() {
  const [movies, setMovies] = useState([]);
  const [display, setDisplay] = useState(NOW_PLAYING);

  useEffect(() => {
    fetch(API_URL + display + API_KEY + SETTINGS)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])
  //console.log(ACTOR_DATA)
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>My Hacker Stories</h1>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <Bar />
        <MovieList data={movies} />
        {/* steg 1: lägg till 2 st knappar Now Playing, Top Rated
            steg 2: gör varsin funktion som körs vid onClick
            steg 3: se till att vid klick på Now Playing-knappen visas Now Playing-filmerna
            steg 4:          -- " --         Top Rated-knappen visas Top Rated
            ledtråd: setDisplay() används inte nu, det bör den göra efter ni är klara
        */}
        {/* <ActorList data={ACTOR_DATA.cast} /> */}

        {/* <ClassPlace location="Kilimanjaro" elevation="1500" />; */}
        {/*list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>);
      })*/}
      </div>
    </>
  );
}


export default App;
