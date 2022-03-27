import {Component} from "react";
import './Cabecalho.css';

export class Cabecalho extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
          
          <header class="cabecalho">
          <nav>
            <ul class="cabecalho-menu">
              <li><a class="cabecalho-menu-item">Skills</a></li>
              <li><a class="cabecalho-menu-item">Projetos</a></li>
              <li><a class="cabecalho-menu-item">Formação</a></li>
              <li><a class="cabecalho-menu-item">Contatos</a></li>
            </ul>
          </nav>
          <div class="cabecalho-bloco-dois">
            <div class="cabecalho-bloco-dois-esquerda">
              <img class="cabecalho-nuvem" src="imagens/balao1.png" alt="balao_pop_art"/>
            </div>
              <img class="cabecalho-foto" src="imagens/minhaImagem.jpg" alt="foto"/>
          </div>
      </header>
        )
    }
}
