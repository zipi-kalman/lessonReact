import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
  <span class="navbar-brand text-light" >My-lesson</span>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to="/lesson1" className="text-light mx-3">lesson 1 </Link>
         <Link to="/lesson2" className="text-light mx-3">lesson 2 </Link>
         <Link to="/lesson3" className="text-light mx-3">lesson 3 </Link>
         <Link to="/lesson4" className="text-light mx-3">lesson 4 </Link>
         <Link to="/lesson5" className="text-light mx-3">lesson 5 </Link>
         <Link to="/lesson6" className="text-light mx-3">lesson 6 </Link>
         <Link to="/lesson7" className="text-light mx-3">lesson 7 </Link>
         <Link to="/users/:id" className="text-light mx-3">usersParams </Link>
      </div>
    </div>
  </div>
</nav>
    
    )  
}