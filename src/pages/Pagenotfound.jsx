import  pagenotfoundimage from "../assets/pagenotfoundimage.jpg";
import { Link } from "react-router-dom";
export const Pagenotfound = () => {
  return(
  <div className="container">
    <center><img src={pagenotfoundimage} className="img-fluid" /></center>
    <p className="text-center">
      <Link to="/" className="btn btn-danger">Goto Home Page</Link>
    </p>
  </div>
  );
}

 