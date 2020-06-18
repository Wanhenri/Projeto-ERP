import styled from "styled-components";

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