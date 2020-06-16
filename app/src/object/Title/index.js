import React from "react";

import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: var(--color-second);
  font-size: var(--size-very-big);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2e2e33;
`;

export const Strong = styled.strong`
  color: var(--color-zero);
  font-size: 1.5em;
`;

export default ({ content }) => (
  <TitleWrapper>
    <Title>{content}</Title>
  </TitleWrapper>
);
