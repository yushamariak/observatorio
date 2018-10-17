import React, { Component } from 'react';
import './App.css';
//import axios from "axios";
import instituicoes from './mock/instituicoes';

import ObservatorioMenu from './components/ObservatorioMenu/ObservatorioMenu.js';
import Cloud from './components/TagCloud/Cloud.js';

class App extends Component {

  componentDidMount() {
    // axios.get("/instituicoes.json", {}).then((res) => {
    //   //on success
    //   console.log(res);

    //   this.setInstituicoes({
    //     instituicoes: res.data
    //   });
    // }).catch((error) => {
    //   //on error
    //   alert("There is an error in API call.");
    //   console.log(error);
    // });
    console.log(instituicoes);
  }

  render() {
    return (
      <div className="App">
        <ObservatorioMenu></ObservatorioMenu>
        
        <div><h2>Página Inicial</h2>
        <p>{instituicoes[0].id}</p>
        <p>{instituicoes[0].nome}</p>
        <p>{instituicoes[0].quantidadeProfessores}</p>
        <p>{instituicoes[0].sigla}</p></div>

        <Cloud></Cloud>
        
      </div>
    );
  }
}

export default App;
