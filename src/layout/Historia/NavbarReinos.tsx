import { NavLink } from "react-router-dom";
import { PersonagensModel } from "../../models/PersonagensModel";
import { useState } from "react";



export const NavbarReinos: React.FC<{}> = (props) => {

  return (
    <div className="d-flex justify-content-around mb-5">
      <nav className="navbar navbar-expand-lg text-light ">
        <div className="">
          <ul className="nav nav-underline fs-4">
            <li className="nav-item ">
              <NavLink className="nav-link text-light" to="/reinos/vogno">
                Choaldir
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/izend">
                Izend
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/anut">
                Anut
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/rerin">
                Rerin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/solar">
                Solar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/nebula">
                Nebula
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/salla">
                Salla
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/reinos/veece">
                Veece
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link text-light" to="/reinos/tedon">
                Tedon
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
