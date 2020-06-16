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

function Welcome() {
  return (
    <Wrapper>
        <Title content={"Olá, Meu nome é Wanderson Henrique dos Santos"} />
        <Photo />
        <ContainerEffect><h2>Mechanical Engineer</h2></ContainerEffect>
        <ContainerEffect><h2>Python Developer</h2></ContainerEffect>
        <ContainerEffect><h2>React Developer</h2></ContainerEffect>
        
        <Text>
          Agradeço pela oportunidade dada de apresentar um pouco das minhas habilidades de programação.
          <br></br>
          <br></br>
          Um breve Resumo sobre mim.         
          <br></br>
          <br></br>
          Sou Formado em Engenharia Mecânica e Técnico Mecânico, com Pós-Graduação em Engenharia da Qualidade Lean 
          Seis Sigma e Certificação Green Belt. Já trabalhei durante 6 meses como Engenheiro Mecânico e Engenheiro de Qualidade
          Autônomo no desenvolvimento um Projeto de instalação do ar condicionado, depois em projetos e em projetos de Melhoria Continua.
          <br></br>
          <br></br>
          Atualmente trabalho no Instituto Nacional de Pesquisas Espaciais (INPE), na Divisão de Modelagem e Desenvolvimento, 
          na avaliação e validação do modelo numérico de previsão. Principais atividades: dar suporte para os pesquisadores nas 
          simulações de Tempo e Clima utilizando algumas resoluções do modelo global de previsão numérica, na manipulação e 
          tratamento dos dados, na geração de campos espaciais e na realização de análises estatísticas.
          <br></br>
          <br></br>
          Com essa minha entrada para o Instituto Nacional de Pesquisas Espaciais no final de 2015, pude ter mais contato com o mundo 
          da tecnologia e suas maravilhas. Porém, a minha área de atuação dentro do Instituto estava longe de ser no setor de Backend
          ou Front-end. Trabalhei na área de validação do modelo Global (BAM) e com isso pude desenvolver e participar de diversos projetos
          <br></br>
          <br></br>
          Ainda em 2018 foquei nos estudos em Python paralelamente aos estudos de Desenvolvimento Web. De fato, me dediquei
          mais em Python, voltado para o campos de analises meteorológicas, do que Dev Web.
          No ano de 2019, surgiu a oportunidade de continuar os estudos de Desenvolvimento Web, porém muitas duvidas foram surgindo e persisti nos estudos
          Hoje, ano de 2020, graças a muita dedicação e muitas aulas(cursos online, aulas particulares, dicas de amigos), consigo apresentar alguns projetos-teste e projetos ‘da vida real’.
          <br></br>
          <br></br>
          Algumas participação em publicações:
          <br></br>
          <br></br>
          Manual sobre a estrutura, compilação e funcionamento do modelo atmosférico global do CPTEC/INPE - V.1.0<br></br>
          Yamada, B. A. G. P.; Jesus, S. M.; Silva, J.; Silva, J. R.; Santos, W. H.; Souza, D. C.; Kubota, P. Y.; Figueroa, S. N.
          <br></br>
          <br></br>
          Avaliação diagnóstica da evolução do SMG (Versão 2.1.0)<br></br>
          Sapucci, L. F.; Bastarz, C. F.; Mattos, J. G. Z.; Hernández Baños, I.; Eichholz, C.; Santos, W. H.; Negri, R. G.; Frassoni, A.
        </Text>
        
    </Wrapper>
  );
}

export default Welcome;