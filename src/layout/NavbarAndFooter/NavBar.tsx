import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
<div className="bg-black  py-3 p-3">
    <nav className=" container text-center ">
        <div className="d-flex justify-content-evenly px-3 py-3 fo">
          <div>
            <NavLink className="nav-link text-light fs-2" to="/historia">
              História
            </NavLink>
          </div>
          <div>
            <a className="nav-link text-light fs-2" href="/">
            Home
            </a>
          </div>
          <div>
            <NavLink to="/atualizacoes" className="nav-link text-light fs-2">
              Atualizações
            </NavLink>
          </div>
        </div>
    </nav>
    </div>
            
    )
}