import { useEffect, useState } from "react";

import { PersonagensModel } from "../../models/PersonagensModel";
import { ContainerHistoriaPersonagem } from "./ContainerHistoriaPersonagem";
import { ReinosModel } from "../../models/ReinosModel";
import { ContainerHistoriaReinos } from "./ContainerHistoriaReinos";
import { NavbarReinos } from "./NavbarReinos";
import { NavLink, Route, Switch } from "react-router-dom";
import { Tedon } from "./Reinos/Tedon";
import { Anut } from "./Reinos/Anut";
import { Rerin } from "./Reinos/Rerin";
import { Izend } from "./Reinos/Izend";

export const Historia = () => {
  const [personagens, setPersonagens] = useState<PersonagensModel[]>([]);
  const [reinos, setReinos] = useState<ReinosModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [localizacaoSelection, setLocalizacaoSelection] = useState("");
  const [search, setSearchUrl] = useState("");

  useEffect(() => {
    //fetch dos personagens
    const fetchPersonagens = async () => {
      const baseUrl: string = "http://localhost:8080/personagens";

      const url: string = `${baseUrl}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      const responseData = responseJson.content;

      const loadedPersonagens: PersonagensModel[] = [];
      for (const key in responseData) {
        loadedPersonagens.push({
          id: responseData[key].id,
          nome: responseData[key].nome,
          sobrenome: responseData[key].sobrenome,
          descricao: responseData[key].descricao,
          afiliacao: responseData[key].afiliacao,
          img: responseData[key].img,
        });
      }

      setPersonagens(loadedPersonagens);
      setIsLoading(false);
    };
    fetchPersonagens().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    //fetch dos reinos
    const fetchReinos = async () => {
      const baseUrl: string = "http://localhost:8080/reinos";

      const url: string = `${baseUrl}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();
      const responseData = responseJson.content;

      const loadedReinos: ReinosModel[] = [];
      for (const key in responseData) {
        loadedReinos.push({
          id: responseData[key].id,
          nome: responseData[key].nome,
          descricao: responseData[key].descricao,
          afiliacao: responseData[key].afiliacao,
          img: responseData[key].img,
        });
      }

      setReinos(loadedReinos);
      setIsLoading(false);
    };
    fetchReinos().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    <div className="container m-5">
      <p>loading</p>
    </div>;
  }

  if (httpError) {
    <div className="container m-5">
      <p>Something went wrong: {httpError}</p>
    </div>;
  }

  const campoNavbar = (value: string) => {
    if (value.toLocaleLowerCase() === "vogno") {
      setLocalizacaoSelection(value);
      setSearchUrl(`/reinos/${value}`);
    } else {
      setSearchUrl(`/reinos`);
    }
  };

  return (
    <div className="container mt-5 ">
      <NavbarReinos />
      <Switch>
        <Route path="/reinos" exact>
          <>
            <h1>Explore o tortuoso mundo de Por sol!</h1>
            <img
              className="m-2"
              src={require(`../../images/Laremoer-mapa.png`)}
              width="1000"
              alt="d"
            />
            <h2>Tente desbravar os 8 cantos do mundo</h2>
          </>
        </Route>
        <Route path="/reinos/tedon">
          <Tedon />
        </Route>
        <Route path="/reinos/anut">
          <Anut />
        </Route>
        <Route path="/reinos/rerin">
          <Rerin />
        </Route>
        <Route path="/reinos/izend">
          <Izend />
        </Route>
      </Switch>
    </div>
  );
};

{
  /* <div>
        {personagens.slice(0, 1).map((personagem) => (
          <ContainerHistoriaPersonagem
            personagem={personagem}
            key={personagem.id}
          />
        ))}
      </div>

      <h1>Os reinos presentes neste mundo:</h1>
      <div>
        {reinos.slice(0, 2).map((reinos) => (
          <ContainerHistoriaReinos reinos={reinos} key={reinos.id} />
        ))}
      </div>*/
}
