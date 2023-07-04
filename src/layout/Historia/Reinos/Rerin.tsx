import { ReinosModel } from "../../../models/ReinosModel";
import { useEffect, useState } from "react";

export const Rerin: React.FC<{}> = (props) => {
  const [reino, setReino] = useState<ReinosModel[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchReino = async () => {
      const baseUrl: string = "http://localhost:8080/reinos/rerin";

      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseJson = await response.json();
      const responseData = responseJson;
      const loadedReino: ReinosModel[] = [];

      loadedReino.push({
        id: responseData.id,
        nome: responseData.nome,
        descricao: responseData.descricao,
        localizacao: responseData.localizacao,
        afiliacao: responseData.afiliacao,
        img: responseData.img,
      });
      setReino(loadedReino);
    };
    fetchReino().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const funcaoMudaImagem = () => {
    var x = document.querySelectorAll('.servicos .col-md-3');

  }

  return (
    <div>
      {reino?.map((reino) => (
        <div>
          <h1>{reino.nome}</h1>
          <div className="container text-center ">
            <div className="row align-items-start">
                
            <div className="col">
              <img
                className="rounded-circle m-2"
                src={require(`../../../images/${reino.img}.jpeg`)}
                width="500"
                alt="d"
                
              />
            </div>
            <div className="col">
            <img
                className="rounded-circle m-2"
                src={require(`../../../images/${reino.img}2.jpeg`)}
                width="500"
                alt="d"
              />
            </div>
            
            </div>
          </div>

          <p className="m-5 fs-4">{reino.descricao}</p>
        </div>
      ))}
    </div>
  );
};
