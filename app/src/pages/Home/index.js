import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaHeart, FaComments, FaShareAlt } from "react-icons/fa";

import Title from "../../object/Title";
import Subtitle from "../../object/Subtitle";
import { Text } from "../../object/Text";
import { Strong } from "../../object/Strong";
import { Card } from "../../object/Card";


export const DateBlogWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
export const DateBlog = styled.p`
  color: #6b6b6b;
  font-size: var(--size-very-big);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
`;

export const InfoBlogWrapper = styled.section`
  display: flex;
  padding-left: 30px;
  flex-direction: row;
`;

export const ReactionBlogWrapper = styled.section`
  display: flex;
  margin-left: 30px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const BlogContainer = styled.section`
  width: 100%;
  margin: 10px auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;


`;

export const Icon = styled.button`
  padding: 8px;
  background: none;
  border: none;
`;

//////
export const Wrapper = styled.section`
  margin: 0 auto;  
  width: 80vw;
  padding-right: 30px;
  margin-top:50px;
`;

const logo = require("../../assent/wanderson.jpg");

export const Photo = styled.section`
  width: 170px;
  height: 250px;
  border-radius: 50px;
  background-size: cover;
  background-image: url(${logo});
  margin-bottom: 20px;
`;

export const ContainerPhoto = styled.section`
  display: flex;
  flex-flow: row wrap;
`;
export default function Home() {
  return (
    <>
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
          placa mãe Maximus Ranger VII, sistema operacional Windows 7 64 Bits.<br></br>
          Utilizei Visual Studio Code, na sua versão 1.46.0 (May 2020), com as extensões GitLens para controle de commits, ESLint, Color Highlight,
          Github, Paster JSON as Code e Prettier.
        </Text>
        
    </Wrapper>
    <BlogContainer>
      <Card style={{ maxWidth: 470 }}>
        <Strong>Aplicação da ferramenta Wgrib2 na manipulação de dados</Strong>
        <InfoBlogWrapper>
          <DateBlog>
            <FaCalendarAlt size={26} style={{ paddingRight: "10px" }} />
            Julho 21, 2020
          </DateBlog>
          <DateBlog>
            <FaComments size={26} style={{ paddingRight: "10px" }} />
            Comentários
          </DateBlog>
        </InfoBlogWrapper>
        <Title content={"Wanderson Henrique dos Santos"} />
        <Subtitle content={"teste"} />
        <Text>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
        </Text>
        <ReactionBlogWrapper>
          <Icon>
            <FaHeart size={26} color="red" />
          </Icon>
          <Icon>
            <FaShareAlt size={26} color="blue" />
          </Icon>
        </ReactionBlogWrapper>
      </Card>
    </BlogContainer>
    </>
  );
}
