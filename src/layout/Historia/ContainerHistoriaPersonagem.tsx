import { useEffect, useState } from "react";

import { PersonagensModel } from "../../models/PersonagensModel";

export const ContainerHistoriaPersonagem: React.FC<{personagem: PersonagensModel}> = ( props ) => {
  return (
    <div className="container mt-5 mb-5">
        <h2>{props.personagem.nome}</h2>
        <img src={require(`../../images/${props.personagem.img}.jpg`)} width='600' alt="d" />
        <h3>{props.personagem.descricao}</h3>
        <p>Afiliação: {props.personagem.afiliacao}</p>
        {/* //<img src={require("../../images/aspectodasmaldicoes.jpg")} alt="" /> */}
    </div>
  );
};
