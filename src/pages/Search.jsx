import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { usefetch } from "../hooks/usefetch";



export const Search = ({apiPath}) => {
  const [SearchParams]=useSearchParams();
  const queryTerm=SearchParams.get("q");
  const {data:movies}=usefetch(apiPath , queryTerm);

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}`;
  });
  
  return(
    
    <main className="container">
      <h5 className="text-danger py-2 border-bottom">
        {movies.length==0?`no result found for ${queryTerm}`:`Result for ${queryTerm}`}
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
          {movies.map((movie)=>{
          return <Card key={movie.id} movie={movie}/>         
           })}
        

        </div>
    </main>
  )
}

