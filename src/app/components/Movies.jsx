import Image from "next/image"

export default function Movies({list}) {
    const moviesList = list.map(movies => (
        <section className="">
            <Image src= {movies.image} alt={movies.name} width={200} height={200}/>
            <h2>{movies.name}</h2>
            <h2>{movies.year}</h2>
            <h2>{movies.director}</h2>
            <h2>{movies.synopsis}</h2>

            
        </section>
    ))
  return (
    <div className="grid grid-cols-2">
        {moviesList}
        </div>
  )
}
