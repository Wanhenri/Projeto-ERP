import React, { useState, useEffect } from "react";
import SimpleTable from '../../component/tablevendor'

import { Wrapper } from "./styles";



export default function DataVendor () {
  //function fetchData(url) {
  //  return fetch(url)
  //            .then(checkStat)
  //  
  //}
//
    //GET
    const [posts, setPosts] = React.useState([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/vendor_item`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then(data => {
          console.log("GET")
          setPosts(data)
        })
        .catch((error) => console.log(error));
  
    }, []);


    return (    
        <Wrapper >
          {posts.vendor&&(          
          <SimpleTable 
              vendor={posts.vendor}
              id="ID" 
              name="Vendor" 
              cnpj="cnpj" 
              city="city" 
              button="Add Vendor" 
              path="/vendor"/> 
          )} 
        </Wrapper>    
    );
}
//<SimpleTable valueID={w.id} id="ID" name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>




