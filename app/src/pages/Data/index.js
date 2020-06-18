import React from 'react';
import styled from "styled-components";
import SimpleTable from '../../component/table'

import { Wrapper } from "./styles";

export default function Data() {
  return (    
      <Wrapper >
        <SimpleTable name="Product" code="Code" price="Price" />
        <SimpleTable name="Vendor"  code="CNPJ" price="City " />
      </Wrapper>    
  );
}


