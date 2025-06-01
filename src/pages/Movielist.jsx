import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";
export const Movielist = ({title,apiPath}) => {
  const {data:movies}=usefetch(apiPath);
  useEffect(()=>{
    document.title=title;
  })
  const navigator=useNavigate();
  return (
    <div>
      <main className="container">
        {title === "Movie-Platform"?(<div className="bg-body-tertiary p-5 border mb-5">
          <h3 className="text-primary">Welcome To Movie Platform</h3>
          <p className="lead">Discover movies that match your interests and emotions with personalized suggestions, curated collections, and instant search. Your ultimate guide to finding great films</p>
          <button className="btn btn-primary" onClick={()=>{navigator("/movies/upcoming")}}>Upcoming Movies</button>
        </div>
      ):("")
      }
        <h5 className="text-danger py-2 border-bottom" >{title}</h5>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
          {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>         
           })}
        

        </div>
      </main>
    </div>
  )
}

