export class ReinosModel {
    id: number;
    nome: string;
    descricao?: string;
    localizacao?: string;
    afiliacao?: string;
    img?: string

    constructor(id: number, nome: string, descricao: string,localizacao: string, afiliacao: string, img: string){
        this.id = id,
        this.nome = nome,
        this.descricao = descricao,
        this.localizacao = localizacao,
        this.afiliacao = afiliacao,
        this.img = img
    }

}