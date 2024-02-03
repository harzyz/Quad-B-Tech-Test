import { createContext, useEffect, useState } from "react"

const MovieContext = createContext()

export const MovieProvider = ({children}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const apiUrl = "https://api.tvmaze.com/search/shows?q=all";
    try {
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <MovieContext.Provider value={{
    movies
  }}>
    {children}
  </MovieContext.Provider>
}

export default MovieContext