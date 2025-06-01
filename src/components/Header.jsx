import { NavLink, useNavigate } from "react-router-dom";
import  Movie from  '../assets/movie.png';

export const Header = () => {
const navigator=useNavigate();
const handleSearch=(e)=>{
  e.preventDefault();
  const queryTerm=e.target.search.value;
  e.target.reset();
  return navigator(`/search?q=${queryTerm}`);
}
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="#" className="navbar-brand">
          <i className="bi bi-camera-reels-fill"></i> Movie Platform
          {/* <img src={Movie} alt="" className="card-img-top" /> */}
          
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-md-0" >
            <li className="nav-item">
              <NavLink to="/Movie-Platform-Renuga" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/top">Toprated</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/popular">Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/upcoming">Upcoming</NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch}>
            <input type="search" className="form-control" placeholder="search" 
            name="search"/>

          </form>
        </div> 
      </div>

    </nav>
  
  );
};

