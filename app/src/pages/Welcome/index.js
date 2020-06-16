import React from 'react';
import styled from 'styled-components';
import Title from '../../object/Title';
import { Text } from '../../object/Text';



export const Wrapper = styled.section`
  margin: 0 auto;  
  width: 80vw;
  padding-right: 30px;
  margin-top:50px;
`;

const ContainerEffect = styled.section`
  opacity: 3.5;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(75%);
    transition: 0.1s ease-out;
  }
`;

const logo = require("../../assent/wanderson.jpg");

export const Cracha = styled.section`
  width: 170px;
  height: 250px;
  border-radius: 50px;
  background-size: cover;
  background-image: url(${logo});
  margin-bottom: 20px;
`;

function Welcome() {
  return (
    <Wrapper>
        <Title content={"Olá, Meu nome é Wanderson Henrique dos Santos"} />
        <Cracha />
        <ContainerEffect><h2>Python Developer</h2></ContainerEffect>
        <ContainerEffect><h2>React Developer</h2></ContainerEffect>
        
        <Text>
          Este projeto foi desenvolvido para apresentar as habilidades de linguagem de programação, no ambito de backend e frontend.<br></br>
          Seu foco maior era o Backend, mostrando as técnicas de desenvolvimento em Python. Porém não pude deixar de apresentar um frontend
          com um pouco de qualidade e exploração das melhores praticas apresentadas atualmente.
          <br></br>
          <br></br>
          Seguimos os especificações que foi a utilização do Python, usando o Flask tanto como banco de dados como server, na sua versão 3.7.5.
          Para melhores práticas seguindo o conceito de 'Python Coding Style' e 'Clean Code', foi utilizado a ferramenta Flake8 para configuração
          em PEP-8.
          <br></br>
          <br></br>
          Seguimos utilizando a biblioteca React na sua versão 16.13.1.
          <br></br>
          <br></br>
          Para o projeto foi escrito uma documentação, e também para o App e Api foram apresentados documentos explicando um pouco sua funcionalida,
          estrutura e bibliotecas. 
          <br></br>
          <br></br>
          Para o desenvolvimento foi utilizado uma máquina Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz com 16GB de RAM, 2T HD e 120GB SSD, 
          placa mãe Maximus Ranger VII, sistema operacional Windows 7 64 Bits.<br></br>
          Utilizei Visual Studio Code, na sua versão 1.46.0 (May 2020), com as extensões GitLens para controle de commits, ESLint, Color Highlight,
          Github, Paster JSON as Code e Prettier.
        </Text>
        
    </Wrapper>
  );
}

export default Welcome;