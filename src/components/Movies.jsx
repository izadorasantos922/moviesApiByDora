import { useState, useEffect } from 'react'
import './Movie.css'
const Movies = () => {
const [movies, setMovies ] = useState([]);

const url = "http://localhost:3000/filmes"

useEffect(() =>{
  async function getMoviesData(){
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data)
  }

  getMoviesData();
}, [])

  return  <main>{movies.map(movie => (
    <a href={movie.trailer}>
    <div className="movie" key={movie.id}>
      <img src={movie.img} alt="" />
      <p>{movie.nome}</p>
     </div>
  </a>
  ))}
  </main>
}

export default Movies