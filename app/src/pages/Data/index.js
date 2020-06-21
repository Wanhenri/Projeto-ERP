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
          setPosts(data)
        })
        .catch((error) => console.log(error));
  
    }, []);
  


    return (    
        <Wrapper >
          {posts.product&&(
          <>           
          <SimpleTable 
              product={posts.product}
              id="ID" 
              name="Product" 
              code="Code" 
              price="Price" 
              button="Add Product" 
              path="/product"/>          
          </>
          )}
          
        </Wrapper>    
    );
}
//<SimpleTable valueID={w.id} id="ID" name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>




