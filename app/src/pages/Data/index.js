import React, { useState, useEffect } from "react";
import Dataproduct from '../../component/dataproduct';
import Datavendor from '../../component/datavendor';


import { Wrapper } from "./styles";



export default function Data () {
    return (    
        <Wrapper >
          <Dataproduct />
          <Datavendor />
        </Wrapper>    
    );
}





