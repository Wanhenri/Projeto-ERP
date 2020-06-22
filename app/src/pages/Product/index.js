import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import FormLeadProduct from '../../component/FormLeadProduct';

export const Wrapper = styled.section`
  margin: 0 auto;  

  width: 80vw;
  padding-right: 30px
`;

function Product() {
  const [productpost, setProductpost] = React.useState([]);
  const addProduct = async (name,code,price) => {
    await fetch(`${process.env.REACT_APP_API_URL}/product_item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        code,
        price
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setProductpost(data);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    addProduct("Caixa","123123123","123123", () => {});
  }, []);

  return (
    <Wrapper>
        <FormLeadProduct  onSubmit={addProduct} />
    </Wrapper>
  );
}

export default Product;