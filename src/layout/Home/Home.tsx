import { Mapa } from "../Mapa/Mapa"



export const Home = () => {
    return(
        <body className="bg-black text-light" >
            <div className="text-center">
            <Mapa/>
            <h1 className="display-3 fw-bold">Seja bem vindo ao mundo do Sol poente</h1>
            <p  className="fs-5"> "- Desde que o Solar abandonou nossas vidas, o desespero se torna algo cotidiano"</p>
            <div className="pt-5">
                <div className="p-5 fs-5">
                    <h3 className="display-5 fw-bold">Sobre a obra:</h3>
                    <p>Se trata de um esforço conjunto de um grupo de amigos para a criação e desenvolvimento de um mundo fantástico</p>
                    <p>Temos o plano de transformar este universo em uma saga de livros e também em cenários de RPG</p>
                    <p>Planejamos expandir este incrível mundo, para que ele possua aspectos únicos tal qual lingua própria</p>
                    <p>e para que nossos leitores/jogadores fiquem instigados em se aventurar pelo sombrio mundo de Sol poente</p>
                </div>
            </div>
            </div>
        </body>
    )
}