import React, { useState, useEffect } from "react";
import SimpleTable from '../../component/tableproduct'

import { Wrapper } from "./styles";



export default function DataProduct () {
    const [posts, setPosts] = React.useState([]);
    const [postsvendor, setPostsvendor] = React.useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/product_item`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then(data => {
          console.log("product")
          console.log(data)
          setPosts(data)
        })
        .catch((error) => console.log(error));
  
    }, []);


    return (    
        <Wrapper >
          {posts.product&&(          
          <SimpleTable 
              product={posts.product}
              id="ID" 
              name="Product" 
              code="Code" 
              price="Price" 
              button="Add Product" 
              path="/product"/> 
          )} 
        </Wrapper>    
    );
}
//<SimpleTable valueID={w.id} id="ID" name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>




