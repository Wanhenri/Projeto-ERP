import React from 'react';
import styled from "styled-components";
import FormLeadVendor from '../../component/FormLeadVendor'



export const Wrapper = styled.section`
  margin: 0 auto;  
  width: 80vw;
  padding-right: 30px;
  margin-top:50px;
`;


function Vendor() {
  return (
    <Wrapper>
        <FormLeadVendor />
    </Wrapper>
  );
}

export default Vendor;