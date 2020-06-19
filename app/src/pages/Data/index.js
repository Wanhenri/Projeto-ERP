import React, { useState, useEffect } from "react";
import SimpleTable from '../../component/table'

import { Wrapper } from "./styles";



export default function Data () {
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/product_item`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then(data => {
          console.log(data.count)
          console.log(data)
          setPosts(data)
        })
        .catch((error) => console.log(error));
  
    }, []);
  
    useEffect(() => {
      console.log(posts)
    },[posts])

    return (    
        <Wrapper >
          <h1>TESTE{posts.count&&posts.count}</h1>
          {posts.product&&posts.product.map(w => (
            <h1>{w.id}</h1>
           ))}
          <SimpleTable name="Product" code="Code" price="Price" button="Add Product" path="/product"/>
          <SimpleTable name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>
        </Wrapper>    
    );
}




