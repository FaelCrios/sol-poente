import { ReinosModel } from "../../models/ReinosModel"

export const ContainerHistoriaReinos: React.FC<{reinos: ReinosModel}> = (props) => {
    return (
        <div className="container flex mt-5 bg-dark rounded-5">
        <h2>{props.reinos.nome}</h2>
        <img src={require(`../../images/${props.reinos.img}.jpg`)} width='600' alt="d" />
        <div>{props.reinos.descricao}</div>
        <div>Devotos a: {props.reinos.afiliacao}</div>
        </div>
    )
}