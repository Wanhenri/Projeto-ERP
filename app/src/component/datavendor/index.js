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

    //DELETE
    const [deletes, setdeletes] = React.useState([]);
    const DeleteData = async (id) => {
      await fetch(`${process.env.REACT_APP_API_URL}/vendor_item`, {
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
          {posts.vendor&&(          
          <SimpleTable 
              vendor={posts.vendor}
              id="ID" 
              name="Vendor" 
              cnpj="cnpj" 
              city="city" 
              button="Add Vendor" 
              path="/vendor"
              onSubmit={DeleteData} /> 
          )} 
        </Wrapper>    
    );
}
//<SimpleTable valueID={w.id} id="ID" name="Vendor"  code="CNPJ" price="City " button="Add Vendor" path="/vendor"/>




