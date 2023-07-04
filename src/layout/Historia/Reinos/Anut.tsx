import { useEffect, useState } from "react";
import { ReinosModel } from "../../../models/ReinosModel";


export const Anut: React.FC<{}> = (props) => {

    const [reino, setReino] = useState<ReinosModel[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchReino = async () => {
          const baseUrl: string = "http://localhost:8080/reinos/anut";
    
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
    
      return (
        <div>
          {reino?.map((reino) => (
            <div>
              <h1>{reino.nome}</h1>
              <img
              className="rounded-circle m-2"
              src={require(`../../../images/${reino.img}.jpeg`)}
              width="600"
              alt="d"
            />
              <p className="m-5 fs-4">{reino.descricao}</p>
            </div>
    
            ))}
        </div>
      )

}