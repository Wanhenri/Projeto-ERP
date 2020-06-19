import React, { useState, useEffect } from "react";
import SimpleTable from '../../component/table'

import { Wrapper } from "./styles";



export default function Data () {
    const [product, setProduct] = React.useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/product_item`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then(data => {
          setProduct(data)
        })
        .catch((error) => console.log(error));
  
    }, []);
  
    useEffect(() => {
      console.log(product)
    },[product])

    return (    
        <Wrapper >
          <h1>TESTE</h1>
          {product.map(w => (
            <h1>{w.name}</h1>
           ))}
          <SimpleTable name="Product" code="Code" price="Price" button="Add Product" path="/product"/>
          <SimpleTable name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>
        </Wrapper>    
    );
}




