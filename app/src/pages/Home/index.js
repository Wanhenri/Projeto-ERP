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

export default function Home() {
  return (
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
  );
}
