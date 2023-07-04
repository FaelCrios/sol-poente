import React from "react";
import "./App.css";
import { NavBar } from "./layout/NavbarAndFooter/NavBar";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { Home } from "./layout/Home/Home";
import { Historia } from "./layout/Historia/Historia";
import { Footer } from "./layout/NavbarAndFooter/Footer";
import { Tedon } from "./layout/Historia/Reinos/Tedon";

function App() {
  return (
    <div className="bg-black text-light text-center">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reinos">
          <Historia />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
