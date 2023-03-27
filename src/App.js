import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useRequestData } from "./hooks/useRequestData";


function App() {
  const [nomeUsuarios, isLoadingUsuario, errorUsuario] = useRequestData(`https://hp-api.onrender.com/api/characters`)
  const [postagens, isLoadingPostagens] = useRequestData(`${BASE_URL}comments`)


  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoadingUsuario ? <h1>Carregando...</h1> : nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name}
          image={usuario.image}
          house={usuario.house}
          backgroudColor={'none'}
          textColor={'none'}
          />)
        })}
        {errorUsuario && <h1>ERRO NA REQUISIÇÃO</h1>}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

      {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default App;



