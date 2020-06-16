import React from 'react';
import styled from "styled-components";



export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function Vendor() {
  return (
    <Wrapper>
        <div>TESTE VENDOR</div>
    </Wrapper>
  );
}

export default Vendor;