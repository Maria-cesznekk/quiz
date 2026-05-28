// useState é uma ferramenta que cria memória
//quando o valor muda, a tela atualiza
//automaticamente
import React, { useState } from "react";

//View -> é como uma caixa que organiza os elementos
//Text -> é o único jeito de mostrar texto na tela
//TouchbleOpacity -> botão que podemos personalizar
//StyleSheet -> onde criamos os estilos (css sem js)
//Animat -. permite criar animações suaves
//Easing-> controla o ritmo das animaçoes
import {
  View,
  Text,
  TouchbleOpacity,
  StyleSheet,
  Animated,
  Easing,

} from 'react-native';
//banco de pergunta
//uma lista de (array) de objetos
//cada objetos é uma pergunta com suas opçoes de respostas e a resposta correta
const perguntas = [
{
  pergunta :'Qual a empresa criou o React?',
  opcoes:['Google', 'Meta', 'Microsoft', 'Apple'],
  correta: 'Meta',
  emoje:'⚛️',

},
{
  pergunta :'Qual linguagem o React Native usa?',
  opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'💛',
  
},
{
  pergunta :'Qual o hook usam para criar estado?',
  opcoes:['Props', 'Hooks', 'Estado(State)', 'Componentes'],
  correta: 'Estado(State)',
  emoje:'🪝',
  
},
{
  pergunta :'O que JSX significa?',
  opcoes:['Java Style Extension', 'JavaScript XML', 'JSON Syntax extra', 'Just Some exemplo'],
  correta: 'JavaScript XML',
  emoje:'🏷️',
  
},
{
  pergunta :'O que é um componente no React?',
  opcoes:['Um banco de dados', 'um pedaço reutilizavel da tela', 'um servidor', 'um arquivo css'],
  correta: 'um pedaço reutilizavel da tela',
  emoje:'🧠',
  
},
{
  pergunta :'Como chamamos as "caixinhas de memória" do React?',
  opcoes:['Props', 'Hooks', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'🧩',
  
},
{
  pergunta :'Qual linguagem o React Native usa?',
  opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'📦',
  
},
{
  pergunta :'Qual linguagem o React Native usa?',
  opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'⚡',
  
},
{
  pergunta :'Qual linguagem o React Native usa?',
  opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'🔄',
  
},
{
  pergunta :'Qual linguagem o React Native usa?',
  opcoes:['Python', 'Java', 'JavaScript', 'PHP'],
  correta: 'JavaScript',
  emoje:'✍️',
  
},
];
