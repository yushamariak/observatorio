import React, { Component } from 'react';
import { TagCloud } from "react-tagcloud";
import indicadores from "./../../mock/indicadoresInstituicoes.json";
 
var arrIndicadores = indicadores.listaPalavraChave;
var arr = [];

var a = [];

for (var obj of arrIndicadores) {

  arr.push(
    { 
      value: obj.palavra,
      count: obj.quantidade
    }
  );
  console.log('te peguei , otário!');
}

export default class Cloud extends Component {
  render() {
   
    return (
      <div>
        <TagCloud 
          minSize = {12}
          maxSize = {35}
          tags    = {arr}
          //onClick={tag => alert(`'${tag.value}' was selected!`)}
        >
        </TagCloud>
      </div>
    );
  }
}