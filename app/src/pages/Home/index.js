import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaHeart, FaComments, FaShareAlt } from "react-icons/fa";

import Title from "../../object/Title";
import Subtitle from "../../object/Subtitle";
import { Text } from "../../object/Text";
import { Strong } from "../../object/Strong";
import { Card } from "../../object/Card";

import data from '../../assent/datahome.json';

import { 
        DateBlogWrapper, 
        DateBlog, 
        InfoBlogWrapper, 
        ReactionBlogWrapper, 
        Icon, 
        Wrapper, 
        Photo, 
        ContainerPhoto 
      } from "./styles";


export const BlogContainer = styled.section`
  width: 100%;
  margin: 10px auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${Card} {
    flex: 1 0 30%;
  }
`;

export default function Home() {
  const [ jobs, setJobs ] = useState([]);

  useEffect(() => setJobs(data), [] );

  
  return (
    
    <Wrapper>
      
      <Title content={"Resumo Técnico"} />
      
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
        Para o projeto foi escrito uma documentação, e também para o App e Api foram apresentados documentos explicando um pouco sua funcionalidade,
        estrutura e bibliotecas. 
        <br></br>
        <br></br>
        Para o desenvolvimento foi utilizado uma máquina Intel(R) Core(TM) i7-4790K CPU @ 4.00GHz com 16GB de RAM, 2T HD e 120GB SSD, 
        placa mãe Maximus Ranger VII, sistema operacional Windows 7 64 Bits.
        <br></br>
        <br></br>
        Utilizei Visual Studio Code, na sua versão 1.46.0 (May 2020), com as extensões GitLens para controle de commits, ESLint, Color Highlight,
        Github, Paster JSON as Code e Prettier.
      </Text>
      
      <BlogContainer>
      {jobs.map((job) =>  
        <Card key={job.id} style={{ maxWidth: 470 }}>
          <Strong>{job.titleCard}</Strong>
          <InfoBlogWrapper>
            <DateBlog>
              <FaCalendarAlt size={26} style={{ paddingRight: "10px" }} />
              {job.dateblog}
            </DateBlog>
            <DateBlog>
              <FaComments size={26} style={{ paddingRight: "10px" }} />
              {job.coment}
            </DateBlog>
          </InfoBlogWrapper>
          <Title content={job.title} />
          <Subtitle content={job.subtitle} />
          <Text >
          {job.text.join('\n')}
          </Text>
        </Card> 
        )}            
      </BlogContainer>
     
    </Wrapper>    
  );
}
