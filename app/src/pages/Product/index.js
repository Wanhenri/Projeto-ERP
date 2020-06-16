import React from 'react';
import styled from "styled-components";



export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function Product() {
  return (
    <Wrapper>
        <div>TESTE PRODUCT</div>
    </Wrapper>
  );
}

export default Product;