import React, { Component } from 'react'
import instituicoes from './mock/instituicoes.json';

export default class Instituicoes extends Component {
  render() {
	return (
	  <div>
		<h2>Página Inicial</h2>
        <p>{instituicoes[0].id}</p>
        <p>{instituicoes[0].nome}</p>
        <p>{instituicoes[0].quantidadeProfessores}</p>
        <p>{instituicoes[0].sigla}</p>
	  </div>
	)
  }
}
