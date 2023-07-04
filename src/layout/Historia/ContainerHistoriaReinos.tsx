import { ReinosModel } from "../../models/ReinosModel";

export const ContainerHistoriaReinos: React.FC<{
  reinos: ReinosModel;
  key: number;
}> = (props) => {
  return (
    <div className="container flex mt-5 bg-dark rounded-5">
      <h2>{props.reinos.nome}</h2>

      <button
        className="btn btn-dark rounded-circle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#reinos${props.reinos.id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <img
          className="rounded-circle"
          src={require(`../../images/${props.reinos.img}.jpg`)}
          width="450"
          alt="d"
        />
      </button>

      <div className="collapse" id={`reinos${props.reinos.id}`}>
        <div>{props.reinos.descricao}</div>
        <div>Devotos a: {props.reinos.afiliacao}</div>
      </div>
    </div>
  );
};
