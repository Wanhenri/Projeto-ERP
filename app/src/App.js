import React from 'react';
import styled from "styled-components";

import Routes from './routes';

import Reset from "./styles/generic/reset";
import Base from "./styles/base";
import Colors from './styles/setting/colors';


export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function App() {
  return (
    <div>
      <Reset />
      <Base />
      <Colors />
      <Routes />
      
    </div>
    
  );
}

export default App;
