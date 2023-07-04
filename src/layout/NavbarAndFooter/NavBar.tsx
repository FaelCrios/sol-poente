import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
<div className="bg-black  py-3">
    <nav className=" container text-center ">
        <div className="d-flex justify-content-evenly pt-3 fo">
          <div>
            <a className="nav-link text-light fs-1" href="/">
            Home
            </a>
          </div>
          <div>
            <NavLink className="nav-link text-light fs-1" to="/reinos">
              Mundo
            </NavLink>
          </div>
        </div>
    </nav>
    </div>
            
    )
}