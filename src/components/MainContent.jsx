import { useState } from "react";
import movies from "../movies";
import MovieCard from "./MovieCard";


export default function MainContent() {

  const [entradas, setEntradas] = useState(0)
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState('')

  
  function movieClick (pelicula){
    setPeliculaSeleccionada(pelicula)
  }
  function decrementEntradas(){
    if (entradas >= 1) {
      setEntradas(entradas-1)
    }
  }
  function incrementEntradas(){
    setEntradas(entradas+1)
  }

  return (
    <main>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="font-weight-light">Cartelera</h1>
        </div>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {
            movies.map((movie) =>
              <div id={movie.id} key={movie.id} className="col" onClick={() => movieClick(movie.title)} role="button">
                <MovieCard
                  title={movie.title}
                  description={movie.description}
                  poster={movie.poster}
                />
              </div>
            )
          }
          
        </div>
      </div>
      <div className="container mx-auto mt-5 p-5 text-center d-flex gap-3 justify-content-center align-items-center position-relative">
        <p className="position-absolute top-0 start-0 p-5 display-6">{peliculaSeleccionada}</p>
        <button className="btn btn-secondary" onClick={incrementEntradas} disabled={peliculaSeleccionada.trim().length == 0}>+</button>
        <button className="btn btn-secondary" onClick={decrementEntradas} disabled={peliculaSeleccionada.trim().length == 0}>-</button>
        <div className="display-4">
          {entradas}
        </div>
      </div>
    </div>
  </main>
  )
}
