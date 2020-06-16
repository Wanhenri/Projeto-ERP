import React from 'react';
import styled from 'styled-components';
import FormLeadProduct from '../../component/FormLeadProduct';



export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function Product() {
  return (
    <Wrapper>
        <FormLeadProduct />
    </Wrapper>
  );
}

export default Product;