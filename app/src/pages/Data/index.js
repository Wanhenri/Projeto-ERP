import React from 'react';
import styled from "styled-components";
import SimpleTable from '../../component/table'

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 80vw;
  padding-right: 30px
`;

export default function Data() {
  return (    
      <Wrapper >
        <SimpleTable name="Product" code="Code" price="Price" />
        <SimpleTable name="Vendor"  code="CNPJ" price="City " />
      </Wrapper>    
  );
}


