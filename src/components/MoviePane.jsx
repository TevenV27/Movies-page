
import { useEffect, useState } from "react"
import '../stylesheet/MoviePane.css'



export const MoviePane = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page=${page}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [page])


    const handlePrevius = () => {
        if (page > 1){
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        if (page < 1000){
            setPage(page + 1)
        }
    }

    return (
        <>        
            <div className="movie-message">
                <h1> Peliculas recomendas</h1>
            </div>
            <div className="movie-pane">
                {data.results && data.results.map(movie => (
                    <div key={movie.id} className="movie-box">
                        <img className="img-movie" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        {/* <p>{movie.overview}</p> */}
                    </div>
                ))}
            </div>
            <div className="button-box">
                <button onClick={handlePrevius}> Anterior </button>
                <button onClick={handleNext}> Siguiente </button>
            </div>
        </>

    );
}