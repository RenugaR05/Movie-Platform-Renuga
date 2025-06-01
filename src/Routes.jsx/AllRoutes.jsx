import {Route,Routes} from 'react-router-dom';
import { Movielist, Pagenotfound } from '../pages';
import { Moviedetails,Search} from '../pages';
const AllRoutes = () => {
  return( 
  <>
   <Routes>
     <Route  path="/" element={<Movielist title="your guide to great movies" apiPath="movie/now_playing"/>}/>
     <Route  path="movies/popular" element={<Movielist title="popular movies" apiPath="movie/popular"/>}/>
     <Route  path="movies/top" element={<Movielist title="top rated movies" apiPath="movie/top_rated"/>}/>
     <Route  path="movies/upcoming" element={<Movielist title="upcoming movies" apiPath="movie/upcoming"/>}/>
     <Route path="movie/:id" element={<Moviedetails/>}/>
     <Route path="search" element={<Search apiPath="search/movie"/>}/>
     <Route path="*" element={<Pagenotfound/>} title="page not found" />  
     
     </Routes>
       
   </>
  );
    
  
};

export default AllRoutes