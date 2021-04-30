import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { useState } from 'react';
import AddMovie from './AddMovie';
import Filter from './Filter';
import Rating from './Rating'

function App({Movies,setMovies}) {
 
   const handleMovieAdd=(newvalue)=>{
    setMovies([...Movies,newvalue])
  } 
  const [search, setsearch] = useState("")
  const searchhandle=(search)=>{
    setsearch(search)

  } 
  const [searchResult, setsearchResult] = useState("")
  const  [rate, setrate] = useState(0)
  const handleRate=(rate)=>{
    setrate(rate)
  }


  return (
    <div className="App">
     <div className="Flex">
   <Filter search={search}   searchkey={searchhandle} ></Filter> 
      
      <Rating handleRate={handleRate} rate={rate} setrate={setrate}></Rating></div>
  
      <MovieList Movies={Movies.filter(el=>el.title.toLowerCase().includes(search.toLowerCase())&& el.rating>=rate)}></MovieList>
      <AddMovie handleMovieAdd={handleMovieAdd}></AddMovie>
    </div>
  );
}

export default App;
