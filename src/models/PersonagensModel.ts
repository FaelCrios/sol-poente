export class PersonagensModel {
  id: number;
  nome: string;
  sobrenome?: string;
  descricao?: string;
  afiliacao?: string;
  img?: string;

  constructor(
    id: number,
    nome: string,
    sobrenome: string,
    descricao: string,
    afiliacao: string,
    img: string
  ){
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.descricao = descricao;
    this.afiliacao = afiliacao;
    this.img = img;
  }
}
