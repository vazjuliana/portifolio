import {Component} from "react";
import './Cabecalho.css';


export class Cabecalho extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
          <header class="cabecalho">
          <nav class="cabecalho-menu">
              <a class="cabecalho-menu-item">Skills </a>
              <a class="cabecalho-menu-item">Projetos</a>
              <a class="cabecalho-menu-item">Formação</a>
              <a class="cabecalho-menu-item">Contatos</a>
          </nav>
          <div class="cabecalho-bloco-dois">
            <div class="cabecalho-bloco-dois-esquerda">
              <h1 class="cabecalho-h1">Juliana Vaz da Silva</h1>
              <h2 class="cabecalho-h2">Desenvolvedora Front-End</h2>
              
            </div>
              <img class="cabecalho-foto" src="imagens/minhaImagem.jpg"/>
          </div>
      </header>
        )
    }
}
