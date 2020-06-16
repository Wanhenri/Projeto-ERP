import React from "react";
import styled from "styled-components";

const SubtitleWrapper = styled.div`
  text-align: center;
`;

const Subtitle = styled.h2`
  color: var(--color-second);
  font-size: var(--size-medium);
  padding-bottom: 10px;
`;

export default ({ content, ...props }) => (
  <SubtitleWrapper>
    <Subtitle {...props}>{content}</Subtitle>
  </SubtitleWrapper>
);
