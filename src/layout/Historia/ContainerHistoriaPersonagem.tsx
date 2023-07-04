import { useEffect, useState } from "react";

import { PersonagensModel } from "../../models/PersonagensModel";

export const ContainerHistoriaPersonagem: React.FC<{
  personagem: PersonagensModel;
  key: number;
}> = (props) => {
  return (
    <div className="container mt-5 rounded-5 ">
      <h2>{props.personagem.nome}</h2>
      <button
        className="btn btn-black rounded-circle"
        type="button"
        data-bs-toggle="collapse"

        data-bs-target={`#personagem${props.personagem.id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
      <figure className="figure">
        <img
          className="rounded-circle"
          src={require(`../../images/${props.personagem.img}.jpg`)}
          width="300"
          alt={`${props.personagem.id}`}
        />
        
      </figure>
      </button>
      <div className="collapse" id={`personagem${props.personagem.id}`}>
      <figcaption className="fs-4">{props.personagem.descricao}</figcaption>
      <p>Afiliação: {props.personagem.afiliacao}</p>
      </div>
    </div>
  );
};
