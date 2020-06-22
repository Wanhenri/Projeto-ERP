import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import FormLeadVendor from '../../component/FormLeadVendor'

export const Wrapper = styled.section`
  margin: 0 auto;  
  width: 80vw;
  padding-right: 30px;
  margin-top:50px;
`;


function Vendor() {

  const [vendorpost, setVendorpost] = React.useState([]);
  const addVendor = async (name,cnpj,city) => {
    await fetch(`${process.env.REACT_APP_API_URL}/vendor_item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        cnpj,
        city
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setVendorpost(data);
      })
      .catch((error) => console.log(error));
};

useEffect(() => {
  addVendor("Caixa","123123123","123123", () => {});
}, []);

  return (
    <Wrapper>
        <FormLeadVendor onSubmit={addVendor}/>
    </Wrapper>
  );
}

export default Vendor;