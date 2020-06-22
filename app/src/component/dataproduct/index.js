import React, { useState, useEffect } from "react";
import SimpleTable from '../../component/tableproduct'

import { Wrapper } from "./styles";



export default function DataProduct () {
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
          console.log("product")
          console.log(data)
          setPosts(data)
        })
        .catch((error) => console.log(error));
  
    }, []);

    //DELETE
    const [deletes, setdeletes] = React.useState([]);
    const DeleteData = async (id) => {
      await fetch(`${process.env.REACT_APP_API_URL}/product_item`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("DELETE")
          console.log(data)
          setdeletes(data);
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      DeleteData("0", () => {});
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
              path="/product"
              onSubmit={DeleteData}/> 
          )} 
        </Wrapper>    
    );
}
//<SimpleTable valueID={w.id} id="ID" name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>




