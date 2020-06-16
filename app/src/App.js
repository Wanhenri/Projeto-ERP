import React from 'react';
import styled from "styled-components";
import SimpleMenu from './component/MenuDrop'

import Reset from "./styles/generic/reset";
import Base from "./styles/base";
import Data from '../src/pages/Data'

import Home from "../src/pages/Home"

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
      <SimpleMenu />
      <Data />
      <Home />
      
    </div>
    
  );
}

export default App;
